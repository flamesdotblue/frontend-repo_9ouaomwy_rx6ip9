import { Mail, Send, MessageCircle, Twitter } from 'lucide-react';

const LINKS = {
  x: 'https://x.com/Buidlcast',
  telegram: 'https://t.me/+Qk1uQGi4FOdhNTA1',
  whatsapp: 'https://chat.whatsapp.com/JIiS2kZlEDr0LmtM8eR5EL',
  email: 'mailto:buidlcast@gmail.com',
};

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">buidlcast</span>
          </a>
          <nav className="flex items-center gap-2">
            <a aria-label="X (Twitter)" href={LINKS.x} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 transition">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="Telegram" href={LINKS.telegram} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 transition">
              <Send className="h-5 w-5" />
            </a>
            <a aria-label="WhatsApp" href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 transition">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={LINKS.email} className="ml-2 inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm font-medium hover:bg-black/90 transition">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
