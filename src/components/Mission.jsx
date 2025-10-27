import { CheckCircle2, CircuitBoard, Waves, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
  {
    title: 'Spotlight the builders',
    desc: 'We go beyond headlines to uncover the people, craft, and vision behind real products and protocols.',
  },
  {
    title: 'Curate high-signal stories',
    desc: 'Every story is selected for substance — big ideas, useful frameworks, and signal over noise.',
  },
  {
    title: 'Earn trust with depth',
    desc: 'A platform for investors, founders, and explorers who value clarity, context, and rigor.',
  },
];

export default function Mission() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[64rem] h-[64rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-md">
              <CircuitBoard className="h-3.5 w-3.5" />
              Mission
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Stories that move the Web3 frontier
            </h2>
            <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
              From Layer 1 breakthroughs to AI × Crypto crossovers, we explore the inflection points — and the builders behind them. Each conversation is crafted to surface insight, not hype.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-black/70 dark:text-white/70 text-sm mt-1">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <FeatureCard
              icon={<Rocket className="h-5 w-5" />}
              title="Founder-first"
              desc="We highlight the people and processes behind enduring projects."
              gradient="from-fuchsia-500/15 to-violet-500/15"
            />
            <FeatureCard
              icon={<Waves className="h-5 w-5" />}
              title="Signals over noise"
              desc="Curated conversations built for depth, clarity, and context."
              gradient="from-cyan-400/15 to-emerald-400/15"
            />
            <FeatureCard
              icon={<CircuitBoard className="h-5 w-5" />}
              title="Frontier tech"
              desc="Tracking breakthroughs across chains, infra, and AI × Crypto."
              gradient="from-amber-400/15 to-rose-400/15"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="Curated and trusted"
              desc="Built for investors, founders, and curious minds who value rigor."
              gradient="from-emerald-400/15 to-teal-400/15"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, gradient }) {
  return (
    <div className={`relative rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 backdrop-blur-xl overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="relative">
        <div className="h-10 w-10 rounded-xl bg-black text-white dark:bg-white dark:text-black grid place-items-center">
          {icon}
        </div>
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">{desc}</p>
      </div>
    </div>
  );
}
