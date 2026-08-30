-- Jalankan seluruh file ini lewat Supabase SQL Editor.
create extension if not exists pgcrypto;

create type public.payment_status as enum ('unpaid', 'partial', 'paid');
create type public.transaction_type as enum ('income', 'expense');
create type public.transaction_category as enum ('registration', 'contribution', 'sponsor', 'operations', 'prize', 'equipment', 'consumption', 'transportation', 'venue', 'documentation', 'other');
create type public.local_user_role as enum ('super_admin', 'admin');

create table public.app_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password text not null,
  role public.local_user_role not null default 'admin',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  manager_name text,
  phone text,
  registration_fee numeric(14,2) not null default 0 check (registration_fee >= 0),
  payment_status public.payment_status not null default 'unpaid',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  contact_name text,
  phone text,
  logo_url text,
  contribution_amount numeric(14,2) not null default 0 check (contribution_amount >= 0),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  type public.transaction_type not null,
  category public.transaction_category not null,
  amount numeric(14,2) not null check (amount > 0),
  transaction_date date not null default current_date,
  description text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.teams
  add column registration_transaction_id uuid
  references public.transactions(id) on delete set null;

create index transactions_type_date_idx on public.transactions(type, transaction_date desc);
insert into public.app_users (username, password, role, is_active)
values ('alexchandrahanif', 'Chandra@1998', 'super_admin', true);

create or replace function public.sync_registration_income()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.payment_status = 'paid' and new.registration_fee > 0 then
    if new.registration_transaction_id is null then
      insert into public.transactions (type, category, amount, transaction_date, description)
      values ('income', 'registration', new.registration_fee, current_date, 'Pendaftaran tim ' || new.name)
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
      delete from public.transactions where id = new.registration_transaction_id;
    end if;
    new.registration_transaction_id := null;
  end if;
  return new;
end;
$$;

create trigger on_team_registered
before insert or update of name, registration_fee, payment_status on public.teams
for each row execute function public.sync_registration_income();

create or replace function public.create_sponsor_income()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.contribution_amount > 0 then
    insert into public.transactions (type, category, amount, transaction_date, description)
    values ('income', 'sponsor', new.contribution_amount, current_date, 'Sponsor ' || new.name);
  end if;
  return new;
end;
$$;

create trigger on_sponsor_registered
after insert on public.sponsors
for each row execute function public.create_sponsor_income();

alter table public.app_users enable row level security;
alter table public.teams enable row level security;
alter table public.sponsors enable row level security;
alter table public.transactions enable row level security;

create policy "public manages app users" on public.app_users for all to anon, authenticated using (true) with check (true);
create policy "public manages teams" on public.teams for all to anon, authenticated using (true) with check (true);
create policy "public manages sponsors" on public.sponsors for all to anon, authenticated using (true) with check (true);
create policy "public manages transactions" on public.transactions for all to anon, authenticated using (true) with check (true);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.app_users to anon, authenticated;
grant select, insert, update, delete on public.teams to anon, authenticated;
grant select, insert, update, delete on public.sponsors to anon, authenticated;
grant select, insert, update, delete on public.transactions to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('sponsor-logos', 'sponsor-logos', true, 2097152, array['image/png', 'image/jpeg', 'image/webp'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy "public reads sponsor logos" on storage.objects for select using (bucket_id = 'sponsor-logos');
create policy "public uploads sponsor logos" on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'sponsor-logos');
create policy "public updates sponsor logos" on storage.objects for update to anon, authenticated
  using (bucket_id = 'sponsor-logos') with check (bucket_id = 'sponsor-logos');
create policy "public deletes sponsor logos" on storage.objects for delete to anon, authenticated
  using (bucket_id = 'sponsor-logos');
