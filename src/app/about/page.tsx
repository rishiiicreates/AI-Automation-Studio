"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowDoodle, StarDoodle, CircleDoodle, SquiggleDoodle } from "@/components/Doodles";
import CallToAction from "@/components/CallToAction";
import BackgroundStoryAbout from "@/components/BackgroundStoryAbout";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Drastic Parallax Effect on Images
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        const speed = index % 2 === 0 ? 300 : 500;
        
        gsap.fromTo(img, 
          { y: speed },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-black overflow-hidden relative">
      <BackgroundStoryAbout />
      <div className="css-paper-texture fixed inset-0 pointer-events-none z-50" />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 px-6 md:px-12 bg-[#a3bfff] border-b-4 border-black">
        <StarDoodle className="absolute top-40 left-10 md:left-32 w-16 h-16 text-black opacity-80 rotate-12" />
        <CircleDoodle className="absolute bottom-20 right-10 md:right-32 w-24 h-24 text-white opacity-50" />
        <SquiggleDoodle className="absolute top-1/3 right-1/4 w-32 h-16 text-black opacity-30 rotate-[30deg]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
          <div className="inline-block px-6 py-2 border-4 border-black bg-white rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10">
            Who We Are
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-black">
            THE DIGITAL <br />
            <span className="font-serif italic font-light relative text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              VANGUARD.
            </span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
          <div className="order-2 md:order-1 relative z-10 bg-[#fceba7] p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-black mb-8 leading-tight">
              Automation is empty without <br/><span className="font-serif italic text-brand-blue">architecture.</span>
            </h2>
            <p className="font-sans text-xl text-black/80 leading-[1.8] font-medium">
              Most studios deploy AI as a gimmick. Others build rigid workflows that break at scale. We build autonomous systems and scalable infrastructure that reduce operational drag. Software should run your business, not the other way around.
            </p>
            <ArrowDoodle className="absolute -bottom-10 -right-10 w-24 h-24 text-brand-orange rotate-[120deg]" />
          </div>
          
          <div className="order-1 md:order-2 h-[60vh] md:h-[80vh] relative w-full overflow-hidden rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-200">
             <img 
              ref={(el) => { imagesRef.current[0] = el; }}
              src="/ill_data.jpg" 
              alt="Strategy visual" 
              className="absolute top-[-50%] left-0 w-full h-[200%] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="h-[60vh] md:h-[80vh] relative w-full overflow-hidden rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-200">
             <img 
              ref={(el) => { imagesRef.current[1] = el; }}
              src="/ill_automation.jpg" 
              alt="Execution visual" 
              className="absolute top-[-50%] left-0 w-full h-[200%] object-cover"
            />
          </div>
          
          <div className="relative z-10 bg-[#d0c3ff] p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-black mb-8 leading-tight">
              The <span className="font-serif italic text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Approach.</span>
            </h2>
            <p className="font-sans text-xl text-black/80 leading-[1.8] font-medium">
              We don't do bloated scopes. We operate with intense focus. We embed ourselves with your engineering and operations teams, audit your workflows, and architect a path forward using LLMs, agentic systems, and custom backend infrastructure.
            </p>
            <StarDoodle className="absolute -top-10 -left-10 w-24 h-24 text-black rotate-[-15deg]" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-40 mb-40">
          <div className="order-2 md:order-1 relative z-10 bg-[#a3bfff] p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-black mb-8 leading-tight">
              Driven by <br/><span className="font-serif italic text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Systems.</span>
            </h2>
            <p className="font-sans text-xl text-black/80 leading-[1.8] font-medium">
              We replace manual repetition with programmatic systems. Every workflow, data pipeline, and LLM prompt is engineered to handle edge cases, reduce latency, and scale without human intervention.
            </p>
            <CircleDoodle className="absolute -top-12 right-10 w-20 h-20 text-brand-yellow opacity-80 rotate-[45deg]" />
          </div>
          
          <div className="order-1 md:order-2 h-[60vh] md:h-[80vh] relative w-full overflow-hidden rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-200">
             <img 
              ref={(el) => { imagesRef.current[2] = el; }}
              src="/ill_web.jpg" 
              alt="Data visual" 
              className="absolute top-[-50%] left-0 w-full h-[200%] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="h-[60vh] md:h-[80vh] relative w-full overflow-hidden rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-200">
             <img 
              ref={(el) => { imagesRef.current[3] = el; }}
              src="/ill_ai.jpg" 
              alt="Execution visual" 
              className="absolute top-[-50%] left-0 w-full h-[200%] object-cover"
            />
          </div>
          
          <div className="relative z-10 bg-[#ffb3c6] p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-sans font-bold text-4xl md:text-6xl text-black mb-8 leading-tight">
              Relentless <br/><span className="font-serif italic text-brand-orange drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Execution.</span>
            </h2>
            <p className="font-sans text-xl text-black/80 leading-[1.8] font-medium">
              Prototypes are cheap. The magic happens in production. We build robust, scalable architectures with fanatical attention to detail, ensuring your agentic systems and applications remain stable under enterprise workloads.
            </p>
            <SquiggleDoodle className="absolute -bottom-8 -left-8 w-24 h-12 text-brand-blue rotate-[-15deg]" />
          </div>
        </div>
      </section>
    </div>
  );
}
