"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Focus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const shockwavesRef = useRef<(HTMLDivElement | null)[]>([]);
  const squishRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card 0 is already in place.
      // Card 1, 2, 3 start from above the viewport and fall down into place.
      const cards = cardsRef.current.filter(Boolean);
      
      // Set initial positions for cards 1, 2, 3 to be above the screen
      gsap.set(cards.slice(1), { y: () => -window.innerHeight - 500 });

      // Animate each card falling in sequence, triggered at different scroll depths
      cards.slice(1).forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${(i + 1) * 0.5 * window.innerHeight}px top`, // Reduced scroll gap so it triggers sooner
            toggleActions: "play none none reverse", // Play going down, reverse going up
          }
        });

        // 1. The card plummets down
        tl.to(card, {
          y: 0,
          duration: 0.5, // Real-time fast drop speed
          ease: "back.out(0.7)"
        }, 0); // Start at 0s

        // 2. The Squash Effect (Starts at 0.25s, right when the card physically hits the bottom)
        const previousSquishes = squishRefs.current.slice(0, i + 1);
        tl.fromTo(previousSquishes, 
          { y: 25, scaleY: 0.92, transformOrigin: "bottom center" },
          { y: 0, scaleY: 1, duration: 0.6, ease: "elastic.out(1, 0.3)", stagger: 0.02, immediateRender: false },
          0.25 // Time exactly to impact
        );

        // 3. Air shockwave effect (Starts at exactly 0.25s)
        const shockwave = shockwavesRef.current[i + 1];
        if (shockwave) {
          tl.fromTo(shockwave,
            { opacity: 0.6, scaleX: 0.5, scaleY: 0.5 },
            { opacity: 0, scaleX: 1.3, scaleY: 3, duration: 0.6, ease: "power2.out" },
            0.25 // Time exactly to impact
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-[300vh] relative z-10 bg-transparent">
      {/* Sticky wrapper that stays on screen while we scroll the 300vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-[1400px] mx-auto">
        
        {/* Left Column (Sticky Heading) */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center h-full pt-20 lg:pt-0">
          <div className="relative">
            <h2 className="text-6xl md:text-[5rem] font-sans font-medium leading-[1] text-black mb-8 tracking-tighter">
              What <br /> Sets Us <br /> Apart
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-sans max-w-sm leading-snug">
              We engineer autonomous systems that bridge the gap between manual operations and infinite scale.
            </p>
          </div>
        </div>
        
        {/* Right Column (Cards) */}
        <div className="w-full lg:w-2/3 relative h-full flex items-center">
          
          {/* Air Shockwaves */}
          <div ref={el => { shockwavesRef.current[1] = el; }} className="absolute left-1/2 top-[35vh] mt-[35px] -translate-x-1/2 w-[90%] h-[30px] rounded-[100%] bg-black/10 blur-md opacity-0 pointer-events-none z-0" />
          <div ref={el => { shockwavesRef.current[2] = el; }} className="absolute left-1/2 top-[35vh] mt-[70px] -translate-x-1/2 w-[90%] h-[30px] rounded-[100%] bg-black/10 blur-md opacity-0 pointer-events-none z-0" />
          <div ref={el => { shockwavesRef.current[3] = el; }} className="absolute left-1/2 top-[35vh] mt-[105px] -translate-x-1/2 w-[90%] h-[30px] rounded-[100%] bg-black/10 blur-md opacity-0 pointer-events-none z-0" />

          {/* Card 1: Research */}
          <div 
            ref={el => { cardsRef.current[0] = el; }}
            className="absolute w-full left-0 right-0 z-[1]"
            style={{ top: "35vh" }}
          >
            <div ref={el => { squishRefs.current[0] = el; }} className="w-full origin-bottom">
              <div className="wix-card w-full bg-[#e8efd8] p-8 md:p-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img src="/moderation-animation.svg" alt="Research" className="w-40 h-40 md:w-56 md:h-56 object-contain scale-125" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-sans text-black mb-4">Discovery</h3>
                  <p className="text-black/80 text-base md:text-lg leading-relaxed">
                    We dive deep into understanding your operations, workflows, and bottlenecks, uncovering opportunities for automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Strategy */}
          <div 
            ref={el => { cardsRef.current[1] = el; }}
            className="absolute w-full left-0 right-0 z-[2]"
            style={{ top: "35vh", marginTop: "35px" }}
          >
            <div ref={el => { squishRefs.current[1] = el; }} className="w-full origin-bottom">
              <div 
                className="wix-card w-full bg-[#a3bfff] p-8 md:p-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                style={{ transform: "rotate(1.5deg) translateX(24px)" }}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img src="/Study_discussion.svg" alt="Strategy" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-sans text-black mb-4">Architecture</h3>
                  <p className="text-black/80 text-base md:text-lg leading-relaxed">
                    Data becomes a roadmap. We design scalable systems, select the right AI models, and create a phased integration plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Execution */}
          <div 
            ref={el => { cardsRef.current[2] = el; }}
            className="absolute w-full left-0 right-0 z-[3]"
            style={{ top: "35vh", marginTop: "70px" }}
          >
            <div ref={el => { squishRefs.current[2] = el; }} className="w-full origin-bottom">
              <div 
                className="wix-card w-full bg-[#d0c3ff] p-8 md:p-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                style={{ transform: "rotate(-1.5deg) translateX(-24px)" }}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img src="/website-construction.svg" alt="Execution" className="w-40 h-40 md:w-56 md:h-56 object-contain scale-110" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-sans text-black mb-4">Development</h3>
                  <p className="text-black/80 text-base md:text-lg leading-relaxed">
                    We build robust infrastructure. APIs, RAG pipelines, and intelligent agents run in lockstep — so what we build is what scales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Optimization */}
          <div 
            ref={el => { cardsRef.current[3] = el; }}
            className="absolute w-full left-0 right-0 z-[4]"
            style={{ top: "35vh", marginTop: "105px" }}
          >
            <div ref={el => { squishRefs.current[3] = el; }} className="w-full origin-bottom">
              <div 
                className="wix-card w-full bg-[#fceba7] p-8 md:p-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                style={{ transform: "rotate(1.5deg) translateX(24px)" }}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  <img src="/job-list.svg" alt="Optimization" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-sans text-black mb-4">Deployment</h3>
                  <p className="text-black/80 text-base md:text-lg leading-relaxed">
                    Launch is just the beginning. We continuously monitor agent behavior, refine workflows, and maximize efficiency and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
