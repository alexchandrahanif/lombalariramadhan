/** @format */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Send,
	MessageCircle,
	User,
	Phone,
	MapPin,
	Calendar,
	Weight,
	Layers,
	Wallet, // Ikon baru untuk Dana
} from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({
		nama: '',
		usia: '',
		berat: '',
		alamat: '',
		kategori: '',
	});

	const getWhatsAppURL = (phoneNumber) => {
		const text =
			`Halo Panitia, saya mau daftar Ramadan Sprint:%0A%0A` +
			`*Nama:* ${formData.nama}%0A` +
			`*Usia:* ${formData.usia} Tahun%0A` +
			`*Berat Badan:* ${formData.berat} KG%0A` +
			`*Alamat:* ${formData.alamat}%0A` +
			`*Kategori:* ${formData.kategori}%0A%0A` +
			`_Saya akan mengirimkan bukti bayar setelah ini._`;
		return `https://wa.me/${phoneNumber}?text=${text}`;
	};

	const handlePendaftaran = (e, targetNumber) => {
		e.preventDefault();
		// Validasi sederhana agar form diisi dulu
		if (!formData.nama || !formData.usia || !formData.kategori) {
			alert('Silakan isi data nama, usia, dan kategori terlebih dahulu!');
			return;
		}
		window.open(getWhatsAppURL(targetNumber), '_blank');
	};

	return (
		<section
			id="contact"
			className="py-24 bg-white px-6">
			<div className="max-w-5xl mx-auto">
				<div className="bg-emerald-50 rounded-[40px] overflow-hidden shadow-xl border border-emerald-100 grid md:grid-cols-2">
					{/* Info Side (Kiri) */}
					<div className="bg-emerald-900 p-10 md:p-16 text-white relative flex flex-col justify-center">
						<div className="absolute top-0 right-0 p-8 opacity-10">
							<MessageCircle size={150} />
						</div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative z-10">
							<h3 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight">
								Pendaftaran <br />{' '}
								<span className="text-amber-400">& Pembayaran</span>
							</h3>

							{/* Box Info Dana */}
							<div className="bg-emerald-800/50 border border-emerald-700 p-5 rounded-2xl mb-8">
								<div className="flex items-center gap-3 mb-3">
									<Wallet
										className="text-sky-400"
										size={20}
									/>
									<p className="text-[10px] text-sky-400 font-black uppercase tracking-[0.2em]">
										Pembayaran via DANA
									</p>
								</div>
								<p className="text-2xl font-mono font-black tracking-widest text-white mb-1">
									0822-8847-4827
								</p>
								<p className="text-xs font-bold text-emerald-300 uppercase italic">
									A.n Muhammad Rivaldi
								</p>
							</div>

							<div className="space-y-6">
								<p className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">
									Admin Konfirmasi:
								</p>
								<div className="flex items-center gap-4 group">
									<div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors">
										<User size={20} />
									</div>
									<div>
										<p className="text-sm font-black italic leading-none">
											Harlen
										</p>
										<p className="text-[10px] text-emerald-300/50 font-mono">
											0822-8889-8969
										</p>
									</div>
								</div>

								<div className="flex items-center gap-4 group">
									<div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors">
										<User size={20} />
									</div>
									<div>
										<p className="text-sm font-black italic leading-none">
											Yuda
										</p>
										<p className="text-[10px] text-emerald-300/50 font-mono">
											0822-8847-4827
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Form Side (Kanan) */}
					<div className="p-8 md:p-12">
						<div className="space-y-4">
							{/* Input Fields */}
							<div>
								<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
									Nama Lengkap
								</label>
								<div className="relative">
									<input
										type="text"
										required
										placeholder="Nama Anda..."
										className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm"
										onChange={(e) =>
											setFormData({ ...formData, nama: e.target.value })
										}
									/>
									<User
										className="absolute left-4 top-3.5 text-slate-400"
										size={18}
									/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
										Usia
									</label>
									<div className="relative">
										<input
											type="number"
											required
											placeholder="Tahun"
											className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm"
											onChange={(e) =>
												setFormData({ ...formData, usia: e.target.value })
											}
										/>
										<Calendar
											className="absolute left-4 top-3.5 text-slate-400"
											size={18}
										/>
									</div>
								</div>
								<div>
									<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
										Berat (KG)
									</label>
									<div className="relative">
										<input
											type="number"
											required
											placeholder="KG"
											className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm"
											onChange={(e) =>
												setFormData({ ...formData, berat: e.target.value })
											}
										/>
										<Weight
											className="absolute left-4 top-3.5 text-slate-400"
											size={18}
										/>
									</div>
								</div>
							</div>

							<div>
								<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
									Alamat / Domisili
								</label>
								<div className="relative">
									<input
										type="text"
										required
										placeholder="Contoh: Sintong Bakti..."
										className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm"
										onChange={(e) =>
											setFormData({ ...formData, alamat: e.target.value })
										}
									/>
									<MapPin
										className="absolute left-4 top-3.5 text-slate-400"
										size={18}
									/>
								</div>
							</div>

							<div>
								<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
									Kategori Lomba
								</label>
								<div className="relative">
									<select
										required
										className="w-full bg-white border border-slate-200 p-3.5 pl-11 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm appearance-none cursor-pointer"
										onChange={(e) =>
											setFormData({ ...formData, kategori: e.target.value })
										}>
										<option value="">Pilih Kategori...</option>
										<option value="Dewasa (+65KG)">Dewasa (+65KG)</option>
										<option value="Dewasa (-65KG)">Dewasa (-65KG)</option>
										<option value="Wanita">Wanita</option>
										<option value="Anak-anak">Anak-anak</option>
									</select>
									<Layers
										className="absolute left-4 top-3.5 text-slate-400"
										size={18}
									/>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									onClick={(e) => handlePendaftaran(e, '6282288898969')}
									className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-black uppercase text-[10px] tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all">
									Daftar ke Harlen <Send size={14} />
								</motion.button>

								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									onClick={(e) => handlePendaftaran(e, '6282288474827')}
									className="bg-amber-500 hover:bg-amber-600 text-emerald-950 p-4 rounded-xl font-black uppercase text-[10px] tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all">
									Daftar ke Yuda <Send size={14} />
								</motion.button>
							</div>

							<p className="text-center text-[9px] text-slate-500 font-bold uppercase tracking-wider">
								Silakan transfer ke nomor DANA, lalu kirim bukti bayar ke Admin.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
