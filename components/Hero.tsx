'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for title
      if (titleRef.current) {
        const chars = titleRef.current.textContent?.split('') || []
        titleRef.current.textContent = ''
        
        chars.forEach((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          titleRef.current?.appendChild(span)
        })

        gsap.to(titleRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.2)',
          delay: 0.5,
        })
      }

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.2,
        ease: 'power2.out',
      })

      // CTA buttons
      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
      })

      // Parallax scroll effect
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
          y: 50,
          opacity: 0.5,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl  min-h-[35rem] mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl max-lg:text-5xl font-display text-charcoal mb-6"
        >
          Frontend Magic
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-body text-forest mb-12 max-w-2xl mx-auto"
        >
          Crafting delightful web experiences with React, Next.js, and a sprinkle of creativity
        </p>

        <div ref={ctaRef} className="flex gap-6 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 bg-coral text-cream rounded-full font-body font-medium text-lg hover:bg-forest transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full font-body font-medium text-lg hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-48 flex justify-center animate-bounce text-4xl">
  <span>↓</span>
</div>

      </div>
    </section>
  )
}
