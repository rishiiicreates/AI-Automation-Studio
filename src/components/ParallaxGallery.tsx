"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);

  const wrapper1Ref = useRef<HTMLDivElement>(null);
  const wrapper2Ref = useRef<HTMLDivElement>(null);
  const wrapper3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      const wrappers = [wrapper1Ref.current, wrapper2Ref.current, wrapper3Ref.current];

      // Background elements and internal image parallax (always active)
      const bgTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text moves horizontally
      bgTl.fromTo(textRef.current, { x: "5%" }, { x: "-15%", ease: "none" }, 0);

      // Internal image parallax (Scale + Y translation)
      bgTl.fromTo(img1Ref.current, { yPercent: -15 }, { yPercent: 15, ease: "none" }, 0);
      bgTl.fromTo(img2Ref.current, { yPercent: -20 }, { yPercent: 20, ease: "none" }, 0);
      bgTl.fromTo(img3Ref.current, { yPercent: -10 }, { yPercent: 10, ease: "none" }, 0);

      mm.add("(min-width: 768px)", () => {
        // Vertical parallax for wrappers (runs throughout the section)
        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        parallaxTl.fromTo(wrapper1Ref.current, { y: 100 }, { y: -100, ease: "none" }, 0);
        parallaxTl.fromTo(wrapper2Ref.current, { y: 250 }, { y: -250, ease: "none" }, 0);
        parallaxTl.fromTo(wrapper3Ref.current, { y: 50 }, { y: -50, ease: "none" }, 0);

        // Deal out effect (controls x, rotation, scale, opacity)
        const dealTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "center 20%",
            scrub: 1,
          }
        });

        // 1. Fade in the stack
        wrappers.forEach((wrapper, index) => {
          if (!wrapper) return;
          dealTl.fromTo(wrapper,
            { 
              x: index === 0 ? "0%" : `calc(-${index * 100}% - ${index * 4}rem)`,
              rotation: -10 + (index * 10), // -10, 0, 10
              transformOrigin: "bottom left",
              scale: 0.8,
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.2,
              ease: "none"
            },
            0
          );
        });

        // 2. Deal them out
        const finalRotations = [-4, 3, -2]; // Asymmetrical final tilts
        wrappers.forEach((wrapper, index) => {
          if (!wrapper) return;
          dealTl.to(wrapper,
            {
              x: "0%",
              rotation: finalRotations[index],
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.2)"
            },
            0.2 + (index * 0.1)
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile fallback
        wrappers.forEach((wrapper, index) => {
          if (!wrapper) return;
          gsap.fromTo(wrapper, 
            { y: 100, opacity: 0 },
            {
              y: 0, 
              opacity: 1,
              scrollTrigger: {
                trigger: wrapper,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              }
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[150vh] bg-transparent overflow-hidden flex items-center justify-center py-20 z-10"
    >
      <h2 
        ref={textRef} 
        className="absolute top-[20%] md:top-[30%] text-[15vw] font-playfair italic text-black/5 leading-none whitespace-nowrap z-0 pointer-events-none"
      >
        Aesthetics & Motion
      </h2>

      <div className="relative w-full h-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
        {/* Left Column */}
        <div ref={wrapper1Ref} className="h-[40vh] md:h-[60vh] relative mt-20 md:mt-0 z-10 overflow-hidden rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <img 
            ref={img1Ref}
            src="/team-collaborating-v3.jpg" 
            alt="College student working on laptop" 
            className="absolute w-full h-[130%] object-cover -top-[15%]"
          />
        </div>
        
        {/* Center Column - Taller & Offset */}
        <div ref={wrapper2Ref} className="h-[50vh] md:h-[80vh] relative mt-32 md:-mt-32 z-20 overflow-hidden rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <img 
            ref={img2Ref}
            src="/tech-team-meeting-v3.jpg" 
            alt="Students looking at code" 
            className="absolute w-full h-[140%] object-cover -top-[20%]"
          />
        </div>

        {/* Right Column */}
        <div ref={wrapper3Ref} className="h-[40vh] md:h-[50vh] relative mt-10 md:mt-40 z-10 overflow-hidden rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <img 
            ref={img3Ref}
            src="/creative-office-discussion-v3.jpg" 
            alt="Students working on project" 
            className="absolute w-full h-[140%] object-cover -top-[20%]"
          />
        </div>
      </div>
    </section>
  );
}
