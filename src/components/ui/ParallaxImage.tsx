"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // E.g. 0.5 means it moves half as fast as you scroll
}

export default function ParallaxImage({ src, alt, className = "", speed = 1 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    // We scale the image up slightly so it has room to translate up and down without exposing the edges
    gsap.set(image, { scale: 1.2, yPercent: -15 * speed });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooth scrub
      }
    });

    timeline.to(image, {
      yPercent: 15 * speed,
      ease: "none",
    });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
