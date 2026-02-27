/** @format */

import Navbar from './components/Navbar';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="bg-emerald-950 min-h-screen selection:bg-amber-400 selection:text-emerald-950 overflow-x-hidden">
			<Navbar />

			<main>
				<div className="h-24 md:h-32" />
				<div className="relative z-10">
					<Content />
					<Contact />
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default App;
