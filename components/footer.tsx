'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#000] text-white">
      <div className="px-4 md:px-10 lg:px-20 py-20 pb-10">

        <div className="border-b border-[#333] pb-20 mb-10 flex flex-col items-center text-center group">
          <span className="text-sm font-bold uppercase tracking-widest text-white/50 mb-8">[Got a project?]</span>
          <motion.a
            href="mailto:pragadeeshvit2021@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter uppercase hover:bg-white hover:text-black px-4 transition-colors duration-300"
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <a href="mailto:pragadeeshvit2021@gmail.com" className="hover:bg-white hover:text-black px-2 py-1 transition-colors border border-transparent hover:border-current">pragadeeshvit2021@gmail.com</a>
            <a href="https://linkedin.com/in/pragadeesh-s-81bb60238" className="hover:bg-white hover:text-black px-2 py-1 transition-colors border border-transparent hover:border-current">LinkedIn</a>
            <a href="https://github.com/SPragadeesh003" className="hover:bg-white hover:text-black px-2 py-1 transition-colors border border-transparent hover:border-current">GitHub</a>
          </div>

          <div className="flex gap-10 opacity-70">
            <span>{currentYear} Pragadeesh</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
