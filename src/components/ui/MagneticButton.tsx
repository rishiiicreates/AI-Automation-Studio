"use client";

import { useRef, useState, useCallback, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  onClick?: () => void;
  href?: string;
  "aria-label"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.4,
  radius = 120,
  onClick,
  href,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = useCallback(() => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!rectRef.current) return;
      const rect = rectRef.current;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      if (Math.sqrt(deltaX ** 2 + deltaY ** 2) < radius) {
        x.set(deltaX * strength);
        y.set(deltaY * strength);
        setIsHovering(true);
      }
    },
    [x, y, strength, radius]
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  }, [x, y]);

  const sharedClassName = `
    relative inline-flex items-center gap-3 px-7 py-3.5
    text-[0.8125rem] font-sans font-medium tracking-[0.12em] uppercase
    border border-[rgba(201,169,110,0.4)] text-[#f4efe6]
    overflow-hidden group cursor-none
    transition-colors duration-500
    hover:border-[#c9a96e]
  `;

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor-hover
    >
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ scale: isHovering ? 1.02 : 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {href ? (
          <Link href={href} className={sharedClassName} aria-label={ariaLabel}>
            {/* Background sweep */}
            <span
              className="absolute inset-0 bg-[#c9a96e] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              aria-hidden="true"
            />
            <span className="relative z-10 group-hover:text-[#0c0c0a] transition-colors duration-300">
              {children}
            </span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className={sharedClassName}
            aria-label={ariaLabel}
          >
            {/* Background sweep */}
            <span
              className="absolute inset-0 bg-[#c9a96e] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              aria-hidden="true"
            />
            <span className="relative z-10 group-hover:text-[#0c0c0a] transition-colors duration-300">
              {children}
            </span>
          </button>
        )}
      </motion.div>
    </div>
  );
}
