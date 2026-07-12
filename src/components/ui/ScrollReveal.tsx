"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Wraps children and reveals them with a fade+slide-up on scroll entry.
 * For staggered reveals, pass stagger > 0 and wrap multiple elements.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.9,
  stagger = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger > 0 ? el.children : [el];

    gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger,
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(targets);
    };
  }, [delay, y, duration, stagger]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
