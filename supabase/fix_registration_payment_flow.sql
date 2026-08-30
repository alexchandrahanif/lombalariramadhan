-- Sinkronisasi final status pembayaran tim dengan transaksi pendaftaran.
-- Jalankan satu kali melalui Supabase SQL Editor.

alter table public.teams
  alter column registration_fee set default 0,
  alter column payment_status set default 'unpaid';

alter table public.teams
  add column if not exists registration_transaction_id uuid
  references public.transactions(id) on delete set null;

-- Bersihkan pemasukan tim yang belum lunas.
delete from public.transactions transaction_row
using public.teams team
where transaction_row.type = 'income'
  and transaction_row.category = 'registration'
  and transaction_row.description = 'Pendaftaran tim ' || team.name
  and team.payment_status <> 'paid';

-- Hubungkan transaksi lama milik tim yang sudah lunas.
update public.teams team
set registration_transaction_id = (
  select transaction_row.id
  from public.transactions transaction_row
  where transaction_row.type = 'income'
    and transaction_row.category = 'registration'
    and transaction_row.description = 'Pendaftaran tim ' || team.name
  order by transaction_row.created_at asc
  limit 1
)
where team.payment_status = 'paid'
  and team.registration_fee > 0
  and team.registration_transaction_id is null;

update public.teams
set registration_transaction_id = null
where payment_status <> 'paid' or registration_fee <= 0;

-- Hapus transaksi pendaftaran lama, duplikat, atau orphan yang tidak menjadi
-- transaksi resmi milik tim berstatus lunas.
delete from public.transactions transaction_row
where transaction_row.type = 'income'
  and transaction_row.category = 'registration'
  and not exists (
    select 1
    from public.teams team
    where team.payment_status = 'paid'
      and team.registration_fee > 0
      and team.registration_transaction_id = transaction_row.id
  );

drop trigger if exists on_team_registered on public.teams;

create or replace function public.sync_registration_income()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.payment_status = 'paid' and new.registration_fee > 0 then
    if new.registration_transaction_id is null then
      insert into public.transactions (
        type,
        category,
        amount,
        transaction_date,
        description
      ) values (
        'income',
        'registration',
        new.registration_fee,
        current_date,
        'Pendaftaran tim ' || new.name
      )
      returning id into new.registration_transaction_id;
    else
      update public.transactions
      set amount = new.registration_fee,
          description = 'Pendaftaran tim ' || new.name,
          updated_at = now()
      where id = new.registration_transaction_id;
    end if;
  else
    if new.registration_transaction_id is not null then
      delete from public.transactions
      where id = new.registration_transaction_id;
    end if;

    new.registration_transaction_id := null;
  end if;

  return new;
end;
$$;

create trigger on_team_registered
before insert or update of name, registration_fee, payment_status
on public.teams
for each row execute function public.sync_registration_income();

drop function if exists public.create_registration_income();
alter table public.teams drop column if exists registration_income_created;

-- Hasil pemeriksaan.
select
  team.name,
  team.registration_fee,
  team.payment_status,
  transaction_row.amount as pemasukan_tercatat
from public.teams team
left join public.transactions transaction_row
  on transaction_row.id = team.registration_transaction_id
order by team.created_at;

select
  coalesce(sum(amount) filter (where type = 'income'), 0) as total_uang_masuk,
  coalesce(sum(amount) filter (where type = 'expense'), 0) as total_pengeluaran
from public.transactions;
