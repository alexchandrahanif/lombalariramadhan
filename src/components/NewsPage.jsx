/** @format */

import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Share2 } from 'lucide-react';
import eventLogo from '../assets/pemuda-cup-logo-transparent.png';
import { news } from '../data/matchData';
import './MatchCenterPage.css';

const NewsPage = ({ slug }) => {
	const article = news.find((item) => item.slug === slug);
	useEffect(() => {
		if (!article) return;
		document.title = `${article.title} | Pemuda Cup III`;
		const metadata = {
			'og:title': article.title,
			'og:description': article.excerpt,
			'og:image': new URL(article.image, window.location.origin).href,
			'og:url': window.location.href,
			'twitter:title': article.title,
			'twitter:description': article.excerpt,
			'twitter:image': new URL(article.image, window.location.origin).href,
		};
		Object.entries(metadata).forEach(([property, content]) => {
			const selector = property.startsWith('og:') ? `meta[property="${property}"]` : `meta[name="${property}"]`;
			let element = document.head.querySelector(selector);
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
				document.head.appendChild(element);
			}
			element.setAttribute('content', content);
		});
	}, [article]);
	if (!article) return <div className="match-page"><div className="news-not-found"><h1>Berita tidak ditemukan.</h1><a href="/berita"><ArrowLeft /> Kembali ke berita</a></div></div>;
	return <div className="match-page">
		<header className="match-nav"><a href="/" className="match-brand"><img src={eventLogo} alt="" /><span><strong>Pemuda Cup III</strong><small>Ruang Berita</small></span></a><a href="/berita" className="match-nav__back"><ArrowLeft /> Semua Berita</a></header>
		<main className="article-page"><div className="article-hero"><span>{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><small><CalendarDays /> {article.date}</small></div><img className="article-cover" src={article.image} alt={article.title} decoding="async" /><article className="article-body">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="article-share"><Share2 /><div><strong>Bagikan berita pertandingan</strong><small>Salin URL halaman ini, lalu kirim melalui WhatsApp atau media sosial.</small></div></div></article><aside className="article-related"><span>Berita Lainnya</span>{news.filter((item) => item.slug !== slug).map((item) => <a href={`/berita/${item.slug}`} key={item.slug}><img src={item.image} alt="" loading="lazy" decoding="async" /><div><small>{item.date}</small><strong>{item.title}</strong></div><ArrowRight /></a>)}</aside></main>
	</div>;
};

export const NewsIndexPage = () => <div className="match-page"><header className="match-nav"><a href="/" className="match-brand"><img src={eventLogo} alt="" /><span><strong>Pemuda Cup III</strong><small>Ruang Berita</small></span></a><a href="/pertandingan" className="match-nav__back"><ArrowLeft /> Match Center</a></header><main><section className="news-index-hero"><span>Laporan & Cerita</span><h1>Berita<br/><em>Pemuda Cup.</em></h1><p>Narasi pertandingan, sorotan pemain, dan cerita terbaru dari lapangan.</p></section><section className="news-index-grid">{news.map((item) => <a href={`/berita/${item.slug}`} key={item.slug}><img src={item.image} alt="" loading="lazy" decoding="async"/><div><small>{item.category} · {item.date}</small><h2>{item.title}</h2><p>{item.excerpt}</p><span>Baca Berita <ArrowRight /></span></div></a>)}</section></main></div>;

export default NewsPage;
