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
	HandCoins,
	Landmark,
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
import { supabase } from '../lib/supabase';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const navItems = [
	{ label: 'Tentang', href: '#tentang' },
	{ label: 'Detail', href: '#detail' },
	{ label: 'Tim', href: '#tim' },
	{ label: 'Penghargaan', href: '#penghargaan' },
	{ label: 'Sponsor', href: '#sponsor' },
	{ label: 'Kas', href: '#transparansi' },
	{ label: 'Kontak', href: '#kontak' },
];

const formatCurrency = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'IDR',
	maximumFractionDigits: 0,
});

const formatPublicDate = (value) =>
	new Intl.DateTimeFormat('id-ID', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(new Date(value));

const timeline = [
	{
		date: '12–29',
		month: 'Agustus 2026',
		title: 'Pendaftaran Tim',
		description: 'Periode resmi pendaftaran peserta Pemuda Cup III.',
		icon: CalendarDays,
	},
	{
		date: '29',
		month: 'Agustus 2026',
		title: 'Technical Meeting',
		description: 'Pemaparan regulasi, pengundian, dan ketentuan teknis turnamen.',
		icon: Users,
	},
	{
		date: '02',
		month: 'September 2026',
		title: 'Kick-off Turnamen',
		description: 'Rangkaian pertandingan resmi Pemuda Cup III dimulai.',
		icon: Trophy,
	},
];

const awards = [
	{ title: 'Juara 1', subtitle: 'Uang pembinaan + trofi', icon: Trophy },
	{ title: 'Juara 2', subtitle: 'Uang pembinaan + trofi', icon: Trophy },
	{ title: 'Juara 3', subtitle: 'Uang pembinaan + trofi', icon: Award },
	{
		title: 'Pencetak Gol Terbanyak',
		subtitle: 'Uang pembinaan + trofi',
		icon: Target,
	},
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
	'Mendorong generasi berprestasi',
	'Bertanding jujur dan saling menghormati',
];

const EventPage = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [numberCopied, setNumberCopied] = useState(false);
	const [publicSponsors, setPublicSponsors] = useState([]);
	const [publicTeams, setPublicTeams] = useState([]);
	const [publicTransactions, setPublicTransactions] = useState([]);
	const [financeLoading, setFinanceLoading] = useState(true);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const loadPublicData = async () => {
			const [sponsorResult, transactionResult, teamResult] = await Promise.all([
				supabase.from('sponsors').select('id, name, logo_url, contribution_amount').order('contribution_amount', { ascending: false }),
				supabase.from('transactions').select('id, type, category, amount, transaction_date, description').order('transaction_date', { ascending: false }),
				supabase.from('teams').select('*').order('name', { ascending: true }),
			]);
			const loadedTeams = [...(teamResult.data ?? [])].sort((first, second) =>
				first.name.localeCompare(second.name, 'id', { sensitivity: 'base' }),
			);
			setPublicSponsors(sponsorResult.data ?? []);
			setPublicTransactions(transactionResult.data ?? []);
			setPublicTeams(loadedTeams);
			setFinanceLoading(false);
		};

		loadPublicData();
	}, []);

	const teamSlots = Array.from({ length: 16 }, (_, index) => ({
		number: index + 1,
		name: publicTeams[index]?.name ?? null,
	}));
	const registeredTeamCount = publicTeams.length;
	const registrationProgress = `${Math.min((registeredTeamCount / teamSlots.length) * 100, 100)}%`;

	const contributionIncome = publicTransactions
		.filter((item) => item.type === 'income' && item.category === 'contribution')
		.sort((first, second) => Number(second.amount) - Number(first.amount));

	const sponsorIncome = publicTransactions
		.filter((item) => item.type === 'income' && item.category === 'sponsor')
		.sort((first, second) => Number(second.amount) - Number(first.amount));

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
					Lihat Peserta <ArrowRight size={17} />
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
								Hubungi Panitia
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
							<p className="hero__kicker">Kompetisi Mini Soccer Pemuda Sintong</p>
							<h1>
								Pemuda{' '}
								<span>
									Cup <em>III</em>
								</span>
							</h1>
							<p className="hero__lead">
								Pemuda Cup III mempertemukan tim-tim terbaik dalam kompetisi
								yang menjunjung sportivitas, kebersamaan, dan prestasi.
							</p>
							<div className="hero__actions">
								<a
									className="button button--primary"
									href={whatsappLink}
									target="_blank"
									rel="noreferrer">
									Lihat Daftar Tim <ArrowRight />
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
						<span>Pemain Inti + Cadangan</span>
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
							<span className="eyebrow">Kompetisi dan kebersamaan</span>
							<h2>
								Kompetitif di lapangan.
								<br />
								<span>Solid dalam kebersamaan.</span>
							</h2>
						</div>
						<p>
							Pemuda Cup III menjadi wadah bagi generasi muda Sintong untuk
							mengembangkan kemampuan, memperkuat solidaritas, dan menjunjung
							tinggi sportivitas.
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
								Tim peserta
								<br />
								<span>Pemuda Cup III.</span>
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
							{registeredTeamCount} tim telah terdaftar dari total kuota 16
							tim peserta.
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
									{team.name ? 'Terdaftar' : 'Tersedia'}
								</span>
							</article>
						))}
					</div>
					<div className="teams__cta">
						<p>
							Pendaftaran resmi telah ditutup pada 29 Agustus 2026.
						</p>
						<a
							className="button button--primary"
							href={whatsappLink}
							target="_blank"
							rel="noreferrer">
							Hubungi Panitia <ArrowRight />
						</a>
					</div>
				</section>

				<section
					className="section detail"
					id="detail">
					<div className="detail__intro">
						<span className="eyebrow">Informasi Turnamen</span>
						<h2>
							Rangkaian terjadwal.
							<br />
							<span>Persiapan lebih terarah.</span>
						</h2>
						<p>
							Seluruh tahapan turnamen disusun secara terstruktur agar setiap tim
							dapat mengikuti agenda dan ketentuan dengan baik.
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
								Apresiasi terbaik.
								<br />
								<span>Untuk para juara.</span>
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
					className="section public-sponsors"
					id="sponsor">
					<div className="section-heading">
						<div>
							<span className="eyebrow">Mitra Pemuda Cup III</span>
							<h2>
								Dukungan nyata.
								<br />
								<span>Untuk pemuda Sintong.</span>
							</h2>
						</div>
					</div>
					<div className="sponsor-marquee">
						<div className="sponsor-marquee__track">
							{[...publicSponsors, ...publicSponsors].map((sponsor, index) => (
								<article
									key={`${sponsor.id}-${index}`}
									aria-hidden={index >= publicSponsors.length}>
									<div className="public-sponsor-logo">
									{sponsor.logo_url ? (
											<img src={sponsor.logo_url} alt={index < publicSponsors.length ? `Logo ${sponsor.name}` : ''} />
										) : (
											<Landmark />
										)}
									</div>
									<small>Sponsor Pemuda Cup III</small>
									<h3>{sponsor.name}</h3>
									<a href="/sponsor" tabIndex={index < publicSponsors.length ? 0 : -1}>Lihat Detail <ArrowRight /></a>
								</article>
							))}
						</div>
					</div>
					<div className="public-sponsors__action">
						<a className="button button--ghost" href="/sponsor">
							Lihat Semua Sponsor <ArrowRight />
						</a>
					</div>
						{!financeLoading && !publicSponsors.length && (
							<div className="public-empty">Sponsor akan segera ditampilkan.</div>
						)}
				</section>

				<section
					className="public-finance"
					id="transparansi">
					<div className="section public-finance__inner">
						<div className="section-heading">
							<div>
								<span className="eyebrow">Transparansi Kegiatan</span>
								<h2>
									Informasi terbuka.
									<br />
									<span>Akuntabilitas terjaga.</span>
								</h2>
							</div>
						</div>

						<div className="public-finance-grid">
							<div className="public-ledger public-ledger--income">
								<div className="public-ledger__head">
									<div><HandCoins /><span><small>Uang Masuk</small><strong>Kontribusi</strong></span></div>
								</div>
								<div className="public-ledger__summary"><span>Total Kontribusi</span><strong>{formatCurrency.format(contributionIncome.reduce((sum, item) => sum + Number(item.amount), 0))}</strong></div>
								<div className={`public-ledger__list ${contributionIncome.length > 10 ? 'public-ledger__list--scroll' : ''}`}>
									{contributionIncome.map((item, index) => <article key={item.id}><span className="public-ledger__rank">{String(index + 1).padStart(2, '0')}</span><div><strong>{item.description}</strong><small><span>Tanggal: {formatPublicDate(item.transaction_date)}</span><span>Jenis: Kontribusi</span></small></div><b>+{formatCurrency.format(item.amount)}</b></article>)}
									{!financeLoading && !contributionIncome.length && <div className="public-empty">Belum ada data kontribusi.</div>}
								</div>
							</div>

							<div className="public-ledger public-ledger--sponsor">
								<div className="public-ledger__head">
									<div><Landmark /><span><small>Uang Masuk</small><strong>Sponsor</strong></span></div>
								</div>
								<div className="public-ledger__summary"><span>Total Sponsor</span><strong>{formatCurrency.format(sponsorIncome.reduce((sum, item) => sum + Number(item.amount), 0))}</strong></div>
								<div className={`public-ledger__list ${sponsorIncome.length > 10 ? 'public-ledger__list--scroll' : ''}`}>
									{sponsorIncome.map((item, index) => <article key={item.id}><span className="public-ledger__rank">{String(index + 1).padStart(2, '0')}</span><div><strong>{item.description}</strong><small><span>Tanggal: {formatPublicDate(item.transaction_date)}</span><span>Jenis: Sponsor</span></small></div><b>+{formatCurrency.format(item.amount)}</b></article>)}
									{!financeLoading && !sponsorIncome.length && <div className="public-empty">Belum ada data sponsor.</div>}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="section contact"
					id="kontak">
					<div className="contact__card">
						<div className="contact__copy">
							<span className="eyebrow">Informasi Resmi Turnamen</span>
							<h2>
								Informasi terpusat.
								<br />
								<span>Koordinasi lebih mudah.</span>
							</h2>
							<p>
								Hubungi panitia untuk informasi teknis, regulasi, dan koordinasi
								pelaksanaan Pemuda Cup III.
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
