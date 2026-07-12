"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CircleDoodle, StarDoodle, ArrowDoodle } from "@/components/Doodles";
import CallToAction from "@/components/CallToAction";
import BackgroundStoryServices from "@/components/BackgroundStoryServices";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceDetails = [
  {
    title: "Workflow\nAutomation",
    description: "We design and ship automation systems that remove manual work from your ops — n8n/Zapier-class pipelines, API integrations, internal tooling, event-driven backends.",
    highlights: ["Process audits & automation mapping", "Custom n8n/workflow builds", "API integrations (CRM, payments, comms)", "Internal dashboards & tooling"],
    bg: "bg-[#e8efd8]",
    image: "/automation.svg",
  },
  {
    title: "Agentic AI\nSystems",
    description: "We build multi-agent systems that do real work — research, triage, content generation, customer support. Orchestration, tool-calling, memory, self-improving loops.",
    highlights: ["Multi-agent architecture design", "LLM orchestration (OpenRouter/Claude/local)", "RAG & retrieval pipelines", "Agent memory & context systems"],
    bg: "bg-[#a3bfff]",
    image: "/agentic_ai.svg",
  },
  {
    title: "Web\nDevelopment",
    description: "Fast, custom-built websites and web apps. React/Next.js, real backends, no page-builder bloat.",
    highlights: ["Custom React/Next.js builds", "API & backend architecture", "Performance-first frontend", "Headless CMS integration where useful"],
    bg: "bg-[#d0c3ff]",
    image: "/Web_Development.svg",
  },
  {
    title: "App\nDevelopment",
    description: "Native and cross-platform apps built for retention, not just launch.",
    highlights: ["React Native / Expo builds", "iOS & Android native", "Real-time features (sockets, push)", "App store readiness"],
    bg: "bg-[#baffc9]",
    image: "/Mobile_app.svg",
  },
  {
    title: "AI Chat &\nSupport Agents",
    description: "Customer-facing chat agents grounded in your actual data, not generic wrappers.",
    highlights: ["Backend proxy architecture (keys server-side)", "Custom knowledge base / RAG", "Multi-provider LLM fallback", "Conversation analytics"],
    bg: "bg-[#ffdfba]",
    image: "/chat_support.svg",
  },
  {
    title: "Data & Backend\nInfrastructure",
    description: "The infrastructure that makes everything above reliable.",
    highlights: ["PostgreSQL/PostGIS data modeling", "Redis, queues, job systems (BullMQ)", "Third-party integrations", "Scale-hardening & production audits"],
    bg: "bg-[#ffb3ba]",
    image: "/data_and_backend_infra.svg",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pronounced Parallax Effect on Cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Drastic staggered speeds for a strong parallax effect
        const speeds = [150, 400, 200, 500];
        const speed = speeds[index % 4];
        
        gsap.fromTo(card, 
          { y: speed },
          {
            y: -speed,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: card.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      });

      // Refresh ScrollTrigger after a short delay to account for image loads and layout shifts
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-black overflow-hidden relative pb-40">
      <BackgroundStoryServices />
      <div className="css-paper-texture fixed inset-0 pointer-events-none z-50" />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 md:px-12 border-b-4 border-black bg-[#ffb3ba]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-10 mt-10">
          <div className="relative z-10">
            <div className="inline-block px-6 py-2 border-4 border-black bg-white rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10">
              Services
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-black">
              WHAT WE <br />
              <span className="font-serif italic font-light relative text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                OFFER.
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-medium max-w-md bg-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-4">
            Comprehensive automation solutions built on resilient architecture and agentic AI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-32 px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {serviceDetails.map((service, i) => (
            <div key={service.title} className="relative w-full h-full">
              <div 
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`${service.bg} relative p-10 md:p-14 rounded-[3rem] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[500px] z-10 hover:z-20 transition-z duration-300 h-full will-change-transform`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8 gap-4">
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <span className="inline-block px-4 py-1 border-2 border-black bg-white rounded-full font-bold text-xs">
                        0{i + 1}
                      </span>
                      <h2 className="font-sans font-bold text-4xl md:text-5xl text-black leading-tight whitespace-pre-line">
                        {service.title}
                      </h2>
                    </div>
                    <img src={service.image} alt={service.title} className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-md shrink-0" />
                  </div>
                  <p className="font-sans text-lg font-medium text-black/80 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border-2 border-black">
                  <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">What's included</p>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm font-bold text-black">
                        <StarDoodle className="w-4 h-4 text-black flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
