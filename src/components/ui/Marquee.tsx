"use client";

import { useRef, ReactNode, useEffect, useState } from "react";
import { gsap } from "gsap";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate duration based on content width and speed
    const contentWidth = track.scrollWidth / 2;
    const duration = contentWidth / speed;

    const startX = direction === "left" ? 0 : -contentWidth;
    const endX = direction === "left" ? -contentWidth : 0;

    tweenRef.current = gsap.fromTo(
      track,
      { x: startX },
      {
        x: endX,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed, direction]);

  // Pause/resume on hover or when out of viewport
  useEffect(() => {
    if (!tweenRef.current) return;
    if (isHovered || !isVisible) {
      tweenRef.current.pause();
    } else {
      tweenRef.current.resume();
    }
  }, [isHovered, isVisible]);

  // Pause when scrolled out of view to save CPU
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.parentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    
    observer.observe(track.parentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      aria-hidden="true"
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center flex-shrink-0">{children}</div>
        <div className="flex items-center flex-shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
