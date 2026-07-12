"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ParallaxElement from "@/components/ui/ParallaxElement";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerNumberRef = useRef<HTMLSpanElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 1. Intersection Observer for staggered cards reveal
    const cards = document.querySelectorAll(".service-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));

    // 2. Intersection Observer for the Counting Ticker
    let animationFrameId: number;
    let startTimestamp: number | null = null;
    const duration = 2000;
    const targetValue = 42;
    const startVal = 11;

    const tick = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smoother counting
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(startVal + (targetValue - startVal) * easeOutQuart);
      
      if (tickerNumberRef.current) {
        tickerNumberRef.current.textContent = currentVal.toString();
      }
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    const tickerObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startTimestamp = null;
        animationFrameId = requestAnimationFrame(tick);
        tickerObserver.disconnect();
      }
    }, { threshold: 0.5 });

    if (tickerRef.current) {
      tickerObserver.observe(tickerRef.current);
    }

    // 3. GSAP Stacking Cards Effects
    const ctx = gsap.context(() => {
      // Intentionally left empty as overlay darkening effect was removed.
    }, containerRef);
    
    return () => {
      observer.disconnect();
      tickerObserver.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      ctx.revert();
    };
  }, []);

  const services = [
    { id: "01", title: "Workflow Automation", desc: "We design and ship automation systems that remove manual work from your ops — n8n/Zapier-class pipelines, API integrations, internal tooling, event-driven backends.", image: "/ill_automation.jpg", icon: "/ChartDiagram.svg", bg: "bg-[#e8efd8]", text: "text-black" },
    { id: "02", title: "Agentic AI Systems", desc: "We build multi-agent systems that do real work — research, triage, content generation, customer support. Orchestration, tool-calling, memory, self-improving loops.", image: "/ill_ai.jpg", icon: "/WebsiteDesign.svg", bg: "bg-[#a3bfff]", text: "text-black" },
    { id: "03", title: "Web & App Dev", desc: "Fast, custom-built websites, web apps, and native mobile apps built for retention. React/Next.js, Expo, real backends, no page-builder bloat.", image: "/ill_web.jpg", icon: "/seoe.svg", bg: "bg-[#d0c3ff]", text: "text-black" },
    { id: "04", title: "Data Infrastructure", desc: "The infrastructure that makes everything reliable. PostgreSQL/PostGIS, Redis, queues, job systems (BullMQ), and secure third-party integrations.", image: "/ill_data.jpg", icon: "/socialmedia.svg", bg: "bg-[#fceba7]", text: "text-black" },
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 bg-transparent text-black relative z-20">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 pt-16 md:pt-24">
          
          {/* Left Column - Sticky Section */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-[15vh] h-auto lg:h-[85vh] flex flex-col justify-between z-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                <p className="text-sm font-mono tracking-widest uppercase">Expertise</p>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-sans font-medium tracking-tighter mb-8 leading-[1.1]">
                What We <br />
                <span className="font-serif italic text-brand-blue">Offer.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-black/60 font-sans max-w-md leading-relaxed mb-12 font-light">
                From autonomous agents to web applications, our services are tailored 
                to streamline operations and scale your technical capabilities.
              </p>
              
              <div className="h-[1px] w-16 bg-black mb-12"></div>
              
              <a href="/services" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-brand-blue transition-colors group">
                Explore Services
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            {/* Number Counting Ticker Section */}
            <div ref={tickerRef}>
              <div className="flex items-center gap-6 border-l-2 border-brand-blue pl-6 py-2 mt-20">
                <span ref={tickerNumberRef} className="text-5xl md:text-6xl font-sans tracking-tighter font-semibold">11</span>
                <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-black/50 max-w-[150px]">
                  Projects Delivered Globally
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Stacking Cards Container */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="service-card sticky w-full mb-[30vh]"
                style={{ 
                  top: `calc(15vh + ${i * 35}px)`
                }}
              >
                <div 
                  className={`w-full h-[55vh] md:h-[65vh] rounded-[2.5rem] flex flex-col overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${service.bg} ${service.text}`}
                  style={{
                    transform: i === 0 ? "none" : `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg) translateX(${i % 2 === 0 ? -24 : 24}px)`,
                    transition: "transform 0.5s ease-out"
                  }}
                >
                  {/* Paper Texture Overlay */}
                  <div className="css-paper-texture rounded-inherit opacity-[0.3]" />
                  
                  {/* Content side */}
                  <div className="w-full h-1/2 p-8 md:p-12 flex justify-between relative z-10">
                    <div className="flex flex-col justify-between h-full max-w-[65%]">
                      <div>
                        <div className="text-xs font-mono mb-4 opacity-60 font-bold">{service.id}</div>
                        <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 uppercase">{service.title}</h3>
                      </div>
                      <p className="text-sm md:text-base font-sans font-medium opacity-90">
                        {service.desc}
                      </p>
                    </div>

                    {/* SVG Icon on the right side if it exists */}
                    {service.icon && (
                      <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 self-center">
                        <img 
                          src={service.icon} 
                          alt={`${service.title} icon`} 
                          className="w-full h-full object-contain drop-shadow-xl"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Image side */}
                  <div className="w-full h-1/2 relative overflow-hidden border-t-4 border-black bg-gray-200 rounded-b-[2.25rem]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-b-[2.25rem]"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Spacer gives Card 4 a runway equal to the 30vh margins between the other cards */}
            <div className="h-[30vh] w-full shrink-0" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
