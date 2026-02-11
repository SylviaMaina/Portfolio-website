'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  gradient: string
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Project cards stagger
      gsap.from(projectsRef.current?.children || [], {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const projects: Project[] = [
    {
      title: 'Business profile',
      description: 'A mordern travel agency website with a platform for the client to update content to the website',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      link: '/projects/business-profile',
      gradient: 'from-sage to-forest',
    },
    {
      title: 'Social App',
      description: 'Interactive social app set up specifically for wowen to have a platform to talk about topics they may be afraid to publicly.',
      tech: ['VUE', 'Quasar', 'TypeScript','MongoDB', 'ExpressJS'],
      link: '/projects/social-app',
      gradient: 'from-coral to-peach',
    },
    {
      title: 'Food delivery platform',
      description: 'A multi-interface food delivery platform that is set for the entire journey of food fromm client order to rider delivery.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Quasar'],
      link: '/projects/food-delivery',
      gradient: 'from-peach to-sage',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-display text-charcoal mb-16 text-right"
        >
          Featured Work
        </h2>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      gsap.to(card, {
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
        duration: 0.3,
      })
    }

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-card group relative bg-gradient-to-br ${project.gradient} rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-white/50`}
      style={{ 
        '--mouse-x': '0px', 
        '--mouse-y': '0px' 
      } as React.CSSProperties}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent)`,
        }}
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-display text-charcoal mb-3">
          {project.title}
        </h3>
        
        <p className="text-base font-body text-forest mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-body font-medium px-3 py-1 bg-white/50 text-charcoal rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-charcoal font-body font-semibold hover:gap-4 transition-all duration-300"
        >
          View Project
          <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  )
}
