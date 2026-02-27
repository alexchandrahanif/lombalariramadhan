/** @format */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, User, Phone, ClipboardList } from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({
		nama: '',
		pesan: '',
	});

	const handleSendMessage = (e) => {
		e.preventDefault();

		// Format Pesan WhatsApp
		const phoneNumber = '6282288898969';
		const text = `Halo Bang Harlen, saya *${formData.nama}* mau tanya info pendaftaran Ramadan Sprint: %0A%0A${formData.pesan}`;

		// Buka WhatsApp di Tab Baru
		window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
	};

	return (
		<section
			id="contact"
			className="py-24 bg-white px-6">
			<div className="max-w-5xl mx-auto">
				<div className="bg-emerald-50 rounded-[40px] overflow-hidden shadow-xl border border-emerald-100 grid md:grid-cols-2">
					{/* Info Side */}
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
								Hubungi <br />{' '}
								<span className="text-amber-400 font-outline-1">Panitia</span>
							</h3>
							<p className="text-emerald-200/80 mb-10 font-medium">
								Punya pertanyaan seputar rute, pendaftaran, atau sponsor? Jangan
								ragu untuk hubungi kami.
							</p>

							<div className="space-y-6">
								<div className="flex items-center gap-5">
									<div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center text-amber-400">
										<User size={24} />
									</div>
									<div>
										<p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
											Penanggung Jawab
										</p>
										<p className="text-xl font-black">Harlen</p>
									</div>
								</div>

								<div className="flex items-center gap-5">
									<div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center text-amber-400">
										<Phone size={24} />
									</div>
									<div>
										<p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
											WhatsApp Only
										</p>
										<p className="text-xl font-black">+62 822-8889-8969</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Form Side */}
					<div className="p-10 md:p-16">
						<form
							onSubmit={handleSendMessage}
							className="space-y-5">
							<div>
								<label className="block text-emerald-950 font-bold text-sm uppercase mb-2 tracking-widest">
									Nama Lengkap
								</label>
								<div className="relative">
									<input
										type="text"
										required
										placeholder="Masukkan nama Anda..."
										className="w-full bg-white border border-slate-200 p-4 pl-12 rounded-2xl focus:outline-none focus:border-emerald-500 transition-all font-medium"
										onChange={(e) =>
											setFormData({ ...formData, nama: e.target.value })
										}
									/>
									<User
										className="absolute left-4 top-4 text-slate-400"
										size={20}
									/>
								</div>
							</div>

							<div>
								<label className="block text-emerald-950 font-bold text-sm uppercase mb-2 tracking-widest">
									Pesan Pertanyaan
								</label>
								<div className="relative">
									<textarea
										rows="4"
										required
										placeholder="Apa yang ingin ditanyakan?"
										className="w-full bg-white border border-slate-200 p-4 pl-12 rounded-2xl focus:outline-none focus:border-emerald-500 transition-all font-medium"
										onChange={(e) =>
											setFormData({ ...formData, pesan: e.target.value })
										}></textarea>
									<ClipboardList
										className="absolute left-4 top-4 text-slate-400"
										size={20}
									/>
								</div>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 transition-all">
								Kirim via WhatsApp <Send size={20} />
							</motion.button>
							<p className="text-center text-[10px] text-slate-400 font-bold uppercase">
								Tombol ini akan membuka aplikasi WhatsApp Anda secara otomatis
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
