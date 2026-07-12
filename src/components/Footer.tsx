"use client";

import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent text-black py-24 px-6 md:px-12 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes snapArrow {
          0% { transform: translateX(0); }
          80% { transform: translateX(15px); }
          81% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .animate-snap {
          animation: snapArrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}} />
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
        
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tighter">
            Brokkrs<span className="font-serif italic text-brand-blue">.</span>
          </h3>
          <p className="text-black/50 text-lg max-w-sm font-light">
            An AI automation studio building workflow automation, agentic AI, and scalable infrastructure.
          </p>

          <MagneticButton strength={0.1}>
            <a href="/request-consultation" className="mt-8 inline-flex items-center gap-4 text-sm font-mono uppercase tracking-widest cursor-pointer group hover:text-brand-blue transition-colors">
              Start A Project
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-snap">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </MagneticButton>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 w-full md:w-1/2 justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">Menu</h4>
            {[{name: "Home", path: "/"}, {name: "Portfolio", path: "/portfolio"}, {name: "Services", path: "/services"}].map((item) => (
              <MagneticButton key={item.name}>
                <Link href={item.path} className="text-2xl font-medium hover:text-brand-blue transition-colors">
                  {item.name}
                </Link>
              </MagneticButton>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-4">Connect</h4>
            {[{name: "Blog", path: "/blog"}, {name: "FAQs", path: "/#"}, {name: "Contact", path: "/request-consultation"}].map((item) => (
              <MagneticButton key={item.name}>
                <Link href={item.path} className="text-2xl font-medium hover:text-brand-blue transition-colors">
                  {item.name}
                </Link>
              </MagneticButton>
            ))}
          </div>
        </div>
        
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-black/40 relative z-10 gap-4">
        <div>&copy; {new Date().getFullYear()} Brokkrs. All rights reserved.</div>
        <div>
          built by <a href="https://rishiicreates.vercel.app/#" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors underline decoration-black/20 underline-offset-4">rishiicreates</a>
        </div>
      </div>
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-medium tracking-tighter whitespace-nowrap text-black">BROKKRS</span>
      </div>
    </footer>
  );
}
