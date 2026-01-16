'use client';

import { motion } from 'framer-motion';

const MARQUEE_WORDS = [
  "EMPATHY",
  "DEVELOPMENT",
  "INNOVATION",
  "COMMUNITY",
  "CREATIVITY",
  "GROWTH",
  "COLLABORATION",
  "IMPACT",
  "LEADERSHIP",
  "TECHNOLOGY",
];

export default function Marquee() {
  return (
    <section className="relative w-full bg-black py-8 overflow-hidden border-y border-white/5">
      <div className="flex select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap items-center gap-16 px-8"
        >
          {/* Render twice for seamless loop */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {MARQUEE_WORDS.map((word, index) => (
                <span
                  key={`${i}-${index}`}
                  className="text-white text-2xl md:text-3xl font-bold tracking-tighter font-mono"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
