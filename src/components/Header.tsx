"use client";

import Link from "next/link";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 pointer-events-none ${isScrolled ? 'py-4 px-6 md:px-12' : 'py-8 px-6 md:px-12'}`}
    >
      <div 
        className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-white border-b-4 border-black shadow-[0_6px_0_0_rgba(0,0,0,1)] pointer-events-auto' : 'bg-transparent pointer-events-none'}`}
      />
      
      <div className="pointer-events-auto relative z-10">
        <MagneticButton>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-black font-medium tracking-widest text-sm flex items-center gap-2">
              <Cloud className="w-5 h-5 text-black" />
              <span className="uppercase font-bold">Brokkrs</span>
            </div>
          </Link>
        </MagneticButton>
      </div>
      
      <nav className="hidden md:flex items-center gap-12 pointer-events-auto relative z-10">
        {["Services", "Portfolio", "About", "Blog"].map((item) => (
          <MagneticButton key={item}>
            <Link href={`/${item.toLowerCase()}`} className="text-black text-xs uppercase tracking-[0.2em] font-bold hover:text-brand-orange transition-colors">
              {item}
            </Link>
          </MagneticButton>
        ))}
      </nav>

      <div className="flex items-center gap-6 pointer-events-auto relative z-10">
        <MagneticButton className="hidden md:block">
          <Link href="/request-consultation">
            <div className="border-4 border-black bg-white text-black px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150">
              Let&apos;s Talk
            </div>
          </Link>
        </MagneticButton>
        
        <MagneticButton>
          <button className="md:hidden flex flex-col justify-center items-end w-10 h-10 gap-2">
            <span className="block w-8 h-[2px] bg-black" />
            <span className="block w-6 h-[2px] bg-black" />
          </button>
        </MagneticButton>
      </div>
    </motion.header>
  );
}
