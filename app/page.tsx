import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-background text-foreground">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </main>
  )
}
