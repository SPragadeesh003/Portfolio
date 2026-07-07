'use client'

import { motion } from 'framer-motion'

const SKILL_CATEGORIES = [
  {
    label: 'AI & Machine Learning',
    skills: ['LLMs', 'Generative AI', 'Python', 'Flask', 'XGBoost', 'Random Forest'],
  },
  {
    label: 'Frontend & Mobile',
    skills: ['ReactJS', 'React Native', 'Expo', 'HTML/CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend & Database',
    skills: ['Spring Boot', 'Java', 'Firebase', 'Supabase', 'MySQL', 'REST APIs'],
  },
  {
    label: 'Tools & Architecture',
    skills: ['Git', 'Clean Architecture', 'Offline-First', 'Real-time Sync', 'Data Pipelines'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="w-full bg text-white">
      <div className="px-4 md:px-10 lg:px-20 py-20 border-b border-[#333]">
        <div className="flex gap-4 mb-20 items-end">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#333]">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col border-b border-r border-[#333] p-8 md:p-10 hover:bg-[#FBF6EE] hover:text-[#111111] transition-all duration-300"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-10 opacity-70 group-hover:opacity-100">
                {category.label}
              </h3>
              <div className="flex flex-col gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xl md:text-2xl font-bold uppercase tracking-tight"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
