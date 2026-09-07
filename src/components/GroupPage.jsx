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
import { matches } from '../data/matchData';

const groups = [
	{
		name: 'Group A',
		teams: [
			{ name: 'Bescemp Poss x Ruwo A', logo: basecampLogo },
			{ name: 'Al-Qarny x Suang Sadu', logo: alqarnyLogo },
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
			{ name: 'Casper FC', logo: casperLogo },
			{ name: 'Arwana Selection', logo: arwanaLogo },
			{ name: 'Pondok Hantu', logo: pondokHantuLogo },
		],
	},
	{
		name: 'Group D',
		teams: [
			{ name: 'Bescemp Poss x Ruwo B', logo: basecampLogo },
			{ name: 'Eterna FC', logo: eternaLogo },
			{ name: 'Kobatama FC', logo: kobatamaLogo },
			{ name: '08 Rokan Farm', logo: rokanFarmLogo },
		],
	},
];

const completedMatches = matches.filter((match) => match.score);

const standingsForGroup = (group) => group.teams.map((team) => {
	const teamMatches = completedMatches.filter((match) => match.group === group.name && (match.home.name === team.name || match.away.name === team.name));
	const standing = teamMatches.reduce((record, match) => {
		const isHome = match.home.name === team.name;
		const goalsFor = match.score[isHome ? 0 : 1];
		const goalsAgainst = match.score[isHome ? 1 : 0];
		record.played += 1;
		record.goalsFor += goalsFor;
		record.goalsAgainst += goalsAgainst;
		if (goalsFor > goalsAgainst) record.won += 1;
		else if (goalsFor < goalsAgainst) record.lost += 1;
		else record.drawn += 1;
		return record;
	}, { played:0, won:0, drawn:0, lost:0, goalsFor:0, goalsAgainst:0 });

	const form = teamMatches
		.slice()
		.sort((firstMatch, secondMatch) => `${firstMatch.date}${firstMatch.time}`.localeCompare(`${secondMatch.date}${secondMatch.time}`))
		.map((match) => {
			const isHome = match.home.name === team.name;
			const goalsFor = match.score[isHome ? 0 : 1];
			const goalsAgainst = match.score[isHome ? 1 : 0];
			return goalsFor > goalsAgainst ? 'W' : goalsFor < goalsAgainst ? 'L' : 'D';
		});

	return {
		...team,
		...standing,
		goalDifference: standing.goalsFor - standing.goalsAgainst,
		points: standing.won * 3 + standing.drawn,
		form,
	};
}).sort((firstTeam, secondTeam) => secondTeam.points - firstTeam.points || secondTeam.goalDifference - firstTeam.goalDifference || secondTeam.goalsFor - firstTeam.goalsFor || firstTeam.name.localeCompare(secondTeam.name));

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
					{groups.map((group, groupIndex) => {
						const standings = standingsForGroup(group);
						return (
						<article className="group-card" key={group.name}>
							<div className="group-card__head">
								<span>0{groupIndex + 1}</span>
								<h3>{group.name}</h3>
								<small>{group.teams.length} Tim</small>
							</div>
							<div className="standings-wrap">
								<table className="standings-table">
									<thead><tr><th>#</th><th>Klub</th><th title="Main">P</th><th title="Menang">M</th><th title="Seri">S</th><th title="Kalah">K</th><th title="Selisih Gol">SG</th><th>Poin</th><th>Form</th></tr></thead>
									<tbody>{standings.map((team, teamIndex) => (
										<tr key={`${group.name}-${team.name}`}>
											<td><span className={`standing-position ${teamIndex < 2 ? 'standing-position--qualified' : ''}`}>{teamIndex + 1}</span></td>
											<td><div className="standing-club"><img src={team.logo} alt={`Logo ${team.name}`} /><strong>{team.name}</strong></div></td>
											<td>{team.played}</td><td>{team.won}</td><td>{team.drawn}</td><td>{team.lost}</td>
											<td>{team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}</td><td className="standing-points">{team.points}</td>
											<td><div className="standing-form">{team.form.length ? team.form.map((result, resultIndex) => <span className={`form-result form-result--${result.toLowerCase()}`} title={result === 'W' ? 'Menang' : result === 'L' ? 'Kalah' : 'Seri'} key={`${team.name}-${resultIndex}`}>{result === 'W' ? 'M' : result === 'L' ? 'K' : 'S'}</span>) : <small>—</small>}</div></td>
										</tr>
									))}</tbody>
								</table>
							</div>
						</article>
						);
					})}
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
