/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import {
	Trophy,
	Zap,
	MapPin,
	Medal,
	Coins,
	Flame,
	FileCheck,
	Droplets,
} from 'lucide-react';

const Content = () => {
	const rewards = [
		{
			icon: (
				<Coins
					className="text-amber-500"
					size={32}
				/>
			),
			title: 'Jutaan Rupiah',
			desc: 'Hadiah tunai untuk para pemenang tercepat.',
		},
		{
			icon: (
				<Medal
					className="text-amber-500"
					size={32}
				/>
			),
			title: 'Medali Juara',
			desc: 'Simbol kejayaan bagi sang raja lintasan Sintong.',
		},
		{
			icon: (
				<FileCheck
					className="text-amber-500"
					size={32}
				/>
			),
			title: 'Sertifikat',
			desc: 'Penghargaan resmi atas partisipasi dan kemenanganmu.',
		},
		{
			icon: (
				<Droplets
					className="text-blue-500"
					size={32}
				/>
			),
			title: 'Free Mineral',
			desc: 'Setiap pendaftar langsung mendapatkan air mineral gratis.',
		},
	];

	return (
		<section
			id="info"
			className="relative z-20 -mt-16 py-24 bg-white  shadow-2xl overflow-hidden">
			{/* Dekorasi Background Halus */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-50"></div>

			<div className="max-w-7xl mx-auto px-6">
				{/* SECTION 1: MAIN INFO & LOKASI */}
				<div className="grid md:grid-cols-2 gap-16 items-center mb-24">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}>
						<span className="inline-block px-4 py-1 mb-4 bg-amber-100 text-amber-700 rounded-full font-bold text-xs uppercase tracking-[0.2em]">
							Sintong Edition 2026
						</span>
						<h2 className="text-5xl md:text-7xl font-black text-emerald-950 uppercase tracking-tighter mb-6 leading-[0.9]">
							ADU CEPAT <br />
							<span className="text-emerald-600 italic underline decoration-amber-400">
								SATU LAWAN SATU
							</span>
						</h2>
						<p className="text-slate-600 text-lg leading-relaxed mb-8">
							Tanpa syarat rumit! Cukup bawa nyali dan kecepatanmu. Lomba lari
							jarak pendek sistem gugur (Sprint One by One) hadir untuk
							memeriahkan malam Ramadan kita.
						</p>

						{/* BOX LOKASI & BIAYA */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
							<div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex items-center gap-4 shadow-sm group hover:bg-emerald-50 transition-colors">
								<div className="bg-emerald-600 p-3 rounded-2xl text-white">
									<MapPin size={24} />
								</div>
								<div>
									<h4 className="font-black text-emerald-950 uppercase text-xs">
										Lokasi Arena
									</h4>
									<p className="text-emerald-800 font-bold text-sm">
										Jalur 2 Masjid Raya Annur
									</p>
								</div>
							</div>

							<div className="bg-amber-50 p-6 rounded-[32px] border border-amber-100 flex items-center gap-4 shadow-sm group hover:bg-amber-100 transition-colors">
								<div className="bg-amber-500 p-3 rounded-2xl text-white">
									<Coins size={24} />
								</div>
								<div>
									<h4 className="font-black text-emerald-950 uppercase text-xs">
										Pendaftaran
									</h4>
									<p className="text-amber-700 font-bold text-sm">
										Rp 30.000 / Orang
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* SECTION 2: VISUAL & HADIAH */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="relative">
						<div className="aspect-[4/5] bg-emerald-900 rounded-[50px] overflow-hidden shadow-3xl relative group">
							<img
								src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?q=80&w=1000&auto=format&fit=crop"
								alt="Sprint Battle"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>

							<div className="absolute top-8 right-8">
								<div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-3xl text-center">
									<p className="text-white text-[10px] font-black uppercase tracking-widest">
										Bonus
									</p>
									<p className="text-cyan-700 font-black">Free Air Mineral</p>
								</div>
							</div>

							<div className="absolute bottom-10 left-10 right-10">
								<div className="flex items-center gap-4 mb-2 text-amber-400">
									<Flame
										size={24}
										className="animate-pulse"
									/>
									<span className="font-black uppercase tracking-widest text-sm italic">
										Grand Prize
									</span>
								</div>
								<h3 className="text-white text-5xl font-black uppercase leading-none">
									Jutaan <br /> Rupiah!
								</h3>
							</div>
						</div>
					</motion.div>
				</div>

				{/* SECTION 3: REWARDS GRID */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
					{rewards.map((reward, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-8 bg-slate-50 rounded-[40px] border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl transition-all group">
							<div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
								{reward.icon}
							</div>
							<h5 className="text-lg font-black text-emerald-950 uppercase mb-2">
								{reward.title}
							</h5>
							<p className="text-slate-500 text-xs font-medium leading-relaxed">
								{reward.desc}
							</p>
						</motion.div>
					))}
				</div>

				{/* SECTION 4: CALL TO ACTION */}
				<motion.div
					whileHover={{ scale: 1.02 }}
					className="bg-emerald-950 rounded-[30px] md:rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/40">
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

					<div className="relative z-10">
						<h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">
							DAFTAR SEKARANG!
						</h3>
						<p className="text-emerald-200/70 mb-10 font-medium tracking-wide text-sm md:text-base max-w-lg mx-auto">
							Langsung datang ke lokasi Ba'da Tarawih. Siapkan 20K-mu dan rebut
							Hadiahnya!
						</p>

						{/* Grid System lebih stabil untuk Mobile daripada Flex */}
						<div className="grid grid-cols-1 md:flex md:flex-row gap-8 md:gap-6 justify-center items-start md:items-center">
							{/* Step 1 */}
							<div className="flex flex-row md:flex-row items-center gap-4 text-white w-full md:w-auto">
								<div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center font-black border border-emerald-700 shadow-xl">
									1
								</div>
								<div className="text-left">
									<p className="text-amber-400 font-bold uppercase text-xs tracking-widest">
										Langkah 1
									</p>
									<p className="leading-tight font-bold text-lg md:text-base">
										Daftar{' '}
										<span className="block text-sm font-normal text-emerald-300">
											Hubungi Panitia
										</span>
									</p>
								</div>
							</div>

							{/* Divider Mobile: Vertical Line | Desktop: Horizontal Line */}
							<div className="hidden md:block w-12 h-[1px] bg-white/20"></div>
							<div className="md:hidden w-px h-8 bg-gradient-to-b from-white/20 to-transparent ml-6"></div>

							{/* Step 2 */}
							<div className="flex flex-row md:flex-row items-center gap-4 text-white w-full md:w-auto">
								<div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center font-black border border-emerald-700 shadow-xl">
									2
								</div>
								<div className="text-left">
									<p className="text-amber-400 font-bold uppercase text-xs tracking-widest">
										Langkah 2
									</p>
									<p className="leading-tight font-bold text-lg md:text-base">
										Bayar 30rb{' '}
										<span className="block text-sm font-normal text-emerald-300">
											Ambil Air Mineral
										</span>
									</p>
								</div>
							</div>

							<div className="hidden md:block w-12 h-[1px] bg-white/20"></div>
							<div className="md:hidden w-px h-8 bg-gradient-to-b from-white/20 to-transparent ml-6"></div>

							{/* Step 3 */}
							<div className="flex flex-row md:flex-row items-center gap-4 text-white w-full md:w-auto">
								<div className="flex-shrink-0 w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center font-black border border-emerald-700 shadow-xl">
									3
								</div>
								<div className="text-left">
									<p className="text-amber-400 font-bold uppercase text-xs tracking-widest">
										Langkah 3
									</p>
									<p className="leading-tight font-bold text-lg md:text-base">
										Lari{' '}
										<span className="block text-sm font-normal text-emerald-300">
											& Jadi Juara!
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Content;
