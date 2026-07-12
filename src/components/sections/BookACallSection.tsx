"use client";

import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const avatars = [
  { name: "Alex", color: "#e8efd8" },
  { name: "Sam", color: "#a3bfff" },
  { name: "Jordan", color: "#ffdfba" },
  { name: "Riley", color: "#d0c3ff" },
  { name: "Casey", color: "#fcebba" },
];

export default function BookACallSection() {
  return (
    <section
      className="relative section-padding overflow-hidden bg-white"
      id="book-call"
      aria-label="Book a consultation"
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f8f8] to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-[#a3bfff]/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <ScrollReveal>
          <p className="text-label font-sans uppercase tracking-widest text-black/60 mb-6">
            Ready to grow?
          </p>
          <h2 className="font-display text-display-xl font-light text-black leading-tight mb-4">
            Upgrade your Brand!
          </h2>
          <p className="font-sans text-black/60 text-base leading-relaxed max-w-[40ch] mx-auto mb-10">
            Book a free 30-minute strategy call. No fluff — just a clear diagnosis
            of where you are and a plan to get where you want to be.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Stacked avatars */}
          <div className="flex items-center justify-center mb-8" aria-hidden="true">
            {avatars.map(({ name, color }, i) => (
              <div
                key={name}
                title={name}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[0.6rem] font-sans font-medium text-black"
                style={{
                  background: color,
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: avatars.length - i,
                }}
              >
                {name[0]}
              </div>
            ))}
            <span className="ml-4 text-sm font-sans text-black/50">
              +42 satisfied clients
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href="/request-consultation"
              aria-label="Book a strategy call"
              strength={0.3}
            >
              Book a Free Call
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
