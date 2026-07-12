"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Custom web and app development projects typically take 6–10 weeks. RAG pipelines and autonomous agent deployments usually take 4–8 weeks depending on data readiness.",
  },
  {
    q: "Do you work with startups or established brands?",
    a: "Both. Our approach scales to your stage. Startups get a lean foundation built for scale. Established brands get a more comprehensive audit-first engagement to identify operational bottlenecks.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Workflow automation projects start at $4,000. Agentic AI and RAG deployments typically start at $8,000. Infrastructure retainers are custom scoped. Book a call to discuss your needs.",
  },
  {
    q: "Do you work with any industry?",
    a: "We specialise in Technology, Logistics, Finance, and Professional Services — but have successfully delivered in most B2B and B2C verticals. See the Industries section on our homepage.",
  },
  {
    q: "Can I just hire you for one service?",
    a: "Absolutely. Many clients start with workflow automation and add autonomous agents later. Others come for backend infrastructure and expand into custom apps. We match the scope to your immediate priority.",
  },
];

export default function RequestConsultationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left column: Sticky AI Consultant */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <ScrollReveal>
            <div className="bg-accent/5 border border-accent/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[80px] -z-10 rounded-full" />
              
              <div className="w-full aspect-square max-w-[220px] mb-8 bg-black/5 rounded-full flex items-center justify-center p-6 border border-black/10 shadow-inner">
                <img src="/cat-pookie.svg" alt="AI Agent" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-display text-display-sm text-black mb-4">Instant Answers</h2>
              <p className="font-sans text-black/50 mb-8 text-sm leading-relaxed">
                Skip the wait. Chat directly with our AI consultant for immediate details on pricing, process, and timelines.
              </p>
              <Link href="/consult">
                <div className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-black font-sans font-bold uppercase tracking-widest text-xs rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150">
                  Start AI Chat
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: Form & FAQs */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {/* Header */}
          <ScrollReveal className="mb-12">
            <p className="text-label font-sans uppercase tracking-widest text-brand-blue mb-4">Get in touch</p>
            <h1 className="font-display text-display-xl font-light text-black leading-tight mb-6">
              Let&#39;s Talk About Your Infrastructure
            </h1>
            <p className="font-sans text-black/50 text-base max-w-[40ch]">
              Fill in the form below and we&#39;ll come back within 24 hours with a
              clear proposal — or hop on a free 30-minute discovery call.
            </p>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal className="mb-24 w-full max-w-xl">
            {submitted ? (
              <div className="text-center py-12 border border-black/20 bg-black/5 rounded-2xl">
                <p className="font-display text-display-md font-light text-black mb-3">Thank you!</p>
                <p className="font-sans text-sm text-black/50">We&#39;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {[
                  { id: "name", label: "Full name", type: "text", required: true },
                  { id: "email", label: "Email address", type: "email", required: true },
                ].map(({ id, label, type, required }) => (
                  <div key={id} className="relative">
                    <label htmlFor={id} className="text-label font-sans uppercase tracking-widest text-black/40 block mb-2 text-xs">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      value={formState[id as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [id]: e.target.value })}
                      className="w-full bg-transparent border-b border-black/15 focus:border-brand-blue text-black font-sans text-sm py-3 outline-none transition-colors duration-300 placeholder:text-black/20"
                      placeholder={`Your ${label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div className="relative">
                  <label htmlFor="message" className="text-label font-sans uppercase tracking-widest text-black/40 block mb-2 text-xs">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-black/15 focus:border-brand-blue text-black font-sans text-sm py-3 outline-none transition-colors duration-300 placeholder:text-black/20 resize-none"
                    placeholder="What are your goals? What's not working right now?"
                  />
                </div>

                <div className="pt-4">
                  <button type="submit" className="inline-flex items-center gap-2 px-10 py-5 bg-[#c9a96e] text-black font-sans font-bold uppercase tracking-widest text-sm rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#b09460] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-150">
                    Send Enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* FAQs */}
          <div id="faqs" className="w-full max-w-xl">
            <ScrollReveal className="mb-8">
              <h2 className="font-display text-display-md font-light text-black">Frequently Asked Questions</h2>
            </ScrollReveal>

            <div className="divide-y divide-black/10">
              {faqs.map(({ q, a }, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-none group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-sans text-sm font-medium text-black group-hover:text-black/80 transition-colors duration-300">
                      {q}
                    </span>
                    <span
                      className="flex-shrink-0 text-brand-blue transition-transform duration-300"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}
                    >
                      <ArrowRight size={14} />
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="font-sans text-sm text-black/60 leading-relaxed pb-6 max-w-[60ch]">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
