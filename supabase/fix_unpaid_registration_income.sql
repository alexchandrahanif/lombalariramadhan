-- Perbaikan mandiri: siapkan kolom/trigger lalu hapus pemasukan tim belum lunas.

alter table public.teams
  alter column registration_fee set default 0,
  alter column payment_status set default 'unpaid';

alter table public.teams
  add column if not exists registration_income_created boolean not null default false;

drop trigger if exists on_team_registered on public.teams;

create or replace function public.create_registration_income()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.payment_status = 'paid'
     and new.registration_fee > 0
     and new.registration_income_created = false then
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
    );

    new.registration_income_created := true;
  end if;

  return new;
end;
$$;

create trigger on_team_registered
before insert or update of registration_fee, payment_status
on public.teams
for each row execute function public.create_registration_income();

delete from public.transactions transaction_row
using public.teams team
where transaction_row.type = 'income'
  and transaction_row.category = 'registration'
  and transaction_row.description = 'Pendaftaran tim ' || team.name
  and team.payment_status <> 'paid';

update public.teams
set registration_income_created = false
where payment_status <> 'paid';

update public.teams team
set registration_income_created = exists (
  select 1
  from public.transactions transaction_row
  where transaction_row.type = 'income'
    and transaction_row.category = 'registration'
    and transaction_row.description = 'Pendaftaran tim ' || team.name
)
where payment_status = 'paid';

-- Ringkasan hasil setelah koreksi.
select
  coalesce(sum(amount) filter (where type = 'income'), 0) as total_uang_masuk,
  coalesce(sum(amount) filter (where type = 'expense'), 0) as total_pengeluaran,
  coalesce(sum(amount) filter (where type = 'income'), 0)
    - coalesce(sum(amount) filter (where type = 'expense'), 0) as saldo
from public.transactions;
