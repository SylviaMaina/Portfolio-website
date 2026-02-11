"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Content fade in
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      // Skills stagger
      gsap.from(skillsRef.current?.children || [], {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)",
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Quasar",
    "GSAP",
    "Responsive Design",
    "Performance Optimization",
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-display text-charcoal mb-12"
        >
          About Me
        </h2>

        <div
          ref={contentRef}
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-sage/20 shadow-lg mb-12"
        >
          <p className="text-lg md:text-xl font-body text-forest leading-relaxed mb-6">
            I'm a frontend developer who loves turning ideas into beautiful,
            functional web experiences. My passion lies in creating interfaces
            that not only look great but feel intuitive and performant.
          </p>
          <p className="text-lg md:text-xl font-body text-forest leading-relaxed">
            With expertise in modern React ecosystems, I specialize in building
            scalable applications that delight users and solve real problems.
            When I'm not coding, you'll find me watching a good series or movie or nose deep in a book.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-display text-charcoal mb-6">
            Technologies I Love
          </h3>
          <div ref={skillsRef} className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-peach text-charcoal rounded-full font-body font-medium text-base border-2 border-coral/30 hover:scale-110 transition-transform duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
