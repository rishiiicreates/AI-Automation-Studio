"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

// The decorative "D" replicates the oversized letterform on the live site
const HEADLINE_WORDS = ["Crafting", "digital", "experiences", "that", "redefine"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const decorativeLetterRef = useRef<HTMLSpanElement>(null);

  // Intro load sequence — fires once per session
  useEffect(() => {
    if (sessionStorage.getItem("hero-played")) return undefined;

    const ctx = gsap.context(() => {
      const words = document.querySelectorAll<HTMLElement>(".hero-word");
      const badge = document.querySelector<HTMLElement>(".hero-badge");
      const sub = document.querySelector<HTMLElement>(".hero-sub");
      const cta = document.querySelector<HTMLElement>(".hero-cta");
      const scroll = document.querySelector<HTMLElement>(".hero-scroll");
      const deco = decorativeLetterRef.current;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Reset
      gsap.set([words, badge, sub, cta, scroll, deco], { opacity: 0, y: 40 });

      tl.to(badge, { opacity: 1, y: 0, duration: 0.8 })
        .to(words, { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, "-=0.4")
        .to(deco, { opacity: 1, y: 0, duration: 0.6 }, "-=0.8")
        .to(sub, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(cta, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        .to(scroll, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

      tl.eventCallback("onComplete", () => {
        sessionStorage.setItem("hero-played", "1");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Parallax on scroll — bg moves slower than content
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
      id="hero"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        {/* Gradient mesh */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top center, #1a1a14 0%, #0c0c0a 60%)' }} />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 noise-overlay opacity-30" />
        {/* Warm glow top-center */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" 
          style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(214, 227, 195, 0.05) 0%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-20">
        {/* Badge / eyebrow */}
        <div className="hero-badge bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-4 py-2 inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-sans tracking-wide text-black/80">
            Core Builds • Agentic AI • Embedded Teams
          </span>
        </div>

        {/* Headline with decorative oversized D */}
        <h1 className="relative font-display text-display-2xl font-light text-cream leading-[0.95] tracking-[-0.02em] mb-6">
          {/* Decorative oversized "D" */}
          <span
            ref={decorativeLetterRef}
            className="absolute -left-[0.05em] top-0 font-display font-semibold text-[5em] md:text-[6em] text-cream/4 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            D
          </span>

          {/* Words stagger in — each word is an inline-block with trailing space */}
          <span className="relative">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={i} className="hero-word inline-block" style={{ marginRight: '0.25em' }}>
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subheadline / byline */}
        <p className="hero-sub font-sans font-light text-cream/60 text-base md:text-lg tracking-wide max-w-[50ch] mx-auto mb-10 md:mb-14">
          Founder-led studio providing fractional CTO leadership, 0-to-1 core builds, and agentic AI pipelines.
        </p>

        {/* CTA */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton href="/request-consultation" aria-label="Request a consultation">
            Request a Consultation
          </MagneticButton>

          <Link
            href="/#services"
            className="text-label-lg font-sans uppercase tracking-widest text-cream/50 hover:text-cream transition-colors duration-300 link-underline cursor-none"
          >
            See our work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        aria-hidden="true"
      >
        <span className="text-label font-sans uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
