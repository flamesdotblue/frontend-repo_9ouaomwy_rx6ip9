import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-md"
          >
            🧩 The Voice of Builders in Web3
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            BUIDL Cast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-black/70 dark:text-white/70"
          >
            A next‑gen Web3 media and storytelling platform amplifying the voices shaping the decentralized future. Where innovation meets narrative — uncovering founders, frontier tech, and the moments redefining the next internet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="mailto:buidlcast@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition-all dark:bg-white dark:text-black"
            >
              Contact: buidlcast@gmail.com
            </a>
            <div className="text-xs text-black/60 dark:text-white/60">No forms — just email or socials below.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
