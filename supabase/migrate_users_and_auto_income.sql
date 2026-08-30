-- User lokal, role aplikasi, dan pemasukan otomatis dari pendaftaran tim.
-- Jalankan satu kali melalui Supabase SQL Editor.

do $$ begin
  create type public.local_user_role as enum ('super_admin', 'admin');
exception
  when duplicate_object then null;
end $$;

alter type public.transaction_category add value if not exists 'consumption';
alter type public.transaction_category add value if not exists 'transportation';
alter type public.transaction_category add value if not exists 'venue';
alter type public.transaction_category add value if not exists 'documentation';

create table if not exists public.app_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password text not null,
  role public.local_user_role not null default 'admin',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.app_users enable row level security;

drop policy if exists "public manages app users" on public.app_users;
create policy "public manages app users"
on public.app_users
for all
to anon, authenticated
using (true)
with check (true);

grant select, insert, update, delete on public.app_users to anon, authenticated;

insert into public.app_users (username, password, role, is_active)
values ('alexchandrahanif', 'Chandra@1998', 'super_admin', true)
on conflict (username) do update
set password = excluded.password,
    role = excluded.role,
    is_active = excluded.is_active,
    updated_at = now();

alter table public.transactions drop column if exists team_id;
alter table public.transactions drop column if exists sponsor_id;

create or replace function public.create_registration_income()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.registration_fee > 0 then
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
  end if;

  return new;
end;
$$;

drop trigger if exists on_team_registered on public.teams;
create trigger on_team_registered
after insert on public.teams
for each row execute function public.create_registration_income();

create or replace function public.create_sponsor_income()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.contribution_amount > 0 then
    insert into public.transactions (
      type,
      category,
      amount,
      transaction_date,
      description
    ) values (
      'income',
      'sponsor',
      new.contribution_amount,
      current_date,
      'Sponsor ' || new.name
    );
  end if;

  return new;
end;
$$;

drop trigger if exists on_sponsor_registered on public.sponsors;
create trigger on_sponsor_registered
after insert on public.sponsors
for each row execute function public.create_sponsor_income();
