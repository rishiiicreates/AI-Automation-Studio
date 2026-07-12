export const MouseCursorDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 20 L 20 80 L 40 60 L 55 85 L 65 80 L 50 55 L 75 55 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CoffeeDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 30 40 L 70 40 L 65 85 L 35 85 Z M 70 50 C 85 50, 85 70, 68 70 M 40 15 Q 45 25, 40 35 M 50 15 Q 55 25, 50 35 M 60 15 Q 65 25, 60 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LaptopDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 65 L 80 65 L 75 25 L 25 25 Z M 10 65 L 90 65 L 90 75 L 10 75 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MobileDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 30 20 C 30 15, 35 10, 40 10 L 60 10 C 65 10, 70 15, 70 20 L 70 80 C 70 85, 65 90, 60 90 L 40 90 C 35 90, 30 85, 30 80 Z M 45 80 L 55 80 M 45 15 L 55 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Aliases to avoid breaking existing imports
export const ArrowDoodle = MouseCursorDoodle;
export const StarDoodle = CoffeeDoodle;
export const CircleDoodle = LaptopDoodle;
export const SquiggleDoodle = MobileDoodle;

export const UnderlineDoodle = ({ className = "" }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M 5 10 Q 50 20, 95 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
