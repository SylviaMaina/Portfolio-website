"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// This would typically come from a database or CMS
const projectsData: Record<string, ProjectDetail> = {
  "business-profile": {
    title: "Business Profile",
    tagline: "Redefining how content is showcased",
    heroImage: "/hero.jpeg",
    description:
      "A comprehensive business profile solution built for modern consumers. This platform combines sleek design with powerful functionality, featuring real-time content and a CMS platform for the client to independently add content to the website easily.",
    problem:
      "I had to find a way to incorporate a platform for the client to add content to the website since it would be a fast-paced platform with changes being made to the content regularily.The client also needed the user to be able to send booking requests to their email with as much information about the booking as possible to prevent back and forth between the agency and the user and fasten the booking process.",
    solution:
      "I decided to use Sanity CMS as it came with a very user friendly platform that the client can easily be tutored and use daily. Collaborated with a talented UX/UI designer to come up with a design that was both minimal, inviting, easy to use and intuitive. The end result was something magical",
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Sanity CMS", icon: "🖥️" },
      { name: "Framer motion", icon: "🗄️" },
    ],
    features: [
      "Real-time content management",
      "Easy to use booking process",
      "Smart product recommendations",
      "Advanced search and filtering",
      "Responsive design for all devices",
    ],
    screenshots: ["/bphero.jpeg", "/booking.png", "/sanity.jpeg"],
    challenges: [
      {
        title: "Sanity Integration",
        description:
          "Coming up with the schema that clearly aligns with the client`aesop`s requirements did take time and patience and was a learning curve to ensure that the content uploaded correctly",
      },
      {
        title: "The booking process",
        description:
          "We had to reference nad research other travel agencies to ensure that we got the booking process right and ensuring that all the information required as input without making the process tiring and repetitive to the user",
      },
      {
        title: "Filtering and grouping",
        description:
          "There are repetitions in terms of destinations and countries and the design was intricate in ensuring that wherever the client was coming from, the flow was not confusing to them and they were able to find what they needed with ease.",
      },
    ],
    learnings: [
      "Server-side rendering dramatically improves SEO and initial load time",
      "Creation of a CMS platform using Sanity.io",
      "Responsive design that showases the clients features effectively.",
      "A smooth booking process for the user.",
    ],
    liveUrl: "https://amki.netlify.app/",
    githubUrl: "https://github.com/SylviaMaina/Amki",
    gradient: "from-sage to-forest",
  },
  "social-app": {
    title: "Social App",
    tagline: "Data visualization made beautiful",
    heroImage: "/orusahero.png",
    description:
      "An interactive social app that gave menopausal women the platform to interact and find community going through something that affects women silently.",
    problem:
      "I was picking up the project from a previous developer and tasked to continue to completion and improve the design with a limited time period.",
    solution:
      "Collaborated with a UX designer to come up with a sleeker design that had all the features the client wanted.",
    techStack: [
      { name: "Quasar", icon: "🌟" },
      { name: "TypeScript", icon: "📘" },
      { name: "Chart.js", icon: "📊" },
      { name: "Express.js", icon: "🔌" },
      { name: "MongoDB", icon: "🟢" },
    ],
    features: [
      "Real-time data update",
      "Interactive input platforms",
      "Ability to switch languages",
      "Secure login and signup of users",
      "Dark mode support",
    ],
    screenshots: ["/Logs.png", "/Insights.png", "/Language.png"],
    challenges: [
      {
        title: "Real-time Performance",
        description:
          "Data was not being updated real-time when a user uploaded a story, used web sockets to ensure that they did without refresh.",
      },
      {
        title: "Language switch",
        description:
          "Initially i was not aware of how to go about switching the languages but was able to set it up with the use of i18.",
      },
      {
        title: "Persistent login",
        description:
          "The client requiered the user to stay logged in to the app even if they restarted their machine.",
      },
    ],
    learnings: [
      "Created an app using Quasar-capacitor that was able to be deployed to the playstore",
      "WebSocket connections need proper error handling and reconnection logic",
      "persistent login integration allowed users to stay logged in",
      "Notification integration using firebase",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.orusa.app",
    githubUrl: "https://github.com/SylviaMaina/Rusabackup",
    gradient: "from-sage to-forest",
  },
  "food-delivery": {
    title: "Food Delivery",
    tagline: "Multi-interface food delivery platform",
    heroImage:
      "/food.jpeg",
    description:
      'A multi-interface food delivery platform that is set for the entire journey of food fromm client order to rider delivery.',
    problem:
      "The creation of a client, cook, driver, and admin platform all interconnected to allow te delivery of food.",
    solution:
      "Developed an intricate multi-interface platform with a driver app allowing them to deliver the orders.",
    techStack: [
      { name: "React.js", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Quasar", icon: "🎬" },
    ],
    features: [
      "Multi-interface platform",
      "geo-location integration",
      "API Integration",
      "Responsive on all devices",
   
    ],
    screenshots: [
      "/checkout.jpeg",
      "/location.jpeg",
      "/orders.jpeg",
    ],
    challenges: [
      {
        title: "Multi-interface setup",
        description:
          "The complex nature of the project had some issues especially on routing and separate authentication especially because the project was all on one repository.",
      },
      {
        title: "Authentification",
        description:
          "Coming up with a way to ensure that all the different interfaces have different authorization platforms as well as corresponding protected routes.",
      },
    ],
    learnings: [
      "Good UX is about hiding complexity, not removing features",
      "Use of reusable components and the single responsibility principle helped alot in the organization of the project",
      "Intricate use of react router dom",
    ],
    liveUrl: "https://beta.lantern-foods.com/",
    githubUrl: "",
    gradient: "from-peach to-sage",
  },
};

interface Tech {
  name: string;
  icon: string;
}

interface Challenge {
  title: string;
  description: string;
}

interface ProjectDetail {
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  problem: string;
  solution: string;
  techStack: Tech[];
  features: string[];
  screenshots: string[];
  challenges: Challenge[];
  learnings: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectsData[slug];

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page enter animation
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Scroll-triggered animations for sections
      const sections = contentRef.current?.querySelectorAll(".animate-section");
      sections?.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-charcoal mb-4">
            Project not found
          </h1>
          <Link href="/" className="text-coral font-body hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sage/20 hover:bg-coral hover:text-cream transition-all duration-300 font-body font-medium shadow-lg"
        >
          <span className="text-xl">←</span>
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-display text-charcoal mb-6">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl font-body text-charcoal italic">
            {project.tagline}
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-charcoal text-cream rounded-full font-body font-medium hover:bg-forest transition-colors duration-300"
            >
              View Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full font-body font-medium hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View Code
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div ref={contentRef} className="max-w-5xl mx-auto px-6 py-20">
        {/* Overview */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-6">
            Overview
          </h2>
          <p className="text-xl font-body text-forest leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-coral/20">
              <h3 className="text-2xl font-display text-charcoal mb-4">
                The Problem
              </h3>
              <p className="font-body text-forest leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-sage/20">
              <h3 className="text-2xl font-display text-charcoal mb-4">
                The Solution
              </h3>
              <p className="font-body text-forest leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-peach/30 hover:scale-105 transition-transform duration-300 text-center"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-body font-medium text-charcoal text-sm">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/40 backdrop-blur-sm rounded-xl p-5 border border-sage/20"
              >
                <span className="text-coral text-xl mt-1">✓</span>
                <span className="font-body text-forest">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-8">
            Screenshots
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-8">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-coral/20"
              >
                <h3 className="text-2xl font-display text-charcoal mb-3">
                  {challenge.title}
                </h3>
                <p className="font-body text-forest leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="animate-section mb-20">
          <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-8">
            What I Learned
          </h2>
          <div className="bg-gradient-to-br from-peach/30 to-sage/30 rounded-2xl p-8 border border-white/50">
            <ul className="space-y-4">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="font-body text-forest text-lg leading-relaxed">
                    {learning}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section text-center py-12">
          <h2 className="text-4xl font-display text-charcoal mb-6">
            Want to see it in action?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-coral text-cream rounded-full font-body font-medium text-lg hover:bg-forest transition-colors duration-300 shadow-lg"
            >
              Visit Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full font-body font-medium text-lg hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Back to projects */}
        <div className="text-center pt-12 border-t border-sage/30">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-forest font-body text-lg hover:text-coral transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
