"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ParallaxElement from "@/components/ui/ParallaxElement";
import { SquiggleDoodle, StarDoodle, CircleDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const slogans = useMemo(() => [
    "Core Builds.", 
    "Agentic AI.", 
    "API Integrations.", 
    "Workflow Audits."
  ], []);
  
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const fullText = slogans[currentSloganIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
    } else {
      const timeoutSpeed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, timeoutSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentSloganIndex, slogans]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-transparent text-black pt-20">
      {/* Background Doodles */}
      <StarDoodle className="absolute top-32 left-10 md:left-24 w-12 h-12 text-[#0033CC] opacity-40 rotate-12" />
      <SquiggleDoodle className="absolute top-1/4 right-10 md:right-32 w-24 h-12 text-[#0033CC] opacity-30 -rotate-12" />
      <CircleDoodle className="absolute bottom-32 left-20 md:left-1/4 w-16 h-16 text-[#0033CC] opacity-40 rotate-[45deg]" />
      <StarDoodle className="absolute bottom-24 right-20 md:right-1/4 w-8 h-8 text-black opacity-30 -rotate-[20deg]" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* Left Column: Text Content */}
        <ParallaxElement speed={0.5} className="w-full lg:w-[45%] flex flex-col justify-center items-start z-10 pt-20 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.1] mb-8 text-black min-h-[3.3em]"
          >
            Crafting Digital<br />
            Experiences That Redefine<br />
            <span className="font-serif italic text-[#0033CC] inline-flex items-center">
              {currentText}
              <span className="w-[3px] h-[0.8em] bg-[#0033CC] ml-1 animate-[blink_1s_step-start_infinite]"></span>
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-black/70 max-w-[42ch] leading-relaxed">
              At Brokkrs, we build autonomous systems, RAG pipelines, and scalable web infrastructure that reduce operational drag.
            </p>
          </motion.div>
        </ParallaxElement>

        {/* Right Column: Image */}
        <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-end mt-16 lg:mt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full min-w-[500px] md:min-w-[600px] lg:min-w-[800px] max-w-[1000px] lg:-right-10 h-auto group"
          >
            {/* Animated glow behind image directly */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-[#fceba7]/20 blur-3xl z-0 scale-150 animate-pulse-slow rounded-full pointer-events-none" />
            
            <img 
              src="/about-us-team.svg"
              alt="About Us Team"
              className="relative z-10 w-full h-auto object-contain transition-transform duration-1000 ease-[0.16,1,0.3,1] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Rotating Badge Bottom Center */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center hidden md:flex z-20"
      >
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite]" style={{ animation: "spin 10s linear infinite" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-black/80 overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[10px] uppercase font-mono tracking-widest font-semibold fill-current">
                <textPath href="#circlePath" startOffset="0%">
                  Scroll Down • Scroll Down • Scroll Down •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="flex items-center justify-center text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="animate-[bounce_2s_infinite]" style={{ animation: "bounceDown 2s infinite" }}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes bounceDown {
              0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(6px); }
              60% { transform: translateY(3px); }
            }
            @keyframes blink {
              50% { opacity: 0; }
            }
          `}} />
        </div>
      </motion.div>

      {/* Mobile simple scroll hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:hidden z-20"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-mono">Scroll</div>
      </motion.div>
    </section>
  );
}
