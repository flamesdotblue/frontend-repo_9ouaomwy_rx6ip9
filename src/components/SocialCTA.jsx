import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, Twitter } from 'lucide-react';

const LINKS = {
  x: 'https://x.com/Buidlcast',
  telegram: 'https://t.me/+Qk1uQGi4FOdhNTA1',
  whatsapp: 'https://chat.whatsapp.com/JIiS2kZlEDr0LmtM8eR5EL',
  email: 'mailto:buidlcast@gmail.com',
};

function Card({ href, icon: Icon, title, description }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition block"
    >
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-black/60">{description}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function SocialCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Join the conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-black/70"
          >
            Follow, chat, or drop us a line. We’d love to hear what you’re building.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card
            href={LINKS.email}
            icon={Mail}
            title="Email"
            description="buidlcast@gmail.com"
          />
          <Card
            href={LINKS.x}
            icon={Twitter}
            title="X (Twitter)"
            description="News, drops, and episode threads"
          />
          <Card
            href={LINKS.telegram}
            icon={Send}
            title="Telegram"
            description="Quick updates and community"
          />
          <Card
            href={LINKS.whatsapp}
            icon={MessageCircle}
            title="WhatsApp"
            description="Builder chat and coordination"
          />
        </div>
      </div>
    </section>
  );
}
