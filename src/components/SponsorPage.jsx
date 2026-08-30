/** @format */

import { useEffect, useState } from 'react';
import {
	ArrowLeft,
	HandCoins,
	Landmark,
	MessageCircle,
	Phone,
	Users,
} from 'lucide-react';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';
import { supabase } from '../lib/supabase';
import './SponsorPage.css';

const currency = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'IDR',
	maximumFractionDigits: 0,
});

const SponsorPage = () => {
	const [sponsors, setSponsors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadSponsors = async () => {
			const { data } = await supabase
				.from('sponsors')
				.select('id, name, contact_name, phone, logo_url, contribution_amount, notes')
				.order('contribution_amount', { ascending: false });
			setSponsors(data ?? []);
			setLoading(false);
		};

		loadSponsors();
	}, []);

	return (
		<div className="sponsor-page">
			<header className="sponsor-nav">
				<a className="sponsor-brand" href="/">
					<img src={eventLogo} alt="Logo Pemuda Cup III" />
					<span><strong>Pemuda Cup III</strong><small>Sintong · 2026</small></span>
				</a>
				<a className="sponsor-back" href="/"><ArrowLeft /> Kembali ke Beranda</a>
			</header>

			<main>
				<section className="sponsor-hero">
					<div className="sponsor-hero__glow" />
					<div className="sponsor-hero__content">
						<span className="sponsor-eyebrow">Sponsor Resmi</span>
						<h1>Mitra Pemuda<br /><em>Cup III.</em></h1>
						<p>
							Profil sponsor yang mendukung penyelenggaraan Pemuda Cup III
							di Sintong.
						</p>
					</div>
				</section>

				<section className="sponsor-directory">
					<div className="sponsor-directory__heading">
						<div><span className="sponsor-eyebrow">Daftar Sponsor</span><h2>Mitra pendukung turnamen.</h2></div>
					</div>

					{loading ? (
						<div className="sponsor-state">Memuat data sponsor...</div>
					) : (
						<div className="sponsor-directory__grid">
							{sponsors.map((sponsor, index) => {
								const phoneNumber = sponsor.phone?.replace(/\D/g, '').replace(/^0/, '62');
								return (
									<article key={sponsor.id}>
										<span className="sponsor-rank">{String(index + 1).padStart(2, '0')}</span>
										<div className="sponsor-directory__logo">
											{sponsor.logo_url ? <img src={sponsor.logo_url} alt={`Logo ${sponsor.name}`} /> : <Landmark />}
										</div>
										<div className="sponsor-directory__body">
											<small>Mitra Resmi</small>
											<h3>{sponsor.name}</h3>
											<p>{sponsor.notes || 'Sponsor resmi Pemuda Cup III.'}</p>
											<div className="sponsor-contribution"><HandCoins /><span><small>Kontribusi</small><strong>{currency.format(sponsor.contribution_amount)}</strong></span></div>
											{(sponsor.contact_name || sponsor.phone) && <div className="sponsor-contact"><Users /><span><small>Kontak Sponsor</small><strong>{sponsor.contact_name || 'Perwakilan sponsor'}</strong>{sponsor.phone && <b><Phone /> {sponsor.phone}</b>}</span></div>}
											{phoneNumber && <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer"><MessageCircle /> Hubungi Sponsor</a>}
										</div>
									</article>
								);
							})}
							{!sponsors.length && <div className="sponsor-state">Belum ada sponsor yang ditampilkan.</div>}
						</div>
					)}
				</section>
			</main>

			<footer className="sponsor-footer">
				<span>Pemuda Cup III · Sintong 2026</span>
				<a href="/">Kembali ke website utama</a>
			</footer>
		</div>
	);
};

export default SponsorPage;
