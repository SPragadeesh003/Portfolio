'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      title: 'React Native Developer Intern',
      company: 'TheBrandopedia',
      period: 'Jul 2025 - Feb 2026',
      description: [
        'Contributed to 4 production Android apps, delivering pixel-perfect React Native screens from Figma designs with 100% visual accuracy across all device sizes',
        'Integrated 50+ REST API endpoints via Axios and engineered real-time data synchronization using Firebase onSnapshot with dynamic location services via react-native-maps',
        'Built a reusable media capture and upload module handling audio, image, and video with Base64 conversions and FormData requests',
        'Architected offline-first systems with WatermelonDB and conflict-resolution, syncing verified data to Supabase with zero data loss',
        'Authored custom Java modules for advanced device-level features including Google Nearby Connections for P2P mesh sync',
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Supabase', 'TypeScript', 'Java'],
    },
    {
      title: 'CRM Administrator & IIoT Intern',
      company: 'TI Cycles of India (Murugappa)',
      period: 'Sep 2023 - Nov 2023',
      description: [
        'Customized Zoho incident reporting forms with automated SLAs and master data mapping across 3+ departments',
        'Engineered a Flask-based Python application monitoring 20+ network device IP statuses in real-time with historical CSV data storage',
        'Designed and deployed custom web interface for real-time network monitoring and analytics',
      ],
      technologies: ['Zoho CRM', 'Python', 'Flask', 'Networking'],
    },
  ]

  return (
    <section id="experience" className="w-full bg text-white">
      <div className="px-4 md:px-10 lg:px-20 py-20 border-b border-[#333]">
        <div className="flex gap-4 mb-20 items-end">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Experience</h2>
        </div>

        <div className="flex flex-col border-t border-[#333]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col lg:flex-row py-12 lg:py-20 border-b border-[#333] hover:bg-[#FBF6EE] hover:text-[#111111] transition-all duration-300 px-4 lg:px-8 -mx-4 lg:-mx-8 cursor-default"
            >
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <span className="text-xs font-bold tracking-widest uppercase opacity-70">{exp.period}</span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mt-2">{exp.company}</h3>
                <h4 className="text-sm font-bold uppercase tracking-widest mt-4">{exp.title}</h4>
              </div>

              <div className="lg:w-2/3">
                <ul className="flex flex-col gap-4 text-sm md:text-lg leading-relaxed max-w-3xl mb-8">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-bold flex-shrink-0 mt-1">∴</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-current text-xs font-bold uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
