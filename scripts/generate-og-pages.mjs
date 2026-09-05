import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = (process.env.SITE_URL || 'https://pemuda-cup-sintong.vercel.app').replace(/\/$/, '');
const distDirectory = path.resolve('dist');
const baseHtml = await readFile(path.join(distDirectory, 'index.html'), 'utf8');

const pages = [
	{
		route: 'group',
		title: 'Pembagian Group Pemuda Cup III Sintong 2026',
		description: 'Lihat pembagian resmi Group A, B, C, dan D Pemuda Cup III Sintong 2026.',
		image: '/og-share/group.png',
	},
	{
		route: 'pertandingan',
		title: 'Jadwal dan Hasil Pertandingan Pemuda Cup III',
		description: 'Jadwal, skor, hasil pertandingan, dan statistik Pemuda Cup III Sintong 2026.',
		image: '/og-share/pertandingan.png',
	},
	{
		route: 'berita',
		title: 'Berita Pemuda Cup III Sintong 2026',
		description: 'Laporan pertandingan dan cerita terbaru dari Pemuda Cup III Sintong 2026.',
		image: '/og-share/berita.png',
	},
	{
		route: 'berita/kobatama-fc-pesta-empat-gol-ke-gawang-eterna',
		title: 'Kobatama FC Pesta Empat Gol ke Gawang Eterna',
		description: 'Kobatama FC tampil dominan dan menang telak 4–0 atas Eterna FC dalam laga Group D.',
		image: '/og-share/eterna-kobatama.jpg',
	},
	{
		route: 'berita/bescemp-poss-x-ruwo-b-redam-08-rokan-farm',
		title: 'Bescemp Poss x Ruwo B Redam 08 Rokan Farm dalam Duel Empat Gol',
		description: 'Bescemp Poss x Ruwo B menang 3–1 setelah membalas gol pembuka 08 Rokan Farm.',
		image: '/og-share/bescempb-rokanfarm.jpg',
	},
	{
		route: 'berita/sman-3-tp-a-menang-dramatis-atas-tunas-muda',
		title: 'Lima Gol Tercipta, SMAN 3 TP A Taklukkan Tunas Muda FC',
		description: 'Hat-trick Barok membawa SMAN 3 TP A mengamankan kemenangan 3–2 dalam duel sengit Group B.',
		image: '/og-share/sman3a-tunasmuda.jpg',
	},
	{
		route: 'berita/alqarny-dan-handayani-berbagi-poin',
		title: 'Duel Ketat Tanpa Gol, Al-Qarny dan Handayani Berbagi Poin',
		description: 'Pertahanan kedua tim tampil disiplin dalam hasil imbang 0–0 di laga Group A.',
		image: '/og-share/alqarny-handayani.jpg',
	},
	{
		route: 'berita/elthar-fc-buka-turnamen-dengan-kemenangan-telak',
		title: 'Elthar FC Buka Turnamen dengan Kemenangan Meyakinkan',
		description: 'Elthar FC mencetak tiga gol tanpa balas atas Brimox Company pada laga pembuka.',
		image: '/og-share/elthar-brimox.jpg',
	},
	{
		route: 'berita/gol-cepat-faren-antar-sman-3-tp-b-taklukkan-casper',
		title: 'Gol Cepat Faren Antar SMAN 3 TP B Taklukkan Casper FC',
		description: 'Gol tunggal Faren pada menit keenam membawa SMAN 3 TP B meraih tiga poin penting di Group C.',
		image: '/og-share/sman3b-casper.jpg',
	},
	{
		route: 'berita/ryo-jadi-pembeda-arwana-selection-menang-atas-pondok-hantu',
		title: 'Ryo Jadi Pembeda, Arwana Selection Menang atas Pondok Hantu',
		description: 'Arwana Selection mengamankan kemenangan 1–0 melalui gol Ryo dalam duel kompetitif Group C.',
		image: '/og-share/arwana-pondokhantu.jpg',
	},
];

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');

const replaceMeta = (html, selector, content) => {
	const attribute = selector.startsWith('og:') ? 'property' : 'name';
	const pattern = new RegExp(`<meta\\s+${attribute}="${selector}"\\s+content="[^"]*"\\s*/?>`, 'i');
	const tag = `<meta ${attribute}="${selector}" content="${escapeAttribute(content)}" />`;
	return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `\t\t${tag}\n\t</head>`);
};

for (const page of pages) {
	const pageUrl = `${siteUrl}/${page.route}`;
	const imageUrl = `${siteUrl}${page.image}`;
	let html = baseHtml.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
	html = replaceMeta(html, 'description', page.description);
	html = replaceMeta(html, 'og:title', page.title);
	html = replaceMeta(html, 'og:description', page.description);
	html = replaceMeta(html, 'og:image', imageUrl);
	html = replaceMeta(html, 'og:url', pageUrl);
	html = replaceMeta(html, 'twitter:title', page.title);
	html = replaceMeta(html, 'twitter:description', page.description);
	html = replaceMeta(html, 'twitter:image', imageUrl);
	const outputDirectory = path.join(distDirectory, page.route);
	await mkdir(outputDirectory, { recursive: true });
	await writeFile(path.join(outputDirectory, 'index.html'), html);
}

console.log(`Generated ${pages.length} share-ready pages for ${siteUrl}`);
