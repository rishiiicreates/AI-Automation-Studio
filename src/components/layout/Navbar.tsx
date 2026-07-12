"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Menu } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/request-consultation#faqs" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state — for background
      setScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const menuVariants = {
    closed: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    open: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: "easeOut" as const },
    }),
  };

  return (
    <>
      <motion.header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20"
        animate={{
          y: hidden ? "-100%" : "0%",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(0, 0, 0, 0.06)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
      >
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-display text-lg lg:text-xl font-medium tracking-[0.3em] uppercase text-black hover:text-black/60 transition-colors duration-300 cursor-none"
          aria-label="Brokkrs — go to homepage"
        >
          Brokkrs
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="
                text-label-lg font-sans font-medium tracking-[0.12em] uppercase
                text-black/70 hover:text-black transition-colors duration-300
                link-underline cursor-none
              "
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <MagneticButton href="/request-consultation" aria-label="Get in touch">
            Get in Touch
          </MagneticButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black/80 hover:text-black transition-colors cursor-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={22} />
        </button>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white flex flex-col justify-center px-8"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-6 text-black/60 hover:text-black transition-colors cursor-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {/* Menu links */}
            <nav aria-label="Mobile navigation">
              <ul className="list-none space-y-2">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={href}
                      className="
                        block font-display font-light tracking-[0.02em]
                        text-[clamp(2.5rem,8vw,4.5rem)] text-black/80
                        hover:text-black transition-colors duration-300
                        link-underline cursor-none
                      "
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
              exit={{ opacity: 0 }}
            >
              <Link
                href="/request-consultation"
                className="text-label-lg font-sans uppercase tracking-widest text-black/60"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch →
              </Link>
            </motion.div>

            {/* Gold line */}
            <div className="absolute bottom-10 left-8 right-8 h-px bg-black/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
