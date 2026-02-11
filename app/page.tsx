'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CustomCursor from '@/components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate floating blob
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        x: '+=100',
        y: '+=50',
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }

    // Refresh ScrollTrigger after layout changes
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='relative'>
    <div className='fixed w-full z-20'>
          <CustomCursor />
    </div>
  
      
      {/* Decorative blobs */}
      <div
        ref={blobRef}
        className="blob bg-peach"
        style={{
          width: '400px',
          height: '400px',
          top: '10%',
          right: '5%',
        }}
      />
      <div
        className="blob bg-sage"
        style={{
          width: '300px',
          height: '300px',
          bottom: '20%',
          left: '10%',
        }}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
