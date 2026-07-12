"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { ArrowDoodle, StarDoodle, CircleDoodle, UnderlineDoodle, SquiggleDoodle } from "./Doodles";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Professional fade-up and scale-in reveal for the card
      gsap.from(cardRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
      
      // Floating animation for doodles
      gsap.to(".floating-doodle", {
        y: -15,
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 md:px-8"
    >
      
      {/* Background Doodles */}
      <ArrowDoodle className="floating-doodle absolute top-32 left-10 md:left-32 w-24 h-24 text-black opacity-30 -rotate-45" />
      <StarDoodle className="floating-doodle absolute bottom-32 right-10 md:right-32 w-16 h-16 text-brand-orange opacity-40 rotate-12" />
      <SquiggleDoodle className="floating-doodle absolute top-40 right-20 w-32 h-16 text-brand-blue opacity-30 rotate-[30deg]" />
      <CircleDoodle className="floating-doodle absolute bottom-40 left-20 w-24 h-24 text-brand-pink opacity-25" />

      {/* Decorative blurred shadow behind the card */}
      <div 
        className="absolute w-[60vw] max-w-[800px] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.1) 0%, transparent 100%)' }}
      />

      {/* Main Interactive Card - Professional Look */}
      <div 
        ref={cardRef}
        className="relative z-10 w-full max-w-6xl bg-white/90 border-2 border-black/10 rounded-[4rem] p-12 md:p-32 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center text-center overflow-hidden"
      >
        {/* Paper texture applied specifically to this card */}
        <div className="css-paper-texture rounded-inherit" />
        
        {/* Foreground Card Doodles */}
        <StarDoodle className="floating-doodle absolute top-12 right-12 md:top-24 md:right-24 w-12 h-12 text-black opacity-80 rotate-12 z-20" />
        <StarDoodle className="floating-doodle absolute bottom-12 left-12 md:bottom-24 md:left-24 w-8 h-8 text-black opacity-60 -rotate-12 z-20" />
        <ArrowDoodle className="floating-doodle absolute top-1/2 left-4 md:left-12 w-16 h-16 text-brand-orange opacity-70 rotate-[-120deg] z-20" />

        <div className="relative z-20 flex flex-col items-center w-full">
          <p className="text-xl md:text-2xl font-sans tracking-widest uppercase text-black/60 font-medium mb-6">
            — Book A Call
          </p>

          <div className="relative mb-8">
            <h2 className="relative z-10 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] text-black drop-shadow-sm">
              SCALE YOUR <br className="md:hidden" />
              <span className="font-serif italic font-light relative">
                OPERATIONS.
                {/* Underline Doodle directly under BRAND */}
                <UnderlineDoodle className="absolute -bottom-4 left-0 w-full h-4 text-brand-blue" />
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-2xl text-black/70 font-sans max-w-3xl mx-auto leading-relaxed mb-16 relative mt-8">
            Schedule a call with our technical team to discuss your next custom build, automation pipeline, or infrastructure upgrade.
          </p>

          <Link href="/request-consultation">
            <div className="inline-flex items-center justify-center px-10 md:px-14 py-5 md:py-6 bg-[#fceba7] text-black text-xl md:text-2xl font-sans font-bold uppercase tracking-wider rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ebd996] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-150">
              Request a Consultation
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
