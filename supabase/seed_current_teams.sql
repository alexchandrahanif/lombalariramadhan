-- Jalankan setelah migrate_team_draft_edit.sql.
insert into public.teams (name)
values
  ('Bascamp Pos x Ruwo A'),
  ('Bascamp Pos x Ruwo B'),
  ('Suang Sadu FC'),
  ('Al Qarny Games'),
  ('Perdana FC KM 10'),
  ('08Rokan Farm FC'),
  ('Elthar FC'),
  ('Kobatama Km7'),
  ('SMA N3 Tanah Putih'),
  ('Brimox Company')
on conflict (name) do nothing;
