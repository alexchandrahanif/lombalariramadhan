import { useEffect, useState } from 'react';
import {
	ArrowRight,
	BadgeCheck,
	ChevronDown,
	Clock3,
	Headphones,
	Menu,
	Router,
	ShieldCheck,
	Smartphone,
	Wifi,
	X,
	Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/fianet-logo-transparent.png';
import './WifiLandingPage.css';

const message = encodeURIComponent('Halo Admin FIA NET, saya tertarik untuk memasang WiFi FIA NET. Mohon info lebih lanjut.');
const contacts = [
	{ label: 'ADMIN 1', name: 'Ekha Buyong', display: '0853 7670 6580', url: `https://wa.me/6285376706580?text=${message}` },
	{ label: 'ADMIN 2', name: 'Iyan', display: '0895 3936 14160', url: `https://wa.me/62895393614160?text=${message}` },
	{ label: 'ADMIN 3', name: 'FIA NET', display: '0895 1935 4902', url: `https://wa.me/6289519354902?text=${message}` },
];
const packages = [
	{ name: 'Paket 1', price: '155.000', devices: 3, speed: 10 },
	{ name: 'Paket 2', price: '175.000', devices: 6, speed: 15, popular: true },
	{ name: 'Paket 3', price: '195.000', devices: 8, speed: 20 },
	{ name: 'Paket 4', price: '215.000', devices: 10, speed: 25 },
	{ name: 'Paket 5', price: '250.000', devices: 15, speed: 30 },
];

const benefits = [
	{ icon: Zap, title: 'Koneksi Cepat', text: 'Streaming, belajar, dan bekerja lebih lancar tanpa gangguan.' },
	{ icon: ShieldCheck, title: 'Jaringan Stabil', text: 'Koneksi andal untuk seluruh aktivitas digital keluarga.' },
	{ icon: Headphones, title: 'Bantuan Responsif', text: 'Ada kendala? Tim kami siap membantu dengan cepat.' },
	{ icon: Clock3, title: 'Aktif 24 Jam', text: 'Internet siap digunakan kapan pun Anda membutuhkannya.' },
];

const faqs = [
	{ question: 'Apakah ada biaya pemasangan?', answer: 'Khusus 50 pelanggan pertama, biaya pemasangan hanya Rp50.000 dan mendapatkan gratis layanan selama 1 bulan.' },
	{ question: 'Berapa lama proses pemasangan?', answer: 'Setelah lokasi dikonfirmasi masuk area jangkauan, tim akan mengatur jadwal pemasangan secepatnya.' },
	{ question: 'Bagaimana cara memilih paket?', answer: 'Pilih berdasarkan jumlah perangkat aktif. Tim FIA NET juga siap membantu merekomendasikan paket yang paling sesuai.' },
];

const reveal = {
	hidden: { opacity: 0, y: 28 },
	show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function WifiLandingPage() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeFaq, setActiveFaq] = useState(0);

	useEffect(() => {
		document.title = 'FIA NET | WiFi Cepat dan Stabil';
	}, []);

	return (
		<div className="wifi-page">
			<header className="wifi-header">
				<a className="brand" href="#beranda" aria-label="FIA NET beranda">
					<img src={logo} alt="FIA NET" />
				</a>
				<nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
					<a href="#beranda" onClick={() => setMenuOpen(false)}>Beranda</a>
					<a href="#keunggulan" onClick={() => setMenuOpen(false)}>Keunggulan</a>
					<a href="#paket" onClick={() => setMenuOpen(false)}>Paket Internet</a>
					<a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
					<a className="nav-cta" href="#kontak">Hubungi Kami</a>
				</nav>
				<button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
					{menuOpen ? <X /> : <Menu />}
				</button>
			</header>

			<main>
				<section className="hero" id="beranda">
					<div className="hero-glow hero-glow-one" />
					<div className="hero-glow hero-glow-two" />
					<motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
						<div className="eyebrow"><span /><Wifi size={16} /> #InternetnyaKeluarga</div>
						<h1>Koneksi cepat.<br /><em>Tanpa drama.</em></h1>
						<p>Nikmati internet cepat dan stabil untuk streaming, bekerja, belajar, dan semua aktivitas digital keluarga.</p>
						<div className="hero-actions">
							<a className="primary-button" href="#paket">Lihat Paket <ArrowRight size={18} /></a>
						</div>
						<div className="hero-trust">
							<span><BadgeCheck size={18} /> Harga transparan</span>
							<span><BadgeCheck size={18} /> Tanpa biaya tersembunyi</span>
						</div>
					</motion.div>

					<motion.div className="signal-visual" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
						<div className="signal-ring ring-1" />
						<div className="signal-ring ring-2" />
						<div className="signal-ring ring-3" />
						<div className="router-card">
							<div className="router-top"><span /><span /><span /></div>
							<Router size={76} strokeWidth={1.3} />
							<strong>FIA NET</strong>
							<small>Connected • Excellent</small>
						</div>
						<div className="floating-stat stat-speed"><Zap size={17} /><span><small>Kecepatan hingga</small><b>30 Mbps</b></span></div>
						<div className="floating-stat stat-device"><Smartphone size={17} /><span><small>Terhubung hingga</small><b>15 Perangkat</b></span></div>
					</motion.div>
				</section>

				<section className="benefit-section" id="keunggulan">
					<div className="section-heading">
						<span>MENGAPA FIA NET?</span>
						<h2>Internet yang bekerja<br />sekeras Anda.</h2>
					</div>
					<div className="benefit-grid">
						{benefits.map(({ icon: Icon, title, text }, index) => (
							<motion.article key={title} className="benefit-card" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ delay: index * 0.08 }}>
								<div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p>
							</motion.article>
						))}
					</div>
				</section>

				<section className="package-section" id="paket">
					<div className="section-heading centered">
						<span>PAKET INTERNET</span>
						<h2>Pilih kecepatanmu.</h2>
						<p>Harga bersahabat untuk kebutuhan internet setiap rumah.</p>
					</div>
					<div className="package-grid">
						{packages.map((item, index) => (
							<motion.article key={item.name} className={`package-card ${item.popular ? 'popular' : ''}`} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={reveal} transition={{ delay: index * 0.06 }}>
								{item.popular && <span className="popular-label">PILIHAN FAVORIT</span>}
								<div className="package-name">{item.name}</div>
								<div className="speed"><strong>{item.speed}</strong><span>Mbps</span></div>
								<p>Ideal hingga <b>{item.devices} perangkat</b></p>
								<div className="price"><sup>Rp</sup><strong>{item.price}</strong><span>/bulan</span></div>
								<ul><li><BadgeCheck /> Koneksi stabil</li><li><BadgeCheck /> Dukungan pelanggan</li><li><BadgeCheck /> Tanpa batas kuota</li></ul>
								<a href="#kontak">Pilih Paket <ArrowRight size={17} /></a>
							</motion.article>
						))}
					</div>
				</section>

				<section className="promo-section">
					<motion.div className="promo-card" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
						<div><span className="promo-kicker">KHUSUS 50 PELANGGAN PERTAMA</span><h2>Internet baru.<br /><em>Hemat lebih banyak.</em></h2><p>Mulai terhubung sekarang dengan penawaran pemasangan spesial FIA NET.</p></div>
						<div className="promo-price"><span>BIAYA PEMASANGAN</span><div><sup>Rp</sup><strong>50.000</strong></div><b>+ GRATIS 1 BULAN</b><a href="#kontak">Klaim Promo <ArrowRight size={18} /></a></div>
					</motion.div>
				</section>

				<section className="faq-section" id="faq">
					<div className="section-heading"><span>PERTANYAAN UMUM</span><h2>Yang perlu<br />Anda ketahui.</h2></div>
					<div className="faq-list">
						{faqs.map((faq, index) => <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={faq.question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{faq.question}</span><ChevronDown /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}
					</div>
				</section>

				<section className="final-cta" id="kontak">
					<div className="cta-orbit" /><Wifi size={34} /><h2>Siap terhubung lebih cepat?</h2><p>Pilih salah satu admin untuk cek jangkauan dan konsultasi paket terbaik untuk rumah Anda.</p>
					<div className="contact-options">
						{contacts.map((contact) => (
							<a className="contact-option" href={contact.url} target="_blank" rel="noreferrer" key={contact.display}>
								<span className="contact-wa">WA</span>
								<span><small>{contact.label} • {contact.name}</small><strong>{contact.display}</strong></span>
								<ArrowRight size={19} />
							</a>
						))}
					</div>
				</section>
			</main>

			<footer><a className="brand footer-brand" href="#beranda"><img src={logo} alt="FIA NET" /></a><p>Internet cepat dan stabil untuk semua.</p><div><a href="#paket">Paket</a><a href="#keunggulan">Keunggulan</a><a href="#faq">FAQ</a></div><small>© {new Date().getFullYear()} FIA NET. All rights reserved.</small></footer>

			<a className="floating-whatsapp" href="#kontak" aria-label="Pilih kontak admin"><span>WA</span><b>Hubungi Kami</b></a>
		</div>
	);
}

export default WifiLandingPage;
