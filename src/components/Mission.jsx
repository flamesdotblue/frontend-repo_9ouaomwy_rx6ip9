import { motion } from 'framer-motion';
import { Rocket, Mic2, Trophy, Users } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition"
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
    </motion.div>
  );
}

export default function Mission() {
  return (
    <section id="mission" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Our mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-black/70"
          >
            Elevate voices building the open internet. We host crisp, founder‑first conversations and surface signals over noise.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard
            icon={Rocket}
            title="Founder‑first"
            description="Candid stories from the people shipping products and protocols."
          />
          <FeatureCard
            icon={Mic2}
            title="Signals over noise"
            description="Actionable insights distilled from technical and go‑to‑market journeys."
          />
          <FeatureCard
            icon={Trophy}
            title="Craft and clarity"
            description="High production value, clean sound, and thoughtful pacing."
          />
          <FeatureCard
            icon={Users}
            title="Community"
            description="Bring together builders, researchers, and creators across chains."
          />
        </div>
      </div>
    </section>
  );
}
