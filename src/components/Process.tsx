"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowDoodle, StarDoodle, UnderlineDoodle, SquiggleDoodle } from "@/components/Doodles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We map your operational workflows, isolate manual bottlenecks, and identify the highest-ROI automation opportunities.",
    bg: "bg-[#d0c3ff]", // Lavender
  },
  {
    number: "02",
    title: "ARCHITECT",
    description: "We design robust systems, selecting the precise LLMs, vector databases, and APIs required to build a scalable solution.",
    bg: "bg-[#fceba7]", // Yellow
  },
  {
    number: "03",
    title: "ENGINEER",
    description: "Our developers construct your RAG pipelines and autonomous agents with secure, enterprise-grade infrastructure.",
    bg: "bg-[#ffb3ba]", // Pink
  },
  {
    number: "04",
    title: "SCALE",
    description: "Deployment is day zero. We monitor agent accuracy, optimize latency, and ensure your system scales flawlessly.",
    bg: "bg-[#e8efd8]", // Green
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Crazy chaotic parallax!
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        // Drastic alternating speed offsets
        // Even indices move UP while scrolling down
        // Odd indices move DOWN while scrolling down
        const speeds = [400, -300, 600, -450]; 
        
        gsap.fromTo(card,
          { y: speeds[i] },
          {
            y: -speeds[i],
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 px-4 md:px-8 bg-transparent overflow-hidden border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-40 relative z-10 mt-20">
          <StarDoodle className="absolute -top-10 -left-10 w-24 h-24 text-black rotate-12" />
          <SquiggleDoodle className="absolute bottom-0 -right-10 w-32 h-16 text-brand-orange -rotate-12" />
          
          <div className="inline-block px-6 py-2 border-4 border-black bg-[#a3bfff] rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            The Playbook
          </div>
          <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter text-black uppercase relative">
            How We <span className="relative inline-block text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] italic font-serif">Win.</span>
            <UnderlineDoodle className="absolute -bottom-4 left-0 w-full h-4 text-black" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-20">
          {steps.map((step, i) => (
            <div 
              key={step.number}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`${step.bg} relative p-8 md:p-10 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-[450px]`}
            >
              <div>
                <span className="inline-block px-4 py-1 border-2 border-black bg-white rounded-full font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-8">
                  {step.number}
                </span>
                <h3 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-lg font-medium text-black/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="absolute bottom-8 right-8">
                <ArrowDoodle className="w-12 h-12 text-black opacity-40 -rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
