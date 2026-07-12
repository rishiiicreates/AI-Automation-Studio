"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    let isHovering = false;

    const setVisibility = (visible: boolean) => {
      if (dotRef.current) dotRef.current.style.opacity = visible ? "1" : "0";
      if (ringRef.current) ringRef.current.style.opacity = visible ? "1" : "0";
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisibility(true);
    };

    const onMouseEnter = () => setVisibility(true);
    const onMouseLeave = () => setVisibility(false);

    // Use event delegation for hover states instead of MutationObserver + querySelectorAll
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor-hover], input, textarea, [role='button']")) {
        isHovering = true;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor-hover], input, textarea, [role='button']")) {
        isHovering = false;
      }
    };

    // Smoothly animate ring toward cursor
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }

      // Ring lerps toward dot
      const speed = 0.12;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.8 : 1})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot — sharp, instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Ring — lagged follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border border-accent/50 pointer-events-none z-[9998]"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  );
}
