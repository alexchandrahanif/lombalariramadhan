/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Globe, Twitter } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-emerald-950 pt-20 pb-10 px-6 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center text-center">
					{/* Logo Footer */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex items-center space-x-3 mb-8">
						<div className="w-12 h-12 bg-amber-500 flex items-center justify-center shadow-2xl">
							<span className="text-emerald-950 font-black text-2xl">R</span>
						</div>
						<div className="text-left">
							<h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-none">
								Ramadan<span className="text-amber-400">Run</span>
							</h4>
							<p className="text-emerald-500 font-bold text-[10px] uppercase tracking-[0.3em]">
								Sintong Edition 2026
							</p>
						</div>
					</motion.div>

					{/* Social Media */}
					{/* <div className="flex gap-6 mb-12">
						{[Instagram, Facebook, Twitter, Globe].map((Icon, i) => (
							<motion.a
								key={i}
								href="#"
								whileHover={{ y: -5, textShadow: '0 0 8px rgb(251 191 36)' }}
								className="w-12 h-12 rounded-full border border-emerald-800 flex items-center justify-center text-emerald-500 hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
								<Icon size={20} />
							</motion.a>
						))}
					</div> */}

					{/* Copyright Line */}
					<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-800 to-transparent mb-8"></div>

					<div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-emerald-600/60 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
						<p>© 2026 RAMADAN SPRINT CONTEST. ALL RIGHTS RESERVED.</p>

						{/* Creator Credit */}
						<p className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
							Dibuat Oleh{' '}
							<a
								href="https://alexchandrahanif.vercel.app/#profile"
								target="_blank"
								rel="noopener noreferrer"
								className="text-emerald-200 hover:text-amber-400 transition-colors duration-300 font-bold underline decoration-emerald-800 underline-offset-4">
								Alex Chandra Hanif
							</a>{' '}
							dengan
							<span className="text-red-500 text-lg animate-pulse">❤️</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
