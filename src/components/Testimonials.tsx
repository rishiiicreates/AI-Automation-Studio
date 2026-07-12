"use client";

import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechFlow",
      text: "Brokkrs completely transformed our operations. The automated support agent they built led to a 40% reduction in ticket resolution time.",
      bg: "bg-[#e8efd8]",
    },
    {
      name: "Marcus Wright",
      role: "Founder, Elevate",
      text: "Working with this team was seamless. They understood our complex workflows immediately and delivered an automation system that exceeded all expectations.",
      bg: "bg-[#a3bfff]",
    },
    {
      name: "Emily Chen",
      role: "Director, InnovateX",
      text: "The combination of robust infrastructure and intelligent agent design is rare. Brokkrs brings both to the table in spades. Highly recommended.",
      bg: "bg-[#d0c3ff]",
    },
    {
      name: "David Miller",
      role: "CEO, GrowthStudio",
      text: "Their strategic insights combined with world-class execution makes them our go-to partner for all backend and automation initiatives.",
      bg: "bg-[#fceba7]",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop animation - fold out like a deck of cards from the first card
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "center 20%",
            scrub: 1,
          }
        });

        // 1. Fade in the stack of cards first
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          tl.fromTo(card,
            { 
              x: index === 0 ? "0%" : `calc(-${index * 100}% - ${index * 1.5}rem)`,
              y: index * 20, // Add slight vertical messiness to stack
              rotation: -30 + (index * 20), // More drastic fan spread: -30, -10, 10, 30
              transformOrigin: "bottom left",
              scale: 0.4, // Start much smaller
              opacity: 0,
            },
            {
              opacity: 1,
              scale: 0.7, // Grow while fading in
              duration: 0.2, // First 20% of scrub
              ease: "power2.out"
            },
            0
          );
        });

        // 2. Deal them out into the grid
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          tl.to(card,
            {
              x: "0%",
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(2)" // More aggressive bounce
            },
            0.2 + (index * 0.1) // Stagger the deal-out effect
          );
        });
      });

      // Mobile & Tablet - simpler vertical fade up stagger
      mm.add("(max-width: 1023px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(card, 
            { y: 100, opacity: 0 },
            {
              y: 0, 
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                scrub: 1,
              }
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-black">—</span>
              <p className="text-lg text-black">Client Stories</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-sans tracking-tight">
              What Our <br className="hidden md:block" />
              <span className="font-serif italic text-brand-blue">Clients Say.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-md leading-relaxed pb-2">
            Don't just take our word for it. Here is what some of our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
              <div 
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className={`relative overflow-hidden ${testimonial.bg} p-8 md:p-10 rounded-[2rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[400px]`}
              >
                {/* Paper Texture Overlay */}
                <div className="css-paper-texture rounded-inherit opacity-[0.3]" />
                
                <div className="relative z-10">
                <Quote className="w-10 h-10 mb-6 opacity-20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="relative z-10">
                <div className="w-full h-[1px] bg-black/10 mb-6" />
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-sm font-mono opacity-60 mt-1">{testimonial.role}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
