'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)',
      })

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      })

      // Links stagger
      gsap.from(linksRef.current?.children || [], {
        scrollTrigger: {
          trigger: linksRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const contactLinks = [
    { name: 'Email', value: 'sylviamaina16@gmail.com', href: 'mailto:sylviamaina16@gmail.com' },
    { name: 'GitHub', value: 'github.com/sylviamaina', href: 'https://github.com/sylviamaina' },
    { name: 'LinkedIn', value: 'linkedin.com/in/sylvia-maina', href: 'https://www.linkedin.com/in/sylvia-maina-a2b956159/' },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-display text-charcoal mb-8"
        >
          Let's Create Together
        </h2>

        <p
          ref={contentRef}
          className="text-xl md:text-2xl font-body text-forest mb-16 max-w-2xl mx-auto"
        >
          Got a project in mind? I'd love to hear about it. 
          Let's build something amazing together!
        </p>

        <div
          ref={linksRef}
          className="flex flex-col gap-4 max-w-md mx-auto mb-16"
        >
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex justify-between items-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-sage/20 hover:bg-coral/30 transition-all duration-300 hover:scale-105"
            >
              <span className="font-body font-semibold text-charcoal">
                {link.name}
              </span>
              <span className="font-body text-forest group-hover:text-charcoal transition-colors">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        <div className="pt-12 border-t border-sage/30">
          <p className="font-body text-forest">
            © 2026 • Designed & Built using Next.js & GSAP
          </p>
        </div>
      </div>
    </section>
  )
}
