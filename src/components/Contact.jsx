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
} from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({
		nama: '',
		usia: '',
		berat: '',
		alamat: '',
		kategori: '',
	});

	const handleSendMessage = (e) => {
		e.preventDefault();

		// Format Pesan WhatsApp yang Terstruktur
		const phoneNumber = '6282288898969';
		const text =
			`Halo Bang Harlen, saya mau daftar Ramadan Sprint:%0A%0A` +
			`*Nama:* ${formData.nama}%0A` +
			`*Usia:* ${formData.usia} Tahun%0A` +
			`*Berat Badan:* ${formData.berat} KG%0A` +
			`*Alamat:* ${formData.alamat}%0A` +
			`*Kategori:* ${formData.kategori}`;

		window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
	};

	return (
		<section
			id="contact"
			className="py-24 bg-white px-6">
			<div className="max-w-5xl mx-auto">
				<div className="bg-emerald-50 rounded-[40px] overflow-hidden shadow-xl border border-emerald-100 grid md:grid-cols-2">
					{/* Info Side (Kiri) */}
					<div className="bg-emerald-900 p-10 md:p-16 text-white relative">
						<div className="absolute top-0 right-0 p-8 opacity-10">
							<MessageCircle size={150} />
						</div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative z-10">
							<h3 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
								Formulir <br />{' '}
								<span className="text-amber-400">Pendaftaran</span>
							</h3>
							<p className="text-emerald-200/80 mb-10 font-medium">
								Silakan isi data diri Anda dengan benar. Pastikan kategori
								sesuai dengan kriteria lomba.
							</p>

							<div className="space-y-6">
								<div className="flex items-center gap-5">
									<div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center text-amber-400 shrink-0">
										<User size={24} />
									</div>
									<div>
										<p className="text-xs text-emerald-400 font-bold uppercase tracking-widest leading-none mb-1">
											Panitia
										</p>
										<p className="text-xl font-black italic">Harlen</p>
									</div>
								</div>

								<div className="flex items-center gap-5">
									<div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center text-amber-400 shrink-0">
										<Phone size={24} />
									</div>
									<div>
										<p className="text-xs text-emerald-400 font-bold uppercase tracking-widest leading-none mb-1">
											WhatsApp
										</p>
										<p className="text-xl font-black italic">
											+62 822-8889-8969
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Form Side (Kanan) */}
					<div className="p-8 md:p-12">
						<form
							onSubmit={handleSendMessage}
							className="space-y-4">
							{/* Nama Lengkap */}
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
								{/* Usia */}
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
								{/* Berat Badan */}
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

							{/* Alamat */}
							<div>
								<label className="block text-[10px] text-emerald-900 font-black uppercase mb-1 tracking-[0.2em]">
									Alamat / Domisili
								</label>
								<div className="relative">
									<input
										type="text"
										required
										placeholder="Contoh: Jl. Cendana..."
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

							{/* Kategori */}
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

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-black uppercase tracking-[0.1em] flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 transition-all mt-4">
								Kirim Form Pendaftaran <Send size={18} />
							</motion.button>

							<p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-wider">
								Verifikasi pendaftaran & pembayaran dilakukan di lokasi
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
