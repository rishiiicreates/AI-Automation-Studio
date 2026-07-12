import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Radial glow background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-[15vw] md:text-[12rem] font-medium leading-none text-cream tracking-tighter mb-4">
          404
        </h1>
        <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-cream/60 mb-12">
          The page you are looking for does not exist.
        </p>
        
        <div className="flex justify-center">
          <MagneticButton>
            <Link 
              href="/"
              className="border border-cream/20 text-cream px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-cream hover:text-[#0a0a0a] transition-colors duration-500 flex items-center justify-center"
            >
              Return Home
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
