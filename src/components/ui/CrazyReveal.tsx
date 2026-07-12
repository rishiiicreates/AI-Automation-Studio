"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CrazyRevealProps {
  children: ReactNode;
  className?: string;
}

export default function CrazyReveal({ children, className = "" }: CrazyRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Randomize entrance coordinates for the "hallucination" feel
      const randomX = (Math.random() - 0.5) * 800;
      const randomY = (Math.random() - 0.5) * 800;
      const randomRotate = (Math.random() - 0.5) * 180;
      const randomRotateX = (Math.random() - 0.5) * 180;
      const randomRotateY = (Math.random() - 0.5) * 180;
      const randomSkew = (Math.random() - 0.5) * 60;
      const randomScale = Math.random() * 2 + 0.1;

      gsap.fromTo(el, 
        {
          opacity: 0,
          x: randomX,
          y: randomY,
          rotation: randomRotate,
          rotationX: randomRotateX,
          rotationY: randomRotateY,
          skewX: randomSkew,
          scale: randomScale,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          skewX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 20%",
            scrub: 1,
          }
        }
      );
    }, elRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
