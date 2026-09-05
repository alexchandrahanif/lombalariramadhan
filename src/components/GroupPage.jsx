/** @format */

import { ArrowLeft, CalendarDays, MapPin, Shield } from 'lucide-react';
import './GroupPage.css';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';
import basecampLogo from '../assets/web/basecamp.webp';
import alqarnyLogo from '../assets/web/alqarny.webp';
import handayaniLogo from '../assets/web/handayani.webp';
import smaLogo from '../assets/web/SMA3.webp';
import tunasMudaLogo from '../assets/web/tunasmuda.webp';
import eltharLogo from '../assets/web/elthar.webp';
import brimoxLogo from '../assets/web/brimox.webp';
import casperLogo from '../assets/web/casper.webp';
import arwanaLogo from '../assets/web/arwana.webp';
import pondokHantuLogo from '../assets/web/pondokhantu.webp';
import eternaLogo from '../assets/web/eterna.webp';
import kobatamaLogo from '../assets/web/kobatama.webp';
import rokanFarmLogo from '../assets/web/rokanfarm.webp';

const groups = [
	{
		name: 'Group A',
		teams: [
			{ name: 'Bescemp Poss x Ruwo', logo: basecampLogo },
			{ name: 'AOG x Suang Sadu', logo: alqarnyLogo },
			{ name: 'Handayani FC', logo: handayaniLogo },
		],
	},
	{
		name: 'Group B',
		teams: [
			{ name: 'SMAN 3 TP A', logo: smaLogo },
			{ name: 'Tunas Muda FC', logo: tunasMudaLogo },
			{ name: 'Elthar FC', logo: eltharLogo },
			{ name: 'Brimox Company', logo: brimoxLogo },
		],
	},
	{
		name: 'Group C',
		teams: [
			{ name: 'SMAN 3 TP B', logo: smaLogo },
			{ name: 'Casper FC PK', logo: casperLogo },
			{ name: 'Arwana FC Simp. Sintong', logo: arwanaLogo },
			{ name: 'Pondok Hantu', logo: pondokHantuLogo },
		],
	},
	{
		name: 'Group D',
		teams: [
			{ name: 'Bescemp Poss x Ruwo', logo: basecampLogo },
			{ name: 'Eterna FC', logo: eternaLogo },
			{ name: 'Kobatama FC', logo: kobatamaLogo },
			{ name: '08 Rokan Farm', logo: rokanFarmLogo },
		],
	},
];

const GroupPage = () => (
	<div className="group-page">
		<div className="group-page__noise" aria-hidden="true" />
		<header className="group-nav">
			<a className="group-brand" href="/" aria-label="Kembali ke beranda">
				<img src={eventLogo} alt="" />
				<span>
					<strong>Pemuda Cup III</strong>
					<small>Sintong · 2026</small>
				</span>
			</a>
			<a className="group-back" href="/">
				<ArrowLeft size={17} /> Kembali ke Beranda
			</a>
		</header>

		<main>
			<section className="group-hero">
				<div className="group-hero__glow" aria-hidden="true" />
				<div className="group-hero__copy">
					<span className="group-eyebrow"><Shield size={14} /> Fase Group Resmi</span>
					<h1>Battle Begins<br /><em>In Groups.</em></h1>
					<p>Empat grup. Lima belas tim. Satu tujuan menuju gelar juara Pemuda Cup III.</p>
					<div className="group-hero__meta">
						<span><CalendarDays /> 02 September 2026</span>
						<span><MapPin /> Lapangan Putri Hijau</span>
					</div>
				</div>
				<div className="group-hero__mark" aria-hidden="true">
					<span>FASE</span>
					<strong>GROUP</strong>
					<small>2026</small>
				</div>
			</section>

			<section className="group-section">
				<div className="group-section__heading">
					<div><span>Hasil Undian</span><h2>Daftar Group</h2></div>
					<p>Komposisi resmi fase grup Turnamen Mini Soccer Pemuda Cup III Sintong 2026.</p>
				</div>
				<div className="group-grid">
					{groups.map((group, groupIndex) => (
						<article className="group-card" key={group.name}>
							<div className="group-card__head">
								<span>0{groupIndex + 1}</span>
								<h3>{group.name}</h3>
								<small>{group.teams.length} Tim</small>
							</div>
							<div className="group-card__teams">
								{group.teams.map((team, teamIndex) => (
									<div className="group-team" key={`${group.name}-${team.name}`}>
										<span className="group-team__number">{String(teamIndex + 1).padStart(2, '0')}</span>
										<div className="group-team__logo"><img src={team.logo} alt={`Logo ${team.name}`} /></div>
										<strong>{team.name}</strong>
									</div>
								))}
							</div>
						</article>
					))}
				</div>
				<a className="group-match-link" href="/pertandingan">Lihat Jadwal & Hasil Pertandingan <ArrowLeft /></a>
			</section>
		</main>

		<footer className="group-footer">
			<img src={eventLogo} alt="Logo Pemuda Cup III" />
			<p>“Junjung Tinggi Sportivitas”</p>
			<span>© 2026 Pemuda Cup Sintong</span>
		</footer>
	</div>
);

export default GroupPage;
