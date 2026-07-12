"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Precission Arc",
    category: "Agentic AI · RAG",
    slug: "precission-arc",
    // Placeholder — use a dark mockup with tech feel
    imageUrl: "/portfolio_rag_vector.jpg",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Decision Agency",
    category: "Web Dev · App Dev",
    slug: "decision-agency",
    imageUrl: "/portfolio_webdev_vector.jpg",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Depower EV",
    category: "Data & Backend",
    slug: "depower-ev",
    imageUrl: "/portfolio_data_vector.jpg",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Vitour Agency",
    category: "Workflow Automation",
    slug: "vitour-agency",
    imageUrl: "/n8n-workflow.png",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Kababi Cafe",
    category: "AI Chat Agents",
    slug: "kababi-cafe",
    imageUrl: "/portfolio_chat_vector.jpg",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Sword Club",
    category: "Agentic AI · Data Infra",
    slug: "sword-club",
    imageUrl: "/portfolio_datainfra_vector.jpg",
    aspect: "aspect-[5/3]",
  },
];

const toolLogos = [
  "Next.js",
  "Python",
  "OpenAI",
  "LangChain",
  "Temporal",
  "Supabase",
  "Vercel",
  "n8n",
  "Pinecone",
  "AWS",
];

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Much more aggressive speeds for extreme parallax
      const speeds = [120, 180, 150, 200, 140, 170]; 
      
      imagesRef.current.forEach((imgWrapper, index) => {
        if (!imgWrapper) return;
        
        const speed = speeds[index % speeds.length];
        
        gsap.fromTo(
          imgWrapper,
          { y: speed },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: imgWrapper.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative section-padding bg-white"
      id="portfolio"
      aria-label="Portfolio"
    >
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="flex items-end justify-between mb-12 lg:mb-16 flex-wrap gap-6">
          <div>
            <p className="text-label font-sans uppercase tracking-widest text-black/60 mb-4">
              Our Work
            </p>
            <h2 className="font-display text-display-lg font-light text-black leading-tight">
              Check Out Our Portfolio!
            </h2>
          </div>
          <Link
            href="/#portfolio"
            className="text-label-lg font-sans uppercase tracking-widest text-black/50 hover:text-black link-underline transition-colors duration-300 cursor-none"
          >
            View all projects
          </Link>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map(({ title, category, imageUrl, aspect, slug }, i) => (
            <ScrollReveal key={slug} delay={i * 0.06}>
              <Link
                href={`/portfolio/${slug}`}
                className="group block relative overflow-hidden cursor-none"
                aria-label={`View project: ${title}`}
              >
                {/* Image */}
                <div className={`relative ${aspect} overflow-hidden rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 transition-all duration-300 bg-[#0d1117] flex items-center justify-center`}>
                  
                  {/* Parallax Wrapper - extra tall to accommodate the aggressive y movement */}
                  <div 
                    ref={(el) => {
                      imagesRef.current[i] = el;
                    }}
                    className="absolute -top-[50%] -bottom-[50%] left-0 right-0 w-full h-[200%]"
                  >
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                  {/* View Project pill — appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                    <span className="flex items-center gap-2 border-2 border-black text-black text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      View Project
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="pt-6 pb-2 flex justify-between items-baseline">
                  <h3 className="font-display text-xl font-bold text-black tracking-wide uppercase">
                    {title}
                  </h3>
                  <span className="text-[0.65rem] font-bold text-black/60 tracking-widest uppercase border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-[#fceba7]">
                    {category}
                  </span>
                </div>
                {/* Bottom line */}
                <div className="h-1 bg-black w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-2" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Powered-by tool marquee */}
        <div className="mt-20 pt-10 border-t border-black/10">
          <p className="text-label font-sans uppercase tracking-widest text-black/40 mb-6">
            Powered by
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <Marquee speed={30} direction="right" pauseOnHover>
              {toolLogos.map((tool) => (
                <span
                  key={tool}
                  className="mx-10 text-label-lg font-sans uppercase tracking-widest text-black/30 hover:text-black/70 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

