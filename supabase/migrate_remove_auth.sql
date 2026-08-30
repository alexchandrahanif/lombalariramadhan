-- Migration: gunakan dashboard tanpa Supabase Authentication.
-- Jalankan satu kali melalui Supabase SQL Editor.

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
drop function if exists public.current_user_role() cascade;

drop policy if exists "authenticated users read own profile" on public.profiles;
drop policy if exists "admins update profiles" on public.profiles;

drop policy if exists "staff read teams" on public.teams;
drop policy if exists "registration staff insert teams" on public.teams;
drop policy if exists "registration staff update teams" on public.teams;
drop policy if exists "registration staff delete teams" on public.teams;

drop policy if exists "staff read sponsors" on public.sponsors;
drop policy if exists "authorized staff insert sponsors" on public.sponsors;
drop policy if exists "authorized staff update sponsors" on public.sponsors;
drop policy if exists "authorized staff delete sponsors" on public.sponsors;

drop policy if exists "staff read transactions" on public.transactions;
drop policy if exists "finance staff insert transactions" on public.transactions;
drop policy if exists "finance staff update transactions" on public.transactions;
drop policy if exists "finance staff delete transactions" on public.transactions;

alter table public.teams drop column if exists created_by;
alter table public.sponsors drop column if exists created_by;
alter table public.transactions drop column if exists created_by;
drop table if exists public.profiles;
drop type if exists public.app_role;

create policy "public manages teams" on public.teams
  for all to anon, authenticated using (true) with check (true);

create policy "public manages sponsors" on public.sponsors
  for all to anon, authenticated using (true) with check (true);

create policy "public manages transactions" on public.transactions
  for all to anon, authenticated using (true) with check (true);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.teams to anon, authenticated;
grant select, insert, update, delete on public.sponsors to anon, authenticated;
grant select, insert, update, delete on public.transactions to anon, authenticated;

drop policy if exists "public reads sponsor logos" on storage.objects;
drop policy if exists "authorized staff uploads sponsor logos" on storage.objects;
drop policy if exists "authorized staff updates sponsor logos" on storage.objects;
drop policy if exists "authorized staff deletes sponsor logos" on storage.objects;

create policy "public reads sponsor logos" on storage.objects
  for select to public using (bucket_id = 'sponsor-logos');

create policy "public uploads sponsor logos" on storage.objects
  for insert to anon, authenticated with check (bucket_id = 'sponsor-logos');

create policy "public updates sponsor logos" on storage.objects
  for update to anon, authenticated
  using (bucket_id = 'sponsor-logos')
  with check (bucket_id = 'sponsor-logos');

create policy "public deletes sponsor logos" on storage.objects
  for delete to anon, authenticated using (bucket_id = 'sponsor-logos');
