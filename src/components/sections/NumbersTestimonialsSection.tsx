"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 51, label: "Average reduction in manual processing time", suffix: "%" },
  { value: 62, label: "Decrease in customer response latency", suffix: "%" },
  { value: 43, label: "Average reduction in operational costs", suffix: "%" },
];

const testimonials = [
  {
    quote:
      "Working with Brokkrs transformed our operations. The custom workflow automation led to a 67% reduction in processing time and a significant boost in team bandwidth.",
    author: "Sophie Martin",
    role: "Director",
    company: "Sword",
  },
  {
    quote:
      "The team's approach to Agentic AI was methodical and effective. Within 3 months, we automated our entire data triage process, saving hundreds of hours.",
    author: "Daniel Singh",
    role: "Founder",
    company: "Archidivi",
  },
  {
    quote:
      "Their RAG pipeline unlocked internal knowledge we'd been blind to for years. Post-implementation, our query resolution rate improved by 38% — remarkable.",
    author: "Emily Chen",
    role: "Head of Growth",
    company: "Depower EV",
  },
  {
    quote:
      "Brokkrs rebuilt our backend infrastructure from scratch. We now have an elastic, robust architecture that handles our AI workloads with zero downtime.",
    author: "Mark Thompson",
    role: "CEO",
    company: "Ventour",
  },
];

const clientLogos = ["Sword", "Archidivi", "Depower", "Ventour"];

export default function NumbersTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const goToSlideRef = useRef<((index: number) => void) | null>(null);
  const dotsRef = useRef<HTMLElement[]>([]);

  // Auto-playing testimonial slider
  useEffect(() => {
    const slides = sliderRef.current?.querySelectorAll<HTMLElement>(".testimonial-slide");
    if (!slides || slides.length === 0) return;

    const goToSlide = (index: number) => {
      slides.forEach((slide, i) => {
        gsap.to(slide, {
          opacity: i === index ? 1 : 0,
          x: i === index ? 0 : i < index ? -30 : 30,
          pointerEvents: i === index ? "auto" : "none",
          duration: 0.7,
          ease: "power3.out",
        });
      });
      activeIndexRef.current = index;

      // Update dot indicators
      dotsRef.current.forEach((dot, i) => {
        dot.style.opacity = i === index ? "1" : "0.3";
        dot.style.transform = i === index ? "scaleX(2.5)" : "scaleX(1)";
      });
    };

    // Init
    slides.forEach((slide, i) => {
      gsap.set(slide, { opacity: i === 0 ? 1 : 0, x: i === 0 ? 0 : 30, pointerEvents: i === 0 ? "auto" : "none" });
    });
    dotsRef.current = Array.from(document.querySelectorAll<HTMLElement>(".testimonial-dot"));

    intervalRef.current = setInterval(() => {
      const next = (activeIndexRef.current + 1) % slides.length;
      goToSlide(next);
    }, 5000);

    // Expose goToSlide for dots via ref
    goToSlideRef.current = goToSlide;

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      goToSlideRef.current = null;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-white border-t border-black/5"
      id="numbers"
      aria-label="Client results and testimonials"
    >
      <div className="container-wide">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-label font-sans uppercase tracking-widest text-black/60 mb-4">
            Results
          </p>
          <h2 className="font-display text-display-lg font-light text-black max-w-[20ch] leading-tight mb-16">
            Our Clients&#39; Experiences!
          </h2>
        </ScrollReveal>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 mb-20">
          {stats.map(({ value, label, suffix }, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <div className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-black leading-none mb-3">
                <AnimatedCounter end={value} suffix={suffix} duration={2.5} />
              </div>
              <p className="text-sm font-sans text-black/60 leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative overflow-hidden" ref={sliderRef}>
          {testimonials.map(({ quote, author, role, company }, i) => (
            <div
              key={i}
              className="testimonial-slide absolute inset-0 flex flex-col"
              style={{ position: i === 0 ? "relative" : "absolute" }}
            >
              <blockquote>
                <p className="font-display font-light italic text-display-md text-black/90 leading-tight max-w-[40ch] mb-8">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#e8efd8] border border-[#a8c5a0] flex items-center justify-center">
                    <span className="font-display text-sm font-medium text-black">
                      {author[0]}
                    </span>
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-sans font-medium text-black tracking-wide">
                      {author}
                    </cite>
                    <p className="text-xs font-sans text-black/50 tracking-wide">
                      {role}, {company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Dot controls */}
        <div className="flex items-center gap-3 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className="testimonial-dot h-[2px] w-5 bg-black/60 transition-all duration-300 cursor-none"
              style={{ opacity: i === 0 ? 1 : 0.3, transform: i === 0 ? "scaleX(2.5)" : "scaleX(1)", transformOrigin: "left" }}
              onClick={() => goToSlideRef.current?.(i)}
              role="tab"
              aria-selected={i === 0}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Client logo marquee */}
        <div className="mt-20 pt-10 border-t border-black/10">
          <p className="text-label font-sans uppercase tracking-widest text-black/40 mb-6">
            Trusted by
          </p>
          <Marquee speed={35} pauseOnHover>
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="mx-12 text-display-md font-display font-light text-black/20 hover:text-black/50 transition-colors duration-300 tracking-widest"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
