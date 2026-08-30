import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import eventLogo from '../../assets/pemuda-cup-logo-transparent.png';
import './admin.css';

const LoginPage = () => {
	const { configured, signIn } = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError('');
		if (!configured) {
			setError('Supabase belum terhubung. Isi file .env terlebih dahulu.');
			return;
		}

		setSubmitting(true);
		const { error: signInError } = await signIn(username, password);
		setSubmitting(false);
		if (signInError) setError('Username atau kata sandi tidak valid.');
	};

	return (
		<main className="admin-login">
			<section className="admin-login__visual">
				<a href="/" className="admin-login__back"><ArrowLeft size={18} /> Kembali ke website</a>
				<div className="admin-login__brand">
					<img src={eventLogo} alt="Pemuda Cup III" />
					<span>Panel Panitia · 2026</span>
				</div>
				<div className="admin-login__message">
					<span className="admin-kicker">Satu pusat kendali</span>
					<h1>Data rapi.<br /><em>Acara terkendali.</em></h1>
					<p>Kelola peserta, arus kas, sponsor, dan akses panitia dalam satu dashboard.</p>
				</div>
			</section>

			<section className="admin-login__form-wrap">
				<form className="admin-login__form" onSubmit={handleSubmit}>
					<div className="admin-login__icon"><ShieldCheck /></div>
					<span className="admin-kicker">Akses internal</span>
					<h2>Masuk ke dashboard</h2>
					<p>Gunakan akun panitia yang terdaftar.</p>

					{!configured && <div className="admin-alert">Konfigurasi Supabase belum tersedia.</div>}
					{error && <div className="admin-alert admin-alert--error">{error}</div>}

					<label>
						Username
						<span className="admin-input"><Mail size={18} /><input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="alexchandrahanif" autoComplete="username" required /></span>
					</label>
					<label>
						Kata sandi
						<span className="admin-input"><LockKeyhole size={18} /><input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Kata sandi" autoComplete="current-password" required /><button type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span>
					</label>
					<button className="admin-primary-button" disabled={submitting}>{submitting ? 'Memeriksa akun...' : 'Masuk Dashboard'}</button>
					<small>Login lokal khusus pengelola Pemuda Cup III.</small>
				</form>
			</section>
		</main>
	);
};

export default LoginPage;
