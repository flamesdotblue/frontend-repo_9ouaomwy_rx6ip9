import { Mail, Twitter, Send, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Email', href: 'mailto:buidlcast@gmail.com', icon: Mail, accent: 'from-emerald-500 to-teal-500' },
  { label: 'X (Twitter)', href: 'https://x.com/Buidlcast', icon: Twitter, accent: 'from-blue-500 to-violet-500' },
  { label: 'Telegram', href: 'https://t.me/+Qk1uQGi4FOdhNTA1', icon: Send, accent: 'from-fuchsia-500 to-pink-500' },
  { label: 'WhatsApp', href: 'https://chat.whatsapp.com/JIiS2kZlEDr0LmtM8eR5EL', icon: MessageCircle, accent: 'from-emerald-500 to-lime-500' },
];

export default function SocialCTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_top,transparent,black,black)]">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 sm:p-12"
        >
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Join the conversation</h3>
            <p className="mt-3 text-black/70 dark:text-white/70">
              Whether you're an investor scouting the next breakout, a founder building the future, or a curious explorer — connect with us.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/70 dark:bg-white/5 hover:-translate-y-0.5 transition-transform"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${l.accent} opacity-20`} />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-black text-white dark:bg-white dark:text-black grid place-items-center">
                      <l.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{l.label}</div>
                      <div className="text-xs text-black/60 dark:text-white/60">Reach out directly</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
