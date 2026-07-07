'use client'

import { motion } from 'framer-motion'

export function Education() {
  const education = [
    {
      degree: 'B.Tech - Computer Science and Engineering',
      institution: 'Vellore Institute of Technology, Chennai',
      details: 'Specialization in Cyber Physical Systems',
      year: 'Sep 2021 - May 2025',
    },
    {
      degree: 'Java Full Stack Certification',
      institution: 'Iamneo',
      details: 'Comprehensive course on Java, ReactJS, Spring Boot & MySQL',
      year: 'Sep 2023 - Dec 2023',
    },
  ]

  return (
    <section id="education" className="w-full bg text-white">
      <div className="px-4 md:px-10 lg:px-20 py-20 border-b border-[#333]">
        <div className="flex gap-4 mb-20 items-end">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Education</h2>
        </div>

        <div className="flex flex-col border-t border-[#333]">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 lg:py-16 border-b border-[#333] hover:bg-[#FBF6EE] hover:text-[#111111] transition-all duration-300 px-4 lg:px-8 -mx-4 lg:-mx-8 cursor-default"
            >
              <div className="flex flex-col mb-4 md:mb-0">
                <span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">{edu.year}</span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">{edu.institution}</h3>
              </div>
              <div className="flex flex-col md:text-right">
                <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1">{edu.degree}</h4>
                <span className="text-sm md:text-base font-medium font-sans">{edu.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
