import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import SocialCTA from './components/SocialCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Mission />
        <SocialCTA />
      </main>
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} BUIDL Cast — The Voice of Builders in Web3
        </div>
      </footer>
    </div>
  );
}

export default App;
