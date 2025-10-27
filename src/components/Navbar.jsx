import { Mail, Twitter, Send, MessageCircle } from 'lucide-react';

const socials = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/Buidlcast',
    icon: Twitter,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/+Qk1uQGi4FOdhNTA1',
    icon: Send,
  },
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/JIiS2kZlEDr0LmtM8eR5EL',
    icon: MessageCircle,
  },
  {
    name: 'Email',
    href: 'mailto:buidlcast@gmail.com',
    icon: Mail,
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-emerald-400 shadow-md shadow-fuchsia-500/30 group-hover:scale-105 transition-transform" />
          <span className="text-xl font-semibold tracking-tight">BUIDL Cast</span>
        </a>
        <nav className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <s.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{s.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
