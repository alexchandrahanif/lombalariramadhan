# Pemuda Cup III

Website publik dan dashboard panitia berbasis React, Vite, PostgreSQL, dan Supabase.

## Login dashboard

Dashboard tersedia di `/admin` dengan login lokal:

```text
Username: alexchandrahanif
Password: Chandra@1998
Role: super_admin
```

Login disimpan di browser melalui `localStorage`. Supabase Authentication tidak digunakan.

## Fitur

- Data tim peserta dan status pembayaran.
- Uang masuk dari pendaftaran, kontribusi, dan sponsor.
- Pengeluaran operasional, hadiah, perlengkapan, dan lainnya.
- Data sponsor dan upload logo ke Supabase Storage.
- Ringkasan saldo, pemasukan, pengeluaran, tim, dan sponsor.
- User lokal dengan role `super_admin` dan `admin`.
- Pemasukan pendaftaran otomatis saat tim ditambahkan.
- Pemasukan sponsor otomatis saat sponsor ditambahkan.

## Setup database baru

1. Buat project Supabase.
2. Buka **SQL Editor**.
3. Jalankan seluruh isi `supabase/schema.sql`.
4. Salin `.env.example` menjadi `.env`.
5. Isi Project URL dan publishable/anon key.

```env
VITE_SUPABASE_URL=https://PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## Migrasi database yang sudah dibuat

Database lama yang masih memakai `profiles` dan Supabase Auth harus menjalankan:

```text
supabase/migrate_remove_auth.sql
```

Setelah itu jalankan migration fitur user dan pemasukan otomatis:

```text
supabase/migrate_users_and_auto_income.sql
```

Terakhir, aktifkan mode draft dan edit tim:

```text
supabase/migrate_team_draft_edit.sql
```

Data tim lama dari website dapat dimasukkan dengan:

```text
supabase/seed_current_teams.sql
```

Jika pemasukan pendaftaran sempat tercatat untuk tim yang belum lunas, jalankan:

```text
supabase/fix_unpaid_registration_income.sql
```

Untuk alur pembayaran tim final, jalankan:

```text
supabase/fix_registration_payment_flow.sql
```

Migration tersebut:

- Menghapus trigger dan fungsi Auth.
- Menghapus kolom `created_by`.
- Menghapus tabel `profiles`.
- Menghapus enum role database.
- Membuka CRUD tabel untuk anon key.
- Membuka upload logo sponsor untuk anon key.

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Website publik tersedia di `/`. Dashboard tersedia di `/admin`.

## Catatan keamanan

Login lokal hanya membatasi tampilan dashboard. Kredensial dan anon key tetap dapat dibaca dari browser. Gunakan hanya jika risiko akses publik sudah diterima.
