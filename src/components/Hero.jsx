import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1rQJq4r8t5wQ2b9d/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            BUIDL Cast
            <span className="block text-lg sm:text-2xl font-normal text-black/60 mt-3">
              Next‑gen Web3 storytelling. Conversations with the builders, onchain.
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:buidlcast@gmail.com"
              className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90 transition"
            >
              Get in touch
            </a>
            <a
              href="#mission"
              className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5 transition"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
