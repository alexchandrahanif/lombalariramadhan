/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Camera, Users, ChevronRight } from 'lucide-react';
// Import foto
import FotoLomba1 from '../assets/lombalari.jpg';
import FotoLomba2 from '../assets/lombalari2.jpeg';

const Information = () => {
	// Data Pemenang Part 1
	const part1Winners = [
		{ rank: 1, name: 'Riski Ubul Sintong' },
		{ rank: 2, name: 'Riki Ujung Tanjung' },
		{ rank: 3, name: 'Ardi Sintong' },
	];

	// Data Pemenang Part 2
	const part2Winners = {
		putra: [
			{ rank: 1, name: 'Syahrul Gunawan (Rangau)' },
			{ rank: 2, name: 'Rido (Sintong)' },
			{ rank: 3, name: 'Mr-Openg (Teluk Mega)' },
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
			className="py-24 bg-emerald-950 px-6 overflow-hidden text-white">
			<div className="max-w-6xl mx-auto">
				{/* --- SECTION PART 1 --- */}
				<div className="mb-32">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
						<div>
							<div className="flex items-center gap-2 mb-4 text-emerald-400">
								<Star
									size={16}
									className="fill-emerald-400"
								/>
								<span className="font-black text-[10px] uppercase tracking-[0.3em]">
									Completed Event
								</span>
							</div>
							<h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
								HASIL{' '}
								<span className="text-emerald-500 italic font-outline-2">
									PART 1
								</span>
							</h2>
							<p className="text-emerald-300/40 font-bold mt-2 uppercase tracking-widest text-xs">
								28 Februari — 01 Maret 2026
							</p>
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-10 items-start">
						{/* Foto Part 1 */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative group rounded-[40px] overflow-hidden border-4 border-emerald-900 shadow-2xl">
							<img
								src={FotoLomba1}
								alt="Dokumentasi Part 1"
								className="w-full h-[400px] object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60"></div>
							<div className="absolute bottom-6 left-6 flex items-center gap-3">
								<div className="p-3 bg-emerald-500 rounded-2xl">
									<Camera
										size={20}
										className="text-emerald-950"
									/>
								</div>
								<p className="font-black italic uppercase text-xl">
									Action Part 1
								</p>
							</div>
						</motion.div>

						{/* List Pemenang Part 1 */}
						<div className="space-y-4">
							<h5 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6 flex items-center gap-2">
								<Users size={16} /> Daftar Pemenang
							</h5>
							{part1Winners.map((w, i) => (
								<motion.div
									key={i}
									whileHover={{ x: 10 }}
									className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group transition-all">
									<div className="flex items-center gap-4">
										<span className="text-2xl font-black text-white/10 group-hover:text-emerald-500/30 transition-colors italic">
											0{w.rank}
										</span>
										{renderMedal(w.rank)}
										<span className="font-bold text-lg uppercase tracking-tight">
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

				{/* --- SECTION PART 2 --- */}
				<div>
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
						<div>
							<div className="flex items-center gap-2 mb-4 text-amber-500">
								<Star
									size={16}
									className="fill-amber-500"
								/>
								<span className="font-black text-[10px] uppercase tracking-[0.3em]">
									Latest Event
								</span>
							</div>
							<h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
								HASIL{' '}
								<span className="text-amber-500 italic font-outline-2 text-transparent">
									PART 2
								</span>
							</h2>
							<p className="text-emerald-300/40 font-bold mt-2 uppercase tracking-widest text-xs">
								08 — 09 Maret 2026
							</p>
						</div>
					</div>

					<div className="grid lg:grid-cols-2 gap-10 items-start">
						{/* List Pemenang Part 2 (Grid Kategori) */}
						<div className="order-2 lg:order-1 space-y-8">
							{/* Kategori Putra */}
							<div className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
								<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
									<Trophy size={100} />
								</div>
								<h5 className="text-amber-400 font-black uppercase text-xs mb-6 tracking-widest italic">
									Pemenang Putra
								</h5>
								<div className="space-y-3">
									{part2Winners.putra.map((w, i) => (
										<div
											key={i}
											className="flex items-center justify-between border-b border-white/5 pb-2">
											<div className="flex items-center gap-3">
												{renderMedal(w.rank)}
												<span className="font-bold text-sm uppercase">
													{w.name}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Grid 2 Kolom (Wanita & Anak) */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
									<h5 className="text-pink-400 font-black uppercase text-[10px] mb-4 tracking-widest italic">
										Kategori Wanita
									</h5>
									{part2Winners.wanita.map((w, i) => (
										<div
											key={i}
											className="flex items-center gap-2 mb-2">
											{renderMedal(w.rank)}
											<span className="font-bold text-xs uppercase">
												{w.name}
											</span>
										</div>
									))}
								</div>
								<div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
									<h5 className="text-sky-400 font-black uppercase text-[10px] mb-4 tracking-widest italic">
										Kategori Anak
									</h5>
									{part2Winners.anak.map((w, i) => (
										<div
											key={i}
											className="flex items-center gap-2 mb-2">
											{renderMedal(w.rank)}
											<span className="font-bold text-xs uppercase">
												{w.name}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Foto Part 2 */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="order-1 lg:order-2 relative group rounded-[20px] md:rounded-[30px] overflow-hidden border-2 border-amber-500/30 bg-emerald-900/20">
							<img
								src={FotoLomba2}
								alt="Dokumentasi Part 2"
								className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
							/>

							{/* Overlay Gradient Halus di Bawah */}
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none"></div>

							{/* Teks Champion Moments */}
							<div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8">
								<h4 className="text-amber-400 font-black italic uppercase text-xl md:text-4xl leading-tight mb-1">
									CHAMPION MOMENTS
								</h4>
								<div className="flex items-center gap-2">
									<div className="w-1 h-3 bg-amber-500"></div>
									<p className="text-white font-bold uppercase tracking-[0.2em] text-[8px] md:text-xs">
										SINTONG BAKTI, RIAU — PART 2
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Footer info */}
				<p className="text-center mt-24 text-emerald-800 font-black text-[10px] uppercase tracking-[0.5em]">
					Mari Kita Jaga Sportivitas & Silaturahmi Masyarakat
				</p>
			</div>
		</section>
	);
};

export default Information;
