import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import SocialCTA from './components/SocialCTA';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} buidlcast. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <SocialCTA />
      </main>
      <Footer />
    </div>
  );
}
