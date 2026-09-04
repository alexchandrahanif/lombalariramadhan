/** @format */

import smaLogo from '../assets/SMA3.png';
import tunasMudaLogo from '../assets/tunasmuda.png';
import alqarnyLogo from '../assets/alqarny.png';
import handayaniLogo from '../assets/handayani.png';
import eltharLogo from '../assets/elthar.png';
import brimoxLogo from '../assets/brimox.png';
import casperLogo from '../assets/casper.png';
import arwanaLogo from '../assets/arwana.png';
import pondokHantuLogo from '../assets/pondokhantu.png';
import eternaLogo from '../assets/eterna.png';
import kobatamaLogo from '../assets/kobatama.png';
import basecampLogo from '../assets/basecamp.png';
import rokanFarmLogo from '../assets/rokanfarm.png';
import schedulePoster from '../assets/jadwal-minggu-1.png';
import smaResultImage from '../assets/hasil-sman3-tunasmuda.png';
import alqarnyResultImage from '../assets/hasil-alqarny-handayani.png';
import eltharResultImage from '../assets/hasil-elthar-brimox.png';
import sma3bResultImage from '../assets/hasil-sman3b-casper.png';
import arwanaResultImage from '../assets/hasil-arwana-pondokhantu.png';

export const scheduleImage = schedulePoster;

// UPDATE MALAMAN:
// 1. Ubah score: null menjadi score: [golKandang, golTandang].
// 2. Ubah status menjadi 'Selesai', lalu isi events dan image bila tersedia.
// 3. Tambah pemain ke statistics dan artikel baru ke news bila dibutuhkan.
export const matches = [
  { id:'elthar-vs-brimox', date:'2026-09-02', day:'Rabu', time:'16:00', group:'Group B', home:{name:'Elthar FC',logo:eltharLogo}, away:{name:'Brimox Company',logo:brimoxLogo}, score:[3,0], status:'Selesai', events:['Rivaldi S 25\' ⚽','Andri Zal 33\' ⚽','Wirahadi 41\' 🟨','Mhd. Syakir 43\' ⚽','Faiz 15\' 🟨'], image:eltharResultImage },
  { id:'sman3a-vs-tunasmuda', date:'2026-09-03', day:'Kamis', time:'16:00', group:'Group B', home:{name:'SMAN 3 TP A',logo:smaLogo}, away:{name:'Tunas Muda FC',logo:tunasMudaLogo}, score:[3,2], status:'Selesai', events:['Barok 4\', 27\', 30\' ⚽','Yetno 37\' ⚽','Ilham 49\' ⚽'], image:smaResultImage },
  { id:'alqarny-vs-handayani', date:'2026-09-03', day:'Kamis', time:'17:00', group:'Group A', home:{name:'Al-Qarny x Suang Sadu',logo:alqarnyLogo}, away:{name:'Handayani FC',logo:handayaniLogo}, score:[0,0], status:'Selesai', events:['Ripi 32\' 🟨'], image:alqarnyResultImage },
  { id:'sman3b-vs-casper', date:'2026-09-04', day:'Jumat', time:'16:00', group:'Group C', home:{name:'SMAN 3 TP B',logo:smaLogo}, away:{name:'Casper FC',logo:casperLogo}, score:[1,0], status:'Selesai', events:['Faren 6\' ⚽'], image:sma3bResultImage },
  { id:'arwana-vs-pondokhantu', date:'2026-09-04', day:'Jumat', time:'17:00', group:'Group C', home:{name:'Arwana Selection',logo:arwanaLogo}, away:{name:'Pondok Hantu',logo:pondokHantuLogo}, score:[1,0], status:'Selesai', events:['Ryo 33\' ⚽','Jefri 43\' 🟨'], image:arwanaResultImage },
  { id:'eterna-vs-kobatama', date:'2026-09-05', day:'Sabtu', time:'16:00', group:'Group D', home:{name:'Eterna FC',logo:eternaLogo}, away:{name:'Kobatama FC',logo:kobatamaLogo}, score:null, status:'Hari Ini', events:[] },
  { id:'basecampb-vs-rokanfarm', date:'2026-09-05', day:'Sabtu', time:'17:00', group:'Group D', home:{name:'Bescemp Poss x Ruwo B',logo:basecampLogo}, away:{name:'08 Rokan Farm',logo:rokanFarmLogo}, score:null, status:'Hari Ini', events:[] },
  { id:'sman3a-vs-brimox', date:'2026-09-06', day:'Minggu', time:'16:00', group:'Group B', home:{name:'SMAN 3 TP A',logo:smaLogo}, away:{name:'Brimox Company',logo:brimoxLogo}, score:null, status:'Akan Datang', events:[] },
  { id:'basecampa-vs-handayani', date:'2026-09-06', day:'Minggu', time:'17:00', group:'Group A', home:{name:'Bescemp Poss x Ruwo A',logo:basecampLogo}, away:{name:'Handayani FC',logo:handayaniLogo}, score:null, status:'Akan Datang', events:[] },
];

export const statistics = {
  scorers:[],
  yellowCards:[],
  redCards:[],
};

export const news = [
  { slug:'gol-cepat-faren-antar-sman-3-tp-b-taklukkan-casper', title:'Gol Cepat Faren Antar SMAN 3 TP B Taklukkan Casper FC', excerpt:'Gol tunggal Faren pada menit keenam cukup membawa SMAN 3 TP B meraih tiga poin penting di Group C.', date:'4 September 2026', category:'Laporan Pertandingan', image:sma3bResultImage, matchId:'sman3b-vs-casper', paragraphs:['SMAN 3 TP B membuka langkah di Group C Pemuda Cup III dengan kemenangan tipis 1–0 atas Casper FC. Gol cepat Faren pada menit keenam menjadi pembeda dalam pertandingan yang berlangsung ketat di Lapangan Putri Hijau.','Keunggulan sejak awal memberi SMAN 3 TP B kepercayaan diri untuk mengendalikan tempo. Casper FC mencoba merespons dan terus mencari celah, tetapi pertahanan SMAN 3 TP B tampil disiplin dalam menjaga keunggulan.','Casper meningkatkan tekanan hingga fase akhir pertandingan, namun skor tetap bertahan. Kemenangan ini memberi SMAN 3 TP B tiga poin penting sekaligus awal positif dalam persaingan Group C.'] },
  { slug:'ryo-jadi-pembeda-arwana-selection-menang-atas-pondok-hantu', title:'Ryo Jadi Pembeda, Arwana Selection Menang atas Pondok Hantu', excerpt:'Arwana Selection mengamankan kemenangan 1–0 melalui gol Ryo dalam duel keras dan kompetitif di Group C.', date:'4 September 2026', category:'Laporan Pertandingan', image:arwanaResultImage, matchId:'arwana-vs-pondokhantu', paragraphs:['Arwana Selection meraih tiga poin setelah menundukkan Pondok Hantu dengan skor tipis 1–0. Duel Group C berlangsung kompetitif, dengan kedua tim saling menekan dan menjaga intensitas hingga peluit akhir.','Ryo memecah kebuntuan pada menit ke-33. Gol tersebut lahir pada momen penting dan membuat Arwana Selection mampu bermain lebih tenang dalam mempertahankan keunggulan.','Pondok Hantu tidak menyerah dan terus memburu gol penyeimbang. Jefri menerima kartu kuning pada menit ke-43 saat tensi laga meningkat, tetapi skor 1–0 tetap bertahan dan memastikan kemenangan Arwana Selection.'] },
  { slug:'sman-3-tp-a-menang-dramatis-atas-tunas-muda', title:'Lima Gol Tercipta, SMAN 3 TP A Taklukkan Tunas Muda FC', excerpt:'Hat-trick Barok membawa SMAN 3 TP A mengamankan kemenangan 3–2 dalam duel sengit Group B.', date:'3 September 2026', category:'Laporan Pertandingan', image:smaResultImage, matchId:'sman3a-vs-tunasmuda', paragraphs:['SMAN 3 TP A membuka perjalanan mereka di Pemuda Cup III dengan kemenangan dramatis 3–2 atas Tunas Muda FC. Pertandingan berjalan terbuka sejak menit awal dan menghadirkan lima gol untuk penonton di Lapangan Putri Hijau.','Barok menjadi pembeda lewat penampilan tajamnya. Tiga gol pada menit ke-4, 27, dan 30 membuat SMAN 3 TP A memiliki modal kuat, meski Tunas Muda terus memberi tekanan melalui gol Yetno dan Ilham.','Tunas Muda FC menunjukkan semangat hingga peluit akhir, tetapi keunggulan SMAN 3 TP A tetap bertahan. Hasil ini membuat persaingan Group B langsung memanas sejak pekan pertama.'] },
  { slug:'alqarny-dan-handayani-berbagi-poin', title:'Duel Ketat Tanpa Gol, Al-Qarny dan Handayani Berbagi Poin', excerpt:'Pertahanan kedua tim tampil disiplin dalam hasil imbang 0–0 di laga Group A.', date:'3 September 2026', category:'Laporan Pertandingan', image:alqarnyResultImage, matchId:'alqarny-vs-handayani', paragraphs:['Al-Qarny x Suang Sadu dan Handayani FC harus puas berbagi satu poin setelah bermain imbang 0–0. Kedua tim sama-sama tampil disiplin dan menutup ruang serangan sepanjang pertandingan.','Tempo laga tetap tinggi meski tidak ada gol tercipta. Sejumlah peluang hadir dari kedua sisi, namun penyelesaian akhir dan penampilan lini belakang membuat papan skor tidak berubah.','Ripi menerima kartu kuning pada menit ke-32. Hasil ini menjaga peluang kedua tim tetap terbuka dalam persaingan Group A Pemuda Cup III.'] },
  { slug:'elthar-fc-buka-turnamen-dengan-kemenangan-telak', title:'Elthar FC Buka Turnamen dengan Kemenangan Meyakinkan', excerpt:'Elthar FC mencetak tiga gol tanpa balas atas Brimox Company pada laga pembuka.', date:'2 September 2026', category:'Laporan Pertandingan', image:eltharResultImage, matchId:'elthar-vs-brimox', paragraphs:['Elthar FC mengawali Pemuda Cup III dengan kemenangan meyakinkan 3–0 atas Brimox Company. Permainan efektif dan tekanan konsisten menjadi kunci pada laga pembuka Group B.','Rivaldi S membuka keunggulan pada menit ke-25 sebelum Andri Zal menggandakan skor pada menit ke-33. Mhd. Syakir kemudian memastikan kemenangan lewat gol pada menit ke-43.','Brimox Company berusaha bangkit, tetapi lini pertahanan Elthar mampu menjaga gawang tetap bersih. Tiga poin ini menempatkan Elthar dalam posisi kuat pada awal persaingan group.'] },
];
