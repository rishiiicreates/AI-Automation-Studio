"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarDoodle, SquiggleDoodle, CircleDoodle } from "@/components/Doodles";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%", 
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-black"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 0.6, scale: 1, rotate: 12 }}
                exit={{ opacity: 0, scale: 0, rotate: 45 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "backOut" }}
                className="absolute top-[15%] left-[10%] text-brand-blue"
              >
                <StarDoodle className="w-16 h-16" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 0.5, scale: 1, rotate: -20 }}
                exit={{ opacity: 0, scale: 0, rotate: -45 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                className="absolute bottom-[20%] left-[15%] text-brand-pink"
              >
                <SquiggleDoodle className="w-24 h-12" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1, rotate: 30 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                className="absolute top-[20%] right-[15%] text-brand-orange"
              >
                <CircleDoodle className="w-20 h-20" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                animate={{ opacity: 0.6, scale: 1, rotate: 15 }}
                exit={{ opacity: 0, scale: 0, rotate: 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                className="absolute bottom-[15%] right-[10%] text-brand-yellow"
              >
                <StarDoodle className="w-24 h-24" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 90 }}
                animate={{ opacity: 0.5, scale: 1, rotate: -15 }}
                exit={{ opacity: 0, scale: 0, rotate: -90 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                className="absolute top-[40%] left-[5%] text-brand-yellow"
              >
                <CircleDoodle className="w-12 h-12" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 0.6, scale: 1, rotate: 45 }}
                exit={{ opacity: 0, scale: 0, rotate: 90 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
                className="absolute top-[60%] right-[5%] text-brand-pink"
              >
                <StarDoodle className="w-14 h-14" />
              </motion.div>
            </div>

            <div className="overflow-hidden flex flex-col items-center justify-center gap-6 relative z-10">
              <motion.img
                src="/dance-cat.svg"
                alt="Dancing Cat Loading"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="text-2xl md:text-3xl font-medium tracking-widest uppercase flex items-center gap-3"
              >
                Brokkrs
                <span className="font-serif italic text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.8)", color: "transparent" }}>
                  Studio
                </span>
              </motion.h1>
            </div>
            
            <motion.div 
              className="absolute bottom-12 w-64 h-[1px] bg-black/20 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="h-full bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
