"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Speed multiplier (e.g., 1 = fast, 0.2 = slow, negative = reverse direction)
}

/**
 * Moves an element along the Y-axis based on scroll position.
 * The speed parameter dictates how much it moves relative to standard scrolling.
 */
export default function ParallaxElement({ children, className = "", speed = 1 }: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // We'll move it from Y: +20% to Y: -20% based on speed factor
    const yOffset = 50 * speed;
    
    gsap.set(el, { y: yOffset });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1,
      }
    });

    timeline.to(el, {
      y: -yOffset,
      ease: "none"
    });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
