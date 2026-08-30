-- Tim dapat dibuat hanya dengan nama. Pemasukan dibuat satu kali saat tim lunas.
alter table public.teams
  alter column registration_fee set default 0,
  alter column payment_status set default 'unpaid';

alter table public.teams
  add column if not exists registration_income_created boolean not null default false;

update public.teams
set registration_income_created = true
where payment_status = 'paid'
  and registration_fee > 0
  and exists (
    select 1
    from public.transactions
    where type = 'income'
      and category = 'registration'
      and description = 'Pendaftaran tim ' || public.teams.name
  );

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
