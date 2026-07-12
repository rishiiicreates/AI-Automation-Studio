"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "Automated Reporting Decision System",
      category: "Agentic AI / Strategy",
      metrics: "32 hrs/wk saved | $120k cost reduction",
      image: "/portfolio_rag_vector.jpg",
      color: "from-[#a3bfff]/70"
    },
    {
      title: "Kababi Cafe Customer Support Agent",
      category: "Web App / Infrastructure",
      metrics: "85% ticket deflection | 3x faster resolution",
      image: "/portfolio_chat_vector.jpg",
      color: "from-[#d0c3ff]/70"
    },
    {
      title: "Data Analytics Pipeline",
      category: "Data Pipeline / Search",
      metrics: "120s to 3s query time | 40% revenue impact",
      image: "/portfolio_data_vector.jpg",
      color: "from-[#fceba7]/70"
    }
  ];
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!projectsRef.current || !containerRef.current) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom", 
          scrub: 1,
        }
      });
      
      const cards = gsap.utils.toArray(".project-card");
      
      cards.forEach((card: any, i) => {
        // 1. Zoom in to cover the screen
        tl.to(card, {
          width: "100vw",
          maxWidth: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          borderRadius: 0,
          duration: 1,
          ease: "none"
        });
        
        // Hold for a moment to let the user see it
        tl.to({}, { duration: 0.3 });
        
        // 2. Zoom out and slide to next (or just zoom out if it's the last one)
        if (i < cards.length - 1) {
          // Slide the container
          tl.to(projectsRef.current, {
            x: `-${(i + 1) * 100}vw`,
            duration: 1,
            ease: "none"
          }, `slide-${i}`);
          
          // Simultaneously zoom out the current card
          tl.to(card, {
            width: "85vw",
            maxWidth: "72rem",
            height: "70vh",
            maxHeight: "70vh",
            borderRadius: "2.5rem",
            duration: 1,
            ease: "none"
          }, `slide-${i}`);
        } else {
          // Last card zooms out before leaving the section
          tl.to(card, {
            width: "85vw",
            maxWidth: "72rem",
            height: "70vh",
            maxHeight: "70vh",
            borderRadius: "2.5rem",
            duration: 1,
            ease: "none"
          });
        }
      });
      
      // Removed image parallax to prevent extreme cropping/zooming
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-transparent text-black relative" style={{ height: `${projects.length * 250}vh` }}>
      {/* Sticky container completely replaces GSAP's pin functionality */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none text-black">
          <h2 className="text-xl md:text-2xl font-medium tracking-tight pointer-events-auto text-black">
            Selected <span className="font-serif italic text-black/70">Works</span>
          </h2>
        </div>
        
        <div className="absolute top-12 right-6 md:right-12 z-20 pointer-events-none text-black">
          <MagneticButton>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] border-b border-black/30 pb-1 cursor-pointer pointer-events-auto hover:border-black transition-colors text-black">
              View All Projects
            </div>
          </MagneticButton>
        </div>
        
        <div ref={projectsRef} className="flex h-full items-center" style={{ width: `${projects.length * 100}vw`, willChange: "transform" }}>
          {projects.map((project, index) => (
            <div key={index} className="project-panel w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center relative">
              <div 
                className="project-card w-[85vw] max-w-6xl h-[70vh] max-h-[70vh] overflow-hidden rounded-[2.5rem] relative group cursor-pointer magnetic border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform-gpu"
                style={{ willChange: "width, height, transform" }}
              >
                
                {/* Paper Texture Overlay */}
                <div className="css-paper-texture rounded-inherit opacity-[0.2] z-30 pointer-events-none mix-blend-overlay" />
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[inherit]`} />
                
                {/* Perfect Fit Image */}
                <div className="project-image-inner w-full h-full absolute top-0 left-0 bg-[#0d1117] flex items-center justify-center overflow-hidden rounded-[inherit]"
                     style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl transform-gpu"
                    style={{ willChange: "transform" }}
                  />
                </div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                  <p className="text-black/80 font-mono text-sm tracking-widest uppercase mb-4">{project.category}</p>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl text-black font-medium tracking-tight max-w-3xl leading-tight mb-6">
                    {project.title}
                  </h3>
                  {project.metrics && (
                    <div className="inline-block px-4 py-2 border-2 border-black bg-white rounded-full font-bold text-sm tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {project.metrics}
                    </div>
                  )}
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
