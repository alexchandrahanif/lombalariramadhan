/** @format */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Trophy,
	Medal,
	Star,
	Camera,
	Users,
	ChevronRight,
	ChevronLeft,
} from 'lucide-react';

// --- IMPORT SEMBILAN FOTO (JPEG) ---
import lombalari from '../assets/lombalari.jpg';
import lombalari2 from '../assets/lombalari2.jpeg';
import Foto1 from '../assets/satu.jpeg';
import Foto2 from '../assets/dua.jpeg';
import Foto3 from '../assets/tiga.jpeg';
import Foto4 from '../assets/empat.jpeg';
import Foto5 from '../assets/lima.jpeg';
import Foto6 from '../assets/enam.jpeg';
import Foto7 from '../assets/tujuh.jpeg';
import Foto8 from '../assets/delapan.jpeg';
import Foto9 from '../assets/sembilan.jpeg';

const Information = () => {
	// Data Pemenang Part 1 (Sintong & Ujung Tanjung)
	const part1Winners = [
		{ rank: 1, name: 'Riski Ubul Sintong' },
		{ rank: 2, name: 'Riki Ujung Tanjung' },
		{ rank: 3, name: 'Ardi Sintong' },
	];

	// Data Pemenang Part 2 (Lengkap 3 Kategori)
	const part2Winners = {
		putra: [
			{ rank: 1, name: 'Syahrul Gunawan' },
			{ rank: 2, name: 'Rido' },
			{ rank: 3, name: 'Mr-Openg' },
		],
		wanita: [
			{ rank: 1, name: 'Uya' },
			{ rank: 2, name: 'Ina Dimit' },
		],
		anak: [
			{ rank: 1, name: 'Rajab' },
			{ rank: 2, name: 'Kiki' },
		],
	};

	// Array untuk Carousel Foto Part 2
	const part2Photos = [
		lombalari2,
		Foto1,
		Foto2,
		Foto3,
		Foto4,
		Foto5,
		Foto6,
		Foto7,
		Foto8,
		Foto9,
	];

	// State untuk Carousel
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	// Efek Auto-Play Carousel (Ganti foto setiap 4 detik)
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % part2Photos.length);
		}, 4000);
		return () => clearInterval(timer); // Bersihkan timer saat komponen di-unmount
	}, [part2Photos.length]);

	// Fungsi Manual Navigation (Opsional, jika ingin ditambah tombol panah nanti)
	const nextPhoto = () => {
		setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % part2Photos.length);
	};
	const prevPhoto = () => {
		setCurrentPhotoIndex(
			(prevIndex) => (prevIndex - 1 + part2Photos.length) % part2Photos.length,
		);
	};

	const renderMedal = (rank) => {
		if (rank === 1)
			return (
				<Trophy
					className="text-amber-400 shrink-0"
					size={18}
				/>
			);
		if (rank === 2)
			return (
				<Medal
					className="text-slate-300 shrink-0"
					size={18}
				/>
			);
		return (
			<Medal
				className="text-amber-700 shrink-0"
				size={18}
			/>
		);
	};

	return (
		<section
			id="info"
			className="py-24 bg-emerald-950 px-6 overflow-hidden text-white font-sans">
			<div className="max-w-7xl mx-auto">
				{/* ================= SECTION PART 1 (SELESAI) ================= */}
				<div className="mb-32">
					<div className="text-center md:text-left mb-16">
						<div className="flex items-center gap-2 mb-4 text-emerald-400 justify-center md:justify-start">
							<Star
								size={16}
								className="fill-emerald-400 animate-pulse"
							/>
							<span className="font-black text-[10px] uppercase tracking-[0.3em]">
								Completed Stage
							</span>
						</div>
						<h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
							HASIL{' '}
							<span className="text-emerald-500 italic font-outline-2 text-transparent">
								PART 1
							</span>
						</h2>
						<p className="text-emerald-300/40 font-bold uppercase tracking-widest text-xs">
							28 Februari — 01 Maret 2026 | Sintong Bakti, Riau
						</p>
					</div>

					<div className="grid lg:grid-cols-12 gap-12 items-center">
						{/* Foto Part 1 (Hanya 1 Foto Utama) */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="lg:col-span-7 relative group rounded-[40px] overflow-hidden border-4 border-emerald-900 shadow-2xl bg-emerald-900/50 aspect-video">
							{/* Gunakan Foto1 sebagai dummy untuk Part 1 */}
							<img
								src={lombalari}
								alt="Dokumentasi Part 1"
								className="w-full h-full object-contain block"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
							<div className="absolute bottom-6 left-6 flex items-center gap-3">
								<div className="p-3 bg-emerald-500 rounded-2xl shadow-lg">
									<Camera
										size={20}
										className="text-emerald-950"
									/>
								</div>
								<p className="font-black italic uppercase text-xl text-white tracking-tighter">
									Moment Juara Part 1
								</p>
							</div>
						</motion.div>

						{/* List Pemenang Part 1 */}
						<div className="lg:col-span-5 space-y-4">
							<h5 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6 flex items-center gap-2 justify-center md:justify-start">
								<Users size={16} /> Daftar Pemenang Putra
							</h5>
							{part1Winners.map((w, i) => (
								<motion.div
									key={i}
									whileHover={{
										x: 10,
										backgroundColor: 'rgba(255,255,255,0.08)',
									}}
									className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-default">
									<div className="flex items-center gap-4">
										<span className="text-2xl font-black text-white/10 group-hover:text-emerald-500/50 transition-colors italic">
											0{w.rank}
										</span>
										{renderMedal(w.rank)}
										<span className="font-bold text-lg uppercase tracking-tight text-white">
											{w.name}
										</span>
									</div>
									<ChevronRight
										size={16}
										className="text-emerald-800"
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* ================= SECTION PART 2 (TERBARU) ================= */}
				<div>
					<div className="text-center md:text-left mb-16">
						<div className="flex items-center gap-2 mb-4 text-amber-500 justify-center md:justify-start">
							<Star
								size={16}
								className="fill-amber-500 animate-pulse"
							/>
							<span className="font-black text-[10px] uppercase tracking-[0.3em]">
								Latest Stage
							</span>
						</div>
						<h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
							HASIL{' '}
							<span className="text-amber-500 italic font-outline-2 text-transparent">
								PART 2
							</span>
						</h2>
						<p className="text-emerald-300/40 font-bold uppercase tracking-widest text-xs">
							08 — 09 Maret 2026 | Sintong Bakti, Riau
						</p>
					</div>

					<div className="grid lg:grid-cols-12 gap-12 items-start">
						{/* --- CAROUSEL FOTO PART 2 (9 FOTO AUTO-PLAY) --- */}
						<motion.div
							initial={{ opacity: 0, scale: 0.98 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="lg:col-span-7 order-2 lg:order-1 relative group rounded-[40px] overflow-hidden border-4 border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.1)] bg-emerald-900/50">
							{/* Container Foto dengan AnimatePresence */}
							<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden">
								<AnimatePresence mode="wait">
									<motion.img
										key={currentPhotoIndex}
										src={part2Photos[currentPhotoIndex]}
										alt={`Dokumentasi Part 2 - Foto ${currentPhotoIndex + 1}`}
										initial={{ opacity: 0, scale: 1.1, x: 50 }}
										animate={{ opacity: 1, scale: 1, x: 0 }}
										exit={{ opacity: 0, scale: 0.95, x: -50 }}
										transition={{ duration: 0.8, ease: 'easeInOut' }}
										className="absolute inset-0 w-full h-full object-contain block"
									/>
								</AnimatePresence>
							</div>

							{/* Overlay Gradient Halus */}
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent pointer-events-none"></div>

							{/* Indikator Titik (Pagination Dots) */}
							<div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
								{part2Photos.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentPhotoIndex(index)}
										className={`h-1.5 rounded-full transition-all duration-300 ${
											index === currentPhotoIndex
												? 'w-8 bg-amber-500'
												: 'w-2 bg-white/30 hover:bg-white/50'
										}`}
									/>
								))}
							</div>

							{/* Teks Champion Moments */}
							<div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 z-10 pointer-events-none">
								<p className="text-amber-400 font-black italic uppercase text-2xl md:text-4xl lg:text-5xl leading-none mb-2 tracking-tighter">
									Champion Moments
								</p>
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-4 bg-amber-500"></div>
									<p className="text-white/80 font-bold uppercase tracking-widest text-[10px] md:text-xs">
										Sintong Bakti, Riau — Part 2 (Ramadan 2026)
									</p>
								</div>
							</div>

							{/* Tombol Navigasi Manual (Opsional, muncul saat hover) */}
							<button
								onClick={prevPhoto}
								className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/50">
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={nextPhoto}
								className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/50">
								<ChevronRight size={24} />
							</button>
						</motion.div>

						{/* --- LIST PEMENANG PART 2 (GRID KATEGORI) --- */}
						<div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
							{/* Kategori Putra */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
								<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
									<Trophy
										size={100}
										className="text-amber-400"
									/>
								</div>
								<h5 className="text-amber-400 font-black uppercase text-xs mb-6 tracking-widest italic flex items-center gap-2">
									<Users size={16} /> Pemenang Putra
								</h5>
								<div className="space-y-3 relative z-10">
									{part2Winners.putra.map((w, i) => (
										<div
											key={i}
											className="flex items-center justify-between border-b border-white/5 pb-2">
											<div className="flex items-center gap-3">
												{renderMedal(w.rank)}
												<span className="font-bold text-sm uppercase text-white tracking-tight">
													{w.name}
												</span>
											</div>
											<span className="text-[9px] text-emerald-500 font-black uppercase tracking-widest">
												Juara {w.rank}
											</span>
										</div>
									))}
								</div>
							</motion.div>

							{/* Grid 2 Kolom (Wanita & Anak) */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
								{/* Kategori Wanita */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className="bg-white/5 border border-white/10 p-6 rounded-3xl border-l-4 border-l-pink-500/30">
									<h5 className="text-pink-400 font-black uppercase text-[10px] mb-5 tracking-widest italic flex items-center gap-2">
										<Users size={14} /> Kategori Wanita
									</h5>
									<div className="space-y-2">
										{part2Winners.wanita.map((w, i) => (
											<div
												key={i}
												className="flex items-center gap-2 mb-2 border-b border-white/5 pb-1.5 justify-between">
												<div className="flex items-center gap-2">
													{renderMedal(w.rank)}
													<span className="font-bold text-xs uppercase text-white">
														{w.name}
													</span>
												</div>
												<span className="text-[8px] text-emerald-600 font-black uppercase">
													J{w.rank}
												</span>
											</div>
										))}
									</div>
								</motion.div>

								{/* Kategori Anak */}
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className="bg-white/5 border border-white/10 p-6 rounded-3xl border-l-4 border-l-sky-500/30">
									<h5 className="text-sky-400 font-black uppercase text-[10px] mb-5 tracking-widest italic flex items-center gap-2">
										<Users size={14} /> Kategori Anak
									</h5>
									<div className="space-y-2">
										{part2Winners.anak.map((w, i) => (
											<div
												key={i}
												className="flex items-center gap-2 mb-2 border-b border-white/5 pb-1.5 justify-between">
												<div className="flex items-center gap-2">
													{renderMedal(w.rank)}
													<span className="font-bold text-xs uppercase text-white">
														{w.name}
													</span>
												</div>
												<span className="text-[8px] text-emerald-600 font-black uppercase">
													J{w.rank}
												</span>
											</div>
										))}
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer info (Community Message) */}
				{/* Ganti baris paling bawah dengan ini */}
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="text-center mt-28 text-emerald-800 font-black text-[10px] uppercase tracking-[0.5em]">
					Mari Kita Jaga Sportivitas & Silaturahmi Masyarakat Sintong Bakti
				</motion.p>
			</div>
		</section>
	);
};

export default Information;
