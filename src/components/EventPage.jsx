/** @format */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowRight,
	Award,
	CalendarDays,
	Check,
	ChevronRight,
	Clock3,
	Copy,
	Instagram,
	MapPin,
	Menu,
	MessageCircle,
	Phone,
	ShieldCheck,
	Sparkles,
	Star,
	Target,
	Trophy,
	UserPlus,
	Users,
	WalletCards,
	X,
} from 'lucide-react';
import './EventPage.css';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const navItems = [
	{ label: 'Tentang', href: '#tentang' },
	{ label: 'Detail', href: '#detail' },
	{ label: 'Tim', href: '#tim' },
	{ label: 'Penghargaan', href: '#penghargaan' },
	{ label: 'Kontak', href: '#kontak' },
];

const timeline = [
	{
		date: '12–29',
		month: 'Agustus 2026',
		title: 'Pendaftaran Tim',
		description: 'Amankan slot tim sebelum kuota terpenuhi.',
		icon: CalendarDays,
	},
	{
		date: '30',
		month: 'Agustus 2026',
		title: 'Technical Meeting',
		description: 'Pembahasan regulasi, drawing, dan teknis turnamen.',
		icon: Users,
	},
	{
		date: '02',
		month: 'September 2026',
		title: 'Kick-off Turnamen',
		description: 'Pertandingan resmi Pemuda Cup III dimulai.',
		icon: Trophy,
	},
];

const awards = [
	{ title: 'Juara 1', subtitle: 'Uang pembinaan + trofi', icon: Trophy },
	{ title: 'Juara 2', subtitle: 'Uang pembinaan + trofi', icon: Trophy },
	{ title: 'Juara 3', subtitle: 'Uang pembinaan + trofi', icon: Award },
	{ title: 'Top Score', subtitle: 'Uang pembinaan + trofi', icon: Target },
	{ title: 'Pemain Terbaik', subtitle: 'Uang pembinaan + trofi', icon: Star },
	{
		title: 'Kiper Terbaik',
		subtitle: 'Uang pembinaan + trofi',
		icon: ShieldCheck,
	},
];

const values = [
	'Junjung tinggi sportivitas',
	'Mempererat persaudaraan',
	'Ciptakan generasi berprestasi',
	'Fair play, no cheating, respect',
];

const registeredTeams = [
	'Bascamp Pos x Ruwo A',
	'Bascamp Pos x Ruwo B',
	'Suang Sadu FC',
	'Al Qarny Games',
	'Perdana FC KM 10',
	'08Rokan Farm FC',
	'Elthar FC',
];

const teamSlots = Array.from({ length: 16 }, (_, index) => ({
	number: index + 1,
	name: registeredTeams[index] ?? null,
}));

const registeredTeamCount = registeredTeams.length;
const registrationProgress = `${(registeredTeamCount / teamSlots.length) * 100}%`;

const EventPage = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [numberCopied, setNumberCopied] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const whatsappLink =
		'https://wa.me/6289648436688?text=Halo%20Kak%20Farel%2C%20saya%20ingin%20mendaftar%20Pemuda%20Cup%20III.';
	const firmansyahLink =
		'https://wa.me/6282383679077?text=Halo%20Kak%20Firmansyah%2C%20saya%20ingin%20konfirmasi%20pembayaran%20DANA%20untuk%20Pemuda%20Cup%20III.';
	const danaNumber = '082383679077';

	const copyDanaNumber = async () => {
		await navigator.clipboard.writeText(danaNumber);
		setNumberCopied(true);
		window.setTimeout(() => setNumberCopied(false), 2200);
	};

	return (
		<div className="event-page">
			<div
				className="ambient-noise"
				aria-hidden="true"
			/>
			<header className={`event-nav ${scrolled ? 'event-nav--scrolled' : ''}`}>
				<a
					className="brand"
					href="#beranda"
					aria-label="Pemuda Cup III">
					<span className="brand__mark brand__mark--image">
						<img
							src={eventLogo}
							alt=""
						/>
					</span>
					<span className="brand__copy">
						<strong>
							Pemuda Cup <em>III</em>
						</strong>
						<small>Sintong · 2026</small>
					</span>
				</a>

				<nav
					className="desktop-nav"
					aria-label="Navigasi utama">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}>
							{item.label}
						</a>
					))}
				</nav>

				<a
					className="nav-cta"
					href={whatsappLink}
					target="_blank"
					rel="noreferrer">
					Daftar Tim <ArrowRight size={17} />
				</a>

				<button
					className="menu-button"
					onClick={() => setMenuOpen(true)}
					aria-label="Buka menu">
					<Menu />
				</button>
			</header>

			<AnimatePresence>
				{menuOpen && (
					<MotionDiv
						className="mobile-menu"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<MotionDiv
							className="mobile-menu__panel"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}>
							<button
								onClick={() => setMenuOpen(false)}
								aria-label="Tutup menu">
								<X />
							</button>
							<span className="eyebrow">Menu Utama</span>
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setMenuOpen(false)}>
									{item.label}
									<ChevronRight />
								</a>
							))}
							<a
								className="mobile-menu__cta"
								href={whatsappLink}
								target="_blank"
								rel="noreferrer">
								Daftar via WhatsApp
							</a>
						</MotionDiv>
					</MotionDiv>
				)}
			</AnimatePresence>

			<main>
				<section
					className="hero"
					id="beranda">
					<div className="hero__beam hero__beam--one" />
					<div className="hero__beam hero__beam--two" />
					<div className="hero__glow hero__glow--blue" />
					<div className="hero__glow hero__glow--orange" />
					<div className="hero__grid" />
					<div className="hero__content">
						<MotionDiv
							className="hero__copy"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}>
							<div className="hero__badge">
								<Sparkles size={14} /> Turnamen Mini Soccer Sintong
							</div>
							<p className="hero__kicker">Saatnya buktikan timmu</p>
							<h1>
								Pemuda{' '}
								<span>
									Cup <em>III</em>
								</span>
							</h1>
							<p className="hero__lead">
								Kompetisi, sportivitas, dan kebanggaan bertemu di satu lapangan.
								Rebut gelar juara Pemuda Cup III dan jadilah bagian dari sejarah
								Sintong.
							</p>
							<div className="hero__actions">
								<a
									className="button button--primary"
									href={whatsappLink}
									target="_blank"
									rel="noreferrer">
									Daftarkan Tim <ArrowRight />
								</a>
								<a
									className="button button--ghost"
									href="#detail">
									Lihat Detail
								</a>
							</div>
							<div className="hero__meta">
								<span>
									<CalendarDays /> 02 September 2026
								</span>
								<span>
									<MapPin /> Lapangan Putri Hijau
								</span>
							</div>
						</MotionDiv>

						<MotionDiv
							className="hero__visual"
							initial={{ opacity: 0, scale: 0.94 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.15 }}>
							<div
								className="arena-visual"
								aria-hidden="true">
								<div className="arena-visual__halo" />
								<div className="arena-visual__spotlight arena-visual__spotlight--left" />
								<div className="arena-visual__spotlight arena-visual__spotlight--right" />
								<div className="arena-visual__logo">
									<img
										src={eventLogo}
										alt="Logo Pemuda Cup Sintong"
									/>
								</div>
								<div className="arena-visual__pitch">
									<div />
									<span />
								</div>
							</div>
							<div className="prize-float">
								<small>Total Hadiah</small>
								<strong>Rp5 Juta</strong>
							</div>
							<div className="slots-float">
								<Users />
								<span>
									<strong>16 Tim</strong>
									<small>Kuota terbatas</small>
								</span>
							</div>
						</MotionDiv>
					</div>
				</section>

				<section
					className="stats"
					aria-label="Ringkasan turnamen">
					<div>
						<strong>16</strong>
						<span>Kuota Tim</span>
					</div>
					<div>
						<strong>12</strong>
						<span>Pemain / Tim</span>
					</div>
					<div>
						<strong>8+4</strong>
						<span>Starting + Cadangan</span>
					</div>
					<div>
						<strong>2</strong>
						<span>Pemain Luar Sintong</span>
					</div>
				</section>

				<section
					className="section about"
					id="tentang">
					<div className="section-heading">
						<div>
							<span className="eyebrow">Lebih dari pertandingan</span>
							<h2>
								Bermain keras.
								<br />
								<span>Tetap bersaudara.</span>
							</h2>
						</div>
						<p>
							Pemuda Cup III hadir sebagai ruang kompetisi bagi generasi muda
							Sintong untuk menunjukkan kemampuan, membangun solidaritas, dan
							menjunjung nilai fair play.
						</p>
					</div>
					<div className="values-grid">
						{values.map((value, index) => (
							<MotionArticle
								key={value}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.08 }}>
								<span>0{index + 1}</span>
								<Check />
								<h3>{value}</h3>
							</MotionArticle>
						))}
					</div>
				</section>

				<section
					className="section teams"
					id="tim">
					<div className="teams__header">
						<div>
							<span className="eyebrow">Daftar Peserta</span>
							<h2>
								Tim yang sudah
								<br />
								<span>mengamankan slot.</span>
							</h2>
						</div>
						<div className="teams__status">
							<div className="teams__counter">
								<strong>{registeredTeamCount}</strong>
								<span>/ 16 tim</span>
							</div>
							<div className="teams__progress">
								<span style={{ width: registrationProgress }} />
							</div>
							<p>
								{registeredTeamCount} tim telah terdaftar. Masih tersedia{' '}
								{teamSlots.length - registeredTeamCount} slot untuk tim
								berikutnya.
							</p>
						</div>
					</div>
					<div className="teams-grid">
						{teamSlots.map((team) => (
							<article
								key={team.number}
								className={`team-slot ${team.name ? 'team-slot--registered' : ''}`}>
								<span className="team-slot__number">
									{String(team.number).padStart(2, '0')}
								</span>
								<div className="team-slot__icon">
									<UserPlus />
								</div>
								<div className="team-slot__copy">
									<small>Slot Tim {team.number}</small>
									<strong>{team.name ?? 'Tersedia'}</strong>
								</div>
								<span className="team-slot__status">
									{team.name ? 'Terdaftar' : 'Open'}
								</span>
							</article>
						))}
					</div>
					<div className="teams__cta">
						<p>
							Pendaftaran berlangsung sampai 29 Agustus 2026 atau hingga seluruh
							slot terpenuhi.
						</p>
						<a
							className="button button--primary"
							href={whatsappLink}
							target="_blank"
							rel="noreferrer">
							Ambil Slot Tim <ArrowRight />
						</a>
					</div>
				</section>

				<section
					className="section detail"
					id="detail">
					<div className="detail__intro">
						<span className="eyebrow">Informasi Turnamen</span>
						<h2>
							Catat tanggalnya.
							<br />
							<span>Siapkan tim terbaik.</span>
						</h2>
						<p>
							Proses pendaftaran hingga kick-off disusun jelas agar setiap tim
							dapat mempersiapkan diri secara maksimal.
						</p>
						<div className="fees">
							<div>
								<WalletCards />
								<span>
									<small>Biaya Pendaftaran</small>
									<strong>Rp300.000</strong>
								</span>
							</div>
							<div>
								<ShieldCheck />
								<span>
									<small>Uang Jaminan</small>
									<strong>Rp100.000</strong>
								</span>
							</div>
						</div>
					</div>
					<div className="timeline">
						{timeline.map((item, index) => {
							const Icon = item.icon;
							return (
								<article key={item.title}>
									<div className="timeline__number">0{index + 1}</div>
									<div className="timeline__icon">
										<Icon />
									</div>
									<div className="timeline__date">
										<strong>{item.date}</strong>
										<span>{item.month}</span>
									</div>
									<div>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</article>
							);
						})}
					</div>
				</section>

				<section
					className="section awards"
					id="penghargaan">
					<div className="awards__header">
						<div>
							<span className="eyebrow">Hadiah & Penghargaan</span>
							<h2>
								Enam gelar.
								<br />
								<span>Satu panggung juara.</span>
							</h2>
						</div>
						<div className="total-prize">
							<small>Total Hadiah</small>
							<strong>Rp5.000.000</strong>
						</div>
					</div>
					<div className="awards-grid">
						{awards.map((award, index) => {
							const Icon = award.icon;
							return (
								<article
									key={award.title}
									className={index === 0 ? 'award-card--featured' : ''}>
									<span className="award-card__index">0{index + 1}</span>
									<Icon />
									<h3>{award.title}</h3>
									<p>{award.subtitle}</p>
								</article>
							);
						})}
					</div>
				</section>

				<section
					className="section contact"
					id="kontak">
					<div className="contact__card">
						<div className="contact__copy">
							<span className="eyebrow">Kuota hanya 16 tim</span>
							<h2>
								Lapangan menunggu.
								<br />
								<span>Tim kamu siap?</span>
							</h2>
							<p>
								Hubungi panitia untuk konfirmasi slot, regulasi lengkap, dan
								proses pendaftaran Pemuda Cup III.
							</p>
							<div className="contact__actions">
								<a
									className="button button--primary"
									href={whatsappLink}
									target="_blank"
									rel="noreferrer">
									Hubungi Farel <ArrowRight />
								</a>
								<a
									className="button button--ghost"
									href={firmansyahLink}
									target="_blank"
									rel="noreferrer">
									Hubungi Firmansyah <MessageCircle />
								</a>
							</div>
						</div>
						<div className="contact__details">
							<div>
								<Phone />
								<span>
									<small>Kontak Person</small>
									<strong>Farel · 0896 4843 6688</strong>
								</span>
							</div>
							<div className="payment-detail">
								<WalletCards />
								<div className="payment-detail__copy">
									<span>
										<small>Pembayaran via DANA · Firmansyah</small>
										<strong>0823 8367 9077</strong>
									</span>
									<div className="payment-detail__actions">
										<button
											type="button"
											onClick={copyDanaNumber}
											aria-label="Salin nomor DANA Firmansyah">
											{numberCopied ? <Check size={15} /> : <Copy size={15} />}
											{numberCopied ? 'Tersalin' : 'Salin nomor'}
										</button>
										<a
											href={firmansyahLink}
											target="_blank"
											rel="noreferrer">
											WhatsApp
										</a>
									</div>
								</div>
							</div>
							<div>
								<MapPin />
								<span>
									<small>Lokasi Turnamen</small>
									<strong>Lapangan Putri Hijau, Sintong Bakti</strong>
								</span>
							</div>
							<div>
								<Clock3 />
								<span>
									<small>Pendaftaran</small>
									<strong>12–29 Agustus 2026</strong>
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="event-footer">
				<div className="brand">
					<span className="brand__mark brand__mark--image">
						<img
							src={eventLogo}
							alt=""
						/>
					</span>
					<span className="brand__copy">
						<strong>
							Pemuda Cup <em>III</em>
						</strong>
						<small>Sintong · 2026</small>
					</span>
				</div>
				<div className="event-footer__center">
					<p>Turnamen Mini Soccer · Pemuda Sintong</p>
					<a
						className="creator-mark"
						href="https://alexchandrahanif.vercel.app/"
						target="_blank"
						rel="noreferrer">
						Website by <span>Alex Chandra Hanif</span>
					</a>
				</div>
				{/* <a
					href="https://instagram.com"
					target="_blank"
					rel="noreferrer"
					aria-label="Instagram">
					<Instagram />
				</a> */}
			</footer>
		</div>
	);
};

export default EventPage;
