'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-end border-b border-[#333] px-4 md:px-10 lg:px-20 pb-10 pt-20">

      <div className="absolute top-10 left-0 w-full px-4 md:px-10 lg:px-20 flex justify-between items-start text-xs uppercase tracking-widest text-[#888]">
        <div className="flex flex-col gap-1">
          <span className="text-white">Pragadeesh S</span>
          <span>AI Full Stack Developer</span>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase"
          >
            Pragadeesh
          </motion.h1>
        </div>

        <div className="overflow-hidden border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl text-sm md:text-base text-[#888] leading-relaxed"
          >
            I am a fresh graduate actively building AI-powered applications and robust full-stack systems with Java and Python.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white"
          >
            <a href="mailto:pragadeeshvit2021@gmail.com" className="hover:text-[#888] transition-colors">Email</a>
            <a href="https://linkedin.com/in/pragadeesh-s-81bb60238" className="hover:text-[#888] transition-colors">LinkedIn</a>
            <a href="https://github.com/SPragadeesh003" className="hover:text-[#888] transition-colors">GitHub</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
