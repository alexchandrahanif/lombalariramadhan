/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import {
	Trophy,
	Medal,
	Star,
	Calendar,
	ArrowRight,
	Camera,
} from 'lucide-react';
// Import foto dari assets
import FotoLomba from '../assets/lombalari.jpg';

const Information = () => {
	const winners = [
		{
			rank: 1,
			name: 'Riski Ubul Sintong',
			icon: (
				<Trophy
					className="text-amber-400"
					size={32}
				/>
			),
		},
		{
			rank: 2,
			name: 'Riki Ujung Tanjung',
			icon: (
				<Medal
					className="text-slate-300"
					size={28}
				/>
			),
		},
		{
			rank: 3,
			name: 'Ardi Sintong',
			icon: (
				<Medal
					className="text-amber-700"
					size={24}
				/>
			),
		},
	];

	return (
		<section
			id="info"
			className="py-24 bg-emerald-950 px-6 overflow-hidden">
			<div className="max-w-6xl mx-auto">
				{/* --- HEADER --- */}
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-6">
						<Star
							size={14}
							className="text-amber-400 fill-amber-400"
						/>
						<span className="text-amber-400 font-black text-[10px] uppercase tracking-[0.3em]">
							Update Turnamen
						</span>
					</motion.div>
					<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
						HASIL{' '}
						<span className="text-emerald-500 italic font-outline-2">
							PART 1
						</span>
					</h2>
					<p className="text-emerald-300/60 font-bold text-sm tracking-widest uppercase italic leading-none">
						28 Februari — 01 Maret 2026
					</p>
				</div>

				{/* --- PODIUM PEMENANG --- */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					{winners.map((winner, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`p-8 border-2 ${
								index === 0
									? 'bg-amber-500/5 border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.1)]'
									: 'bg-white/5 border-white/10'
							} flex flex-col items-center text-center relative overflow-hidden`}>
							<div className="mb-6">{winner.icon}</div>
							<p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">
								Peringkat {winner.rank}
							</p>
							<h4 className="text-2xl font-black text-white uppercase mb-1 tracking-tight">
								{winner.name}
							</h4>
						</motion.div>
					))}
				</div>

				{/* --- DOKUMENTASI PART 1 --- */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-24">
					<div className="flex items-center gap-4 mb-6">
						<Camera
							className="text-emerald-500"
							size={24}
						/>
						<h5 className="text-white font-black uppercase tracking-widest text-sm">
							Dokumentasi Part 1
						</h5>
						<div className="flex-1 h-px bg-emerald-900"></div>
					</div>

					<div className="relative group overflow-hidden rounded-[30px] border-4 border-emerald-900 shadow-2xl">
						<img
							src={FotoLomba}
							alt="Dokumentasi Lomba Part 1"
							className="w-full h-[300px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80"></div>
					</div>
				</motion.div>

				{/* --- CTA PART 2 --- */}
				<div className="bg-emerald-900 p-8 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10 border border-emerald-800 shadow-2xl relative overflow-hidden">
					<div className="absolute top-0 right-0 p-10 opacity-5">
						<Star size={200} />
					</div>

					<div className="relative z-10 text-center md:text-left">
						<div className="flex items-center gap-3 justify-center md:justify-start mb-4">
							<Calendar
								className="text-amber-400"
								size={20}
							/>
							<span className="text-amber-400 font-black text-xs uppercase tracking-widest">
								Coming Soon
							</span>
						</div>
						<h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-4">
							SIAP UNTUK{' '}
							<span className="text-emerald-400 italic">PART 2?</span>
						</h3>
						<p className="text-emerald-200/60 font-medium max-w-md">
							Ayo masyarakat Sintong Bakti! Saatnya giliranmu bersinar. Amankan
							slot pendaftaranmu sekarang juga.
						</p>
						<p className="mt-4 text-white font-black italic text-xl">
							08 — 09 Maret 2026
						</p>
					</div>

					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="relative z-10 bg-amber-500 hover:bg-amber-600 text-emerald-950 px-10 py-5 font-black uppercase text-xl tracking-tighter shadow-xl flex items-center gap-4 transition-all">
						DAFTAR SEKARANG <ArrowRight size={24} />
					</motion.a>
				</div>

				<p className="text-center mt-12 text-emerald-700 font-bold text-[10px] uppercase tracking-[0.5em]">
					Jangan Sampai Ketinggalan Keseruan Berikutnya!
				</p>
			</div>
		</section>
	);
};

export default Information;
