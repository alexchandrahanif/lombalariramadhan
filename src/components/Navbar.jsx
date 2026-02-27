/** @format */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Informasi', href: '#info' },
		{ name: 'Pendaftaran', href: '#contact' },
	];

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 px-6 ${
					isScrolled
						? 'bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800 py-3'
						: 'bg-emerald-950 py-5'
				}`}>
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					{/* Logo - Klik ke Atas */}
					<a
						href="#"
						className="flex items-center space-x-3 cursor-pointer group">
						<div className="w-10 h-10 bg-amber-500 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
							<span className="text-emerald-950 font-black text-xl">R</span>
						</div>
						<div className="flex flex-col leading-none">
							<span className="text-white font-black text-xl tracking-tighter uppercase">
								Ramadan<span className="text-amber-400">Run</span>
							</span>
							<span className="text-[10px] text-amber-200/70 font-bold tracking-[0.2em] uppercase">
								Sintong Bakti 2026
							</span>
						</div>
					</a>

					{/* Desktop Nav */}
					<nav className="hidden md:flex items-center space-x-12">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-xs font-black text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-[0.3em]">
								{link.name}
							</a>
						))}
					</nav>

					{/* Mobile Toggle */}
					<button
						onClick={() => setIsDrawerOpen(true)}
						className="md:hidden text-white">
						<Menu size={28} />
					</button>
				</div>
			</motion.header>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{isDrawerOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[60] bg-emerald-950/90 backdrop-blur-sm">
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween' }}
							className="absolute top-0 right-0 h-full w-[280px] bg-emerald-950 border-l border-emerald-800 p-8 flex flex-col">
							<div className="flex justify-end mb-16">
								<button
									onClick={() => setIsDrawerOpen(false)}
									className="text-amber-400">
									<X size={32} />
								</button>
							</div>

							<div className="flex flex-col space-y-10">
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										onClick={() => setIsDrawerOpen(false)}
										className="text-3xl font-black text-white hover:text-amber-400 uppercase tracking-tighter flex items-center justify-between group">
										{link.name}
										<ChevronRight
											size={24}
											className="text-amber-500"
										/>
									</a>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
