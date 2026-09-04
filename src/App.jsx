/** @format */

import EventPage from './components/EventPage';
import SponsorPage from './components/SponsorPage';
import GroupPage from './components/GroupPage';
import MatchCenterPage from './components/MatchCenterPage';
import NewsPage, { NewsIndexPage } from './components/NewsPage';
import DashboardPage from './components/admin/DashboardPage';
import LoginPage from './components/admin/LoginPage';
import { AuthProvider, useAuth } from './context/AuthContext';

/*
 * Konten website Ramadan Run sebelumnya sengaja dipertahankan.
 * Aktifkan kembali imports dan komponen di bawah jika sewaktu-waktu dibutuhkan.
 *
 * import Navbar from './components/Navbar';
 * import Content from './components/Content';
 * import Contact from './components/Contact';
 * import Footer from './components/Footer';
 * import Information from './components/Information';
 *
 * const PreviousRamadanRunWebsite = () => (
 *   <div className="bg-emerald-950 min-h-screen selection:bg-amber-400 selection:text-emerald-950 overflow-x-hidden">
 *     <Navbar />
 *     <main>
 *       <div className="h-24 md:h-32" />
 *       <div className="relative z-10">
 *         <Content />
 *         <Information />
 *         <Contact />
 *         <Footer />
 *       </div>
 *     </main>
 *   </div>
 * );
 */

const AdminRoute = () => {
	const { user, loading, configured } = useAuth();
	if (loading) return <div className="admin-boot">Menyiapkan dashboard...</div>;
	if (!configured || !user) return <LoginPage />;
	return <DashboardPage />;
};

const App = () => {
	const isAdminRoute = window.location.pathname.startsWith('/admin');
	const isSponsorRoute = window.location.pathname.startsWith('/sponsor');
	const isGroupRoute = window.location.pathname.startsWith('/group');
	const isMatchRoute = window.location.pathname.startsWith('/pertandingan');
	const isNewsRoute = window.location.pathname.startsWith('/berita');
	const newsSlug = window.location.pathname.split('/')[2];
	return (
		<AuthProvider>
			{isAdminRoute ? <AdminRoute /> : isSponsorRoute ? <SponsorPage /> : isGroupRoute ? <GroupPage /> : isMatchRoute ? <MatchCenterPage /> : isNewsRoute ? (newsSlug ? <NewsPage slug={newsSlug} /> : <NewsIndexPage />) : <EventPage />}
		</AuthProvider>
	);
};

export default App;
