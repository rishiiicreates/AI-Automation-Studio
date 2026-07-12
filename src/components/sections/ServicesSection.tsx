"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Workflow\nAutomation",
    description:
      "We design and ship automation systems that remove manual work from your ops — n8n/Zapier-class pipelines, API integrations, internal tooling, event-driven backends. Includes process audits & automation mapping, custom n8n/workflow builds, API integrations (CRM, payments, comms), and internal dashboards & tooling.",
    color: "#000000",
    bg: "#e8efd8", // light green
    image: "/automation.svg",
  },
  {
    number: "02",
    title: "Agentic AI\nSystems",
    description:
      "We build multi-agent systems that do real work — research, triage, content generation, customer support. Orchestration, tool-calling, memory, self-improving loops. Includes multi-agent architecture design, LLM orchestration, RAG & retrieval pipelines, and agent memory & context systems.",
    color: "#000000",
    bg: "#a3bfff", // light blue
    image: "/agentic_ai.svg",
  },
  {
    number: "03",
    title: "Web\nDevelopment",
    description:
      "Fast, custom-built websites and web apps. React/Next.js, real backends, no page-builder bloat. Includes custom React/Next.js builds, API & backend architecture, performance-first frontend, and headless CMS integration where useful.",
    color: "#000000",
    bg: "#d0c3ff", // light purple
    image: "/Web_Development.svg",
  },
  {
    number: "04",
    title: "App\nDevelopment",
    description:
      "Native and cross-platform apps built for retention, not just launch. Includes React Native / Expo builds, iOS & Android native, real-time features (sockets, push, geolocation), and app store readiness.",
    color: "#000000",
    bg: "#baffc9", // pastel mint
    image: "/Mobile_app.svg",
  },
  {
    number: "05",
    title: "AI Chat &\nSupport Agents",
    description:
      "Customer-facing chat agents grounded in your actual data, not generic wrappers. Includes backend proxy architecture, custom knowledge base / RAG, multi-provider LLM fallback, and conversation analytics.",
    color: "#000000",
    bg: "#ffdfba", // pastel orange
    image: "/chat_support.svg",
  },
  {
    number: "06",
    title: "Data & Backend\nInfrastructure",
    description:
      "The infrastructure that makes everything above reliable. Includes PostgreSQL/PostGIS data modeling, Redis, queues, job systems (BullMQ), third-party integrations (payments, OTP, geolocation), and scale-hardening & production audits.",
    color: "#000000",
    bg: "#ffb3ba", // pastel pink
    image: "/data_and_backend_infra.svg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative section-padding bg-white"
      id="services"
      aria-label="Services"
    >
      <div className="container-wide">
        <ScrollReveal className="mb-16 lg:mb-20">
          <p className="text-label font-sans uppercase tracking-widest text-black/60 mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-display-lg font-light text-black max-w-[20ch] leading-tight">
            What We Offer!
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {services.map(({ number, title, description, color, bg, image }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <div
                className="group relative p-7 lg:p-9 rounded-none h-full flex flex-col cursor-none transition-transform duration-500 card-hover"
                style={{
                  background: bg,
                }}
              >
                {/* Header (Number + Title + Image) */}
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <span
                      className="text-label font-sans font-medium tracking-widest block"
                      style={{ color }}
                    >
                      {number}
                    </span>
                    <h3
                      className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-tight whitespace-pre-line"
                      style={{ color }}
                    >
                      {title}
                    </h3>
                  </div>
                  <Image src={image} alt={title} width={144} height={144} className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-md shrink-0" />
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-black/80 leading-relaxed flex-1 mb-6">
                  {description}
                </p>

                {/* Learn more link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-label font-sans uppercase tracking-widest transition-transform duration-300 cursor-none"
                  style={{ color }}
                  aria-label={`Learn more about ${title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
