'use client'

import { Mail, Link, GitBranch, Share2 } from 'lucide-react'

export function Contact() {


  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/SPragadeesh003', label: 'GitHub' },
    { icon: Link, href: 'https://linkedin.com/in/pragadeesh-s-81bb60238', label: 'LinkedIn' },
    { icon: Share2, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:pragadeeshvit2021@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground text-lg">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="space-y-8 w-full max-w-lg">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:pragadeeshvit2021@gmail.com" className="text-primary hover:underline font-medium">
                    pragadeeshvit2021@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+918825654292" className="text-primary hover:underline font-medium">
                    +91 88256 54292
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Chennai, India</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <Icon size={20} />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6">
              <p className="text-sm font-medium text-foreground">
                💡 Open to freelance projects, full-time opportunities, and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
