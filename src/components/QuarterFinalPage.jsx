/** @format */

import { ArrowLeft, CalendarDays, Clock3, MapPin, Trophy } from 'lucide-react';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';
import alqarnyLogo from '../assets/web/alqarny.webp';
import handayaniLogo from '../assets/web/handayani.webp';
import smaLogo from '../assets/web/SMA3.webp';
import eltharLogo from '../assets/web/elthar.webp';
import arwanaLogo from '../assets/web/arwana.webp';
import pondokHantuLogo from '../assets/web/pondokhantu.webp';
import basecampLogo from '../assets/web/basecamp.webp';
import rokanFarmLogo from '../assets/web/rokanfarm.webp';
import './QuarterFinalPage.css';

const quarterFinals = [
	{ code:'QF 1', date:'Senin, 14 September 2026', time:'15:30 WIB', home:{ name:'Al-Qarny x Suang Sadu', logo:alqarnyLogo }, away:{ name:'SMAN 3 TP A', logo:smaLogo } },
	{ code:'QF 2', date:'Senin, 14 September 2026', time:'16:40 WIB', home:{ name:'Bescemp Poss x Ruwo B', logo:basecampLogo }, away:{ name:'Pondok Hantu', logo:pondokHantuLogo } },
	{ code:'QF 3', date:'Selasa, 15 September 2026', time:'15:30 WIB', home:{ name:'Arwana Selection', logo:arwanaLogo }, away:{ name:'08 Rokan Farm', logo:rokanFarmLogo } },
	{ code:'QF 4', date:'Selasa, 15 September 2026', time:'16:40 WIB', home:{ name:'Elthar FC', logo:eltharLogo }, away:{ name:'Handayani FC', logo:handayaniLogo } },
];

const nextRounds = [
	{ stage:'Semifinal 1', date:'Rabu, 16 September 2026', time:'16:30 WIB', teams:['Pemenang QF 4','Pemenang QF 2'] },
	{ stage:'Semifinal 2', date:'Kamis, 17 September 2026', time:'16:30 WIB', teams:['Pemenang QF 1','Pemenang QF 3'] },
];

const TeamRow = ({ team }) => <div className="knockout-team"><img src={team.logo} alt={`Logo ${team.name}`} /><strong>{team.name}</strong><span>—</span></div>;

const PlaceholderMatch = ({ match }) => <article className="knockout-card knockout-card--placeholder"><div className="knockout-card__meta"><span>{match.stage}</span><small><CalendarDays /> {match.date}</small><small><Clock3 /> {match.time}</small></div><div className="knockout-placeholder"><strong>{match.teams[0]}</strong><i>VS</i><strong>{match.teams[1]}</strong></div></article>;

const QuarterFinalPage = () => <div className="knockout-page">
	<header className="knockout-nav"><a href="/" className="knockout-brand"><img src={eventLogo} alt="" /><span><strong>Pemuda Cup III</strong><small>Fase Gugur</small></span></a><nav><a href="/group">Klasemen</a><a href="/pertandingan">Match Center</a><a href="/berita">Berita</a></nav><a href="/group" className="knockout-back"><ArrowLeft /> Group</a></header>
	<main>
		<section className="knockout-hero"><div><span className="knockout-eyebrow"><Trophy /> Road to the Final</span><h1>Babak<br/><em>8 Besar.</em></h1><p>Delapan tim terbaik. Sistem gugur. Satu jalan menuju trofi Pemuda Cup III Sintong 2026.</p><div className="knockout-hero__meta"><span><MapPin /> Lapangan Putri Hijau</span><span><CalendarDays /> 14–20 September 2026</span></div></div><div className="knockout-trophy"><span>8</span><img src={eventLogo} alt="Logo Pemuda Cup III" /><strong>TEAMS</strong><small>ONE CHAMPION</small></div></section>

		<section className="knockout-section"><div className="knockout-heading"><div><span>Knockout Stage</span><h2>Championship Bracket</h2></div><p>Pemenang setiap pertandingan melaju. Tidak ada kesempatan kedua.</p></div>
			<div className="knockout-board">
				<section className="knockout-column"><header><span>01</span><div><small>Babak Pertama</small><h3>Perempat Final</h3></div><b>4 Laga</b></header><div className="knockout-stack">{quarterFinals.map((match) => <article className="knockout-card" key={match.code}><div className="knockout-card__meta"><span>{match.code}</span><small><CalendarDays /> {match.date}</small><small><Clock3 /> {match.time}</small></div><TeamRow team={match.home} /><div className="knockout-versus">VS</div><TeamRow team={match.away} /></article>)}</div></section>
				<section className="knockout-column knockout-column--middle"><header><span>02</span><div><small>Empat Terbaik</small><h3>Semifinal</h3></div><b>2 Laga</b></header><div className="knockout-stack knockout-stack--center">{nextRounds.map((match) => <PlaceholderMatch match={match} key={match.stage} />)}</div></section>
				<section className="knockout-column knockout-column--final"><header><span>03</span><div><small>Panggung Utama</small><h3>Final</h3></div><b>2 Laga</b></header><div className="knockout-stack knockout-stack--center"><PlaceholderMatch match={{ stage:'Perebutan Posisi 3', date:'Sabtu, 19 September 2026', time:'16:30 WIB', teams:['Kalah Semifinal 1','Kalah Semifinal 2'] }} /><article className="knockout-card knockout-card--champion"><Trophy /><span>Grand Final</span><h3>Minggu, 20 September 2026</h3><b>16:30 WIB</b><div><strong>Pemenang Semifinal 1</strong><i>VS</i><strong>Pemenang Semifinal 2</strong></div></article></div></section>
			</div>
			<div className="knockout-note"><span>Format</span><strong>Sistem Gugur</strong><p>Jika skor imbang pada waktu normal, pertandingan dilanjutkan sesuai regulasi turnamen.</p></div>
		</section>
	</main>
	<footer className="knockout-footer"><img src={eventLogo} alt="" /><strong>Junjung Tinggi Sportivitas</strong><span>© 2026 Pemuda Cup Sintong</span></footer>
</div>;

export default QuarterFinalPage;
