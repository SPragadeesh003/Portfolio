'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="w-full bg-black text-white">
      <div className="px-4 md:px-10 lg:px-20 py-20 border-b border-[#333]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-1/3">
            <div className="flex gap-4 items-start">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">About<br />Me</h2>
            </div>
          </div>

          <div className="lg:w-2/3 border-l-0 lg:border-l lg:border-[#333] lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-2xl text-white leading-tight font-bold max-w-3xl flex flex-col gap-8 uppercase font-sans tracking-tight"
            >
              <p>
                I&apos;m an AI Enthusiast and Full Stack Developer, recently graduated with a B.Tech in Computer Science (Cyber Physical Systems). My journey started with building production-grade React Native and Android applications during my internship at TheBrandopedia, where I engineered offline-first systems and real-time syncing architectures.
              </p>
              <p>
                Currently, I am deeply focused on the intersection of Web Development and Artificial Intelligence. I am actively expanding my expertise in Machine Learning, Generative AI (LLMs), and Python frameworks like Flask and FastAPI to build smart, data-driven full-stack applications.
              </p>
              <p>
                As a fresh graduate, I bring hands-on experience in shipping live apps and a strong foundational grasp of modern cloud architectures. I am now seeking a full-time role as an AI Full Stack Developer where I can leverage my diverse skill set to solve complex technical challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
