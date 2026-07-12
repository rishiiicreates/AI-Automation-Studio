"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowDoodle, StarDoodle, CircleDoodle, SquiggleDoodle, UnderlineDoodle } from "@/components/Doodles";
import CallToAction from "@/components/CallToAction";
import BackgroundStoryPortfolio from "@/components/BackgroundStoryPortfolio";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Precission Arc",
    category: "Agentic AI · RAG",
    year: "2024",
    image: "/portfolio_rag_vector.jpg",
    bg: "bg-[#fceba7]",
  },
  {
    title: "Decision Agency",
    category: "Web Dev · App Dev",
    year: "2024",
    image: "/portfolio_webdev_vector.jpg",
    bg: "bg-[#a3bfff]",
  },
  {
    title: "Depower EV",
    category: "Data & Backend",
    year: "2023",
    image: "/portfolio_data_vector.jpg",
    bg: "bg-[#ffb3ba]",
  },
  {
    title: "Workflow Automation for E-commerce",
    category: "Workflow Automation",
    year: "2023",
    image: "/n8n-workflow.png",
    bg: "bg-[#e8efd8]",
  },
  {
    title: "Kababi Cafe",
    category: "AI Chat Agents",
    year: "2022",
    image: "/portfolio_chat_vector.jpg",
    bg: "bg-[#fceba7]",
  },
  {
    title: "Sword Club",
    category: "Agentic AI · Data Infra",
    year: "2022",
    image: "/portfolio_datainfra_vector.jpg",
    bg: "bg-[#a3bfff]",
  }
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const speeds = [30, 50, 25, 45]; // Normal rate
      
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        // Different speeds for different images to create varied depth
        const speed = speeds[index % speeds.length];
        
        gsap.fromTo(img, 
          { y: speed },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
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
    <div ref={containerRef} className="min-h-screen text-black overflow-hidden relative pb-40">
      <BackgroundStoryPortfolio />
      <div className="css-paper-texture fixed inset-0 pointer-events-none z-50" />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 md:px-12 border-b-4 border-black bg-[#e8efd8]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-10 mt-10 relative">
          <SquiggleDoodle className="absolute top-0 left-10 w-24 h-12 text-black opacity-30 rotate-[30deg]" />
          <ArrowDoodle className="absolute bottom-10 right-20 w-16 h-16 text-brand-orange rotate-[45deg]" />
          
          <div className="relative z-10">
            <div className="inline-block px-6 py-2 border-4 border-black bg-white rounded-full font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10">
              Selected Work
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-black">
              PORT<span className="font-serif italic font-light relative text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">FOLIO.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pt-32 px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <div key={project.title} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className={`${project.bg} relative p-6 md:p-8 rounded-[3rem] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300`}>
                <div className="relative aspect-[5/3] w-full overflow-hidden rounded-[2rem] border-4 border-black bg-[#0d1117]">
                  <div className="absolute -top-[15%] -bottom-[15%] left-0 right-0 w-full h-[130%]">
                    <img
                      ref={(el) => {
                        imagesRef.current[i] = el;
                      }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-end mt-8">
                  <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-2 relative inline-block">
                      {project.title}
                      <UnderlineDoodle className="absolute -bottom-2 left-0 w-full h-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/60">{project.category}</p>
                  </div>
                  <div className="inline-block px-4 py-1 border-2 border-black bg-white rounded-full font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
