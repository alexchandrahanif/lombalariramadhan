/** @format */

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin, Newspaper, Trophy } from 'lucide-react';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';
import { matches, news, statistics } from '../data/matchData';
import './MatchCenterPage.css';

const dateLabel = (date) => new Intl.DateTimeFormat('id-ID', { day:'numeric', month:'long', year:'numeric' }).format(new Date(`${date}T12:00:00`));
const localDate = () => {
	const today = new Date();
	const offset = today.getTimezoneOffset() * 60000;
	return new Date(today.getTime() - offset).toISOString().slice(0, 10);
};

const MatchCard = ({ match }) => (
	<article className={`match-card ${match.score ? 'match-card--finished' : ''}`}>
		<div className="match-card__top"><span>{match.group}</span><b>{match.status}</b></div>
		<div className="match-card__date"><CalendarDays /> {match.day}, {dateLabel(match.date)} <i>·</i> <Clock3 /> {match.time} WIB</div>
		<div className="match-card__versus">
			<div className="match-side"><img src={match.home.logo} alt="" loading="lazy" decoding="async" /><strong>{match.home.name}</strong></div>
			<div className="match-score">{match.score ? <><b>{match.score[0]}</b><span>FT</span><b>{match.score[1]}</b></> : <span>VS</span>}</div>
			<div className="match-side match-side--away"><img src={match.away.logo} alt="" loading="lazy" decoding="async" /><strong>{match.away.name}</strong></div>
		</div>
		{match.events.length > 0 && <div className="match-card__events">{match.events.map((event) => <span key={event}>{event}</span>)}</div>}
	</article>
);

const Ranking = ({ title, label, entries, emptyText }) => (
	<article className="ranking-card">
		<div className="ranking-card__head"><span>{label}</span><h3>{title}</h3></div>
		{entries.length ? <ol>{entries.map((entry, index) => <li key={`${entry.name}-${entry.team}`}><b>{index + 1}</b><img src={entry.logo} alt="" loading="lazy" decoding="async" /><span><strong>{entry.name}</strong><small>{entry.team}</small></span><em>{entry.total}</em></li>)}</ol> : <div className="ranking-empty">{emptyText}</div>}
	</article>
);

const MatchCenterPage = () => {
	const [selectedDate, setSelectedDate] = useState(localDate);
	const filteredMatches = matches.filter((match) => match.date === selectedDate);
	const upcomingMatches = matches.filter((match) => !match.score);
	return <div className="match-page">
		<header className="match-nav"><a href="/" className="match-brand"><img src={eventLogo} alt="" /><span><strong>Pemuda Cup III</strong><small>Match Center</small></span></a><nav><a href="#pertandingan">Pertandingan</a><a href="#statistik">Statistik</a><a href="/berita">Berita</a></nav><a href="/group" className="match-nav__back"><ArrowLeft /> Group</a></header>
		<main>
			<section className="match-hero"><div><span className="match-eyebrow"><Trophy /> Pusat Pertandingan</span><h1>Match<br/><em>Center.</em></h1><p>Jadwal, hasil pertandingan, statistik pemain, dan kabar terbaru Pemuda Cup III dalam satu tempat.</p><div className="match-hero__meta"><span><MapPin /> Lapangan Putri Hijau</span><span><CalendarDays /> 2–6 September 2026</span></div></div><div className="match-hero__logo" aria-label="Pemuda Cup III Sintong 2026"><span>Turnamen Mini Soccer</span><img src={eventLogo} alt="Logo Pemuda Cup III Sintong" /><strong>Pemuda Cup III</strong><small>Sintong · 2026</small></div></section>
			<section className="match-section" id="pertandingan">
				<div className="match-heading"><div><span>Hasil per Tanggal</span><h2>Skor Pertandingan</h2></div><p>Skor diperbarui manual setiap malam setelah pertandingan selesai.</p></div>
				<div className="match-date-filter"><label htmlFor="match-date"><CalendarDays /> Pilih Tanggal</label><input id="match-date" type="date" value={selectedDate} min="2026-09-02" max="2026-09-06" onChange={(event) => setSelectedDate(event.target.value)} /><strong>{dateLabel(selectedDate)}</strong></div>
				{filteredMatches.length ? <div className="match-list">{filteredMatches.map((match) => <MatchCard key={match.id} match={match} />)}</div> : <div className="match-date-empty"><CalendarDays /><strong>Tidak ada pertandingan</strong><span>Belum ada jadwal pertandingan pada {dateLabel(selectedDate)}.</span></div>}
			</section>
			<section className="match-section match-section--upcoming"><div className="match-heading"><div><span>Agenda Berikutnya</span><h2>Jadwal Mendatang</h2></div></div><div className="match-list">{upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)}</div></section>
			<section className="match-section" id="statistik"><div className="match-heading"><div><span>Performa Pemain</span><h2>Statistik Turnamen</h2></div><p>Statistik pemain mulai dicatat dan ditampilkan saat babak 8 besar.</p></div><div className="ranking-grid"><Ranking title="Top Skor" label="Gol Terbanyak" entries={statistics.scorers} emptyText="Data tersedia saat babak 8 besar" /><Ranking title="Kartu Kuning" label="Peringkat Disiplin" entries={statistics.yellowCards} emptyText="Data tersedia saat babak 8 besar" /><Ranking title="Kartu Merah" label="Peringkat Disiplin" entries={statistics.redCards} emptyText="Data tersedia saat babak 8 besar" /></div></section>
			<section className="match-news"><div className="match-news__head"><div><span><Newspaper /> Ruang Berita</span><h2>Cerita dari Lapangan</h2></div><a href="/berita">Semua Berita <ArrowRight /></a></div><div className="news-preview-grid">{news.map((item) => <a href={`/berita/${item.slug}`} key={item.slug}><img src={item.image} alt="" loading="lazy" decoding="async" /><div><small>{item.category} · {item.date}</small><h3>{item.title}</h3><p>{item.excerpt}</p><span>Baca Selengkapnya <ArrowRight /></span></div></a>)}</div></section>
		</main>
		<footer className="match-footer"><img src={eventLogo} alt="" /><strong>Junjung Tinggi Sportivitas</strong><span>© 2026 Pemuda Cup Sintong</span></footer>
	</div>;
};

export default MatchCenterPage;
