'use client'

import { ExternalLink, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      title: 'Quantum Digital Twin',
      description: 'Real-time 3D Digital Twin in Unreal Engine 5 for flood forecasting. Multi-model ML pipeline combining Random Forest, XGBoost, and Hybrid Quantum ML for water level prediction.',
      technologies: ['Unreal Engine 5', 'Python', 'Machine Learning', 'GenAI'],
      github: '#',
      live: '#',
      year: '2025',
      status: 'Patent App: 202641074685'
    },
    {
      title: 'Event Horizon Scanner',
      description: 'Offline-first Android ticket scanner with P2P mesh sync capability. Features real-time QR fraud detection and conflict-free data synchronization using WatermelonDB and Supabase.',
      technologies: ['React Native', 'Java', 'WatermelonDB', 'Supabase'],
      github: 'https://github.com/SPragadeesh003/eventTicket-scanner',
      live: '#',
      year: '2026'
    },
    {
      title: 'Quote Vault',
      description: 'Cross-device quote curation app with real-time sync, dynamic theme customization, and native text/image export. Integrates Expo Push Notifications and Home Screen Widgets.',
      technologies: ['React Native', 'Supabase', 'Expo'],
      github: 'https://github.com/SPragadeesh003/Quote-voult',
      live: '#',
      year: '2026'
    },
  ]

  return (
    <section id="projects" className="w-full bg text-[#FFFFFF]">
      <div className="px-4 md:px-10 lg:px-20 py-20 border-b border-[#333]">
        <div className="flex gap-4 mb-20 items-end">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected Works</h2>
        </div>

        <div className="flex flex-col border-t border-[#333]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 lg:py-16 border-b border-[#333] hover:bg-[#FBF6EE] hover:text-[#111111] transition-all duration-300 px-4 lg:px-8 -mx-4 lg:-mx-8"
            >
              <div className="flex flex-col lg:w-1/3 mb-6 lg:mb-0">
                <span className="text-xs text-current opacity-70 mb-2 font-bold">{project.year}</span>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="lg:w-1/3 flex flex-col gap-4">
                <p className="text-sm md:text-lg font-medium leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 border border-current text-xs font-bold uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/4 flex gap-6 mt-8 lg:mt-0 justify-end w-full">
                {project.status ? (
                  <span className="text-sm font-bold uppercase tracking-widest text-[#888] flex items-center gap-2 bg-[#111] group-hover:bg-[#f0ece5] px-4 py-2 rounded-full border border-[#333] group-hover:border-[#ccc] transition-colors">
                    {project.status}
                  </span>
                ) : (
                  <>
                    {project.github && project.github !== '#' && (
                      <a href={project.github} className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-current transition-colors flex items-center gap-2">
                        <GitBranch size={16} /> Code
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} className="text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-current transition-colors flex items-center gap-2">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
