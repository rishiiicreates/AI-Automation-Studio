import Marquee from "@/components/ui/Marquee";

const industries = [
  "Technology",
  "Sports",
  "Fashion",
  "Lifestyle",
  "Retail",
  "Travel",
  "Real Estate",
  "Education",
  "Beauty",
  "Hotels",
  "Entertainment",
  "Automotive",
  "Consumer Goods",
];

const separator = (
  <span className="mx-4 text-accent font-sans" aria-hidden="true">
    —
  </span>
);

export default function IndustriesMarquee() {
  return (
    <div
      className="relative py-5 border-y border-black/10 bg-white overflow-hidden"
      aria-label="Industries we serve"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Marquee speed={60} pauseOnHover direction="left">
        {industries.map((industry, i) => (
          <span key={i} className="flex items-center">
            <span className="text-label-lg font-sans font-medium uppercase tracking-[0.18em] text-black/50 hover:text-black/80 transition-colors duration-300">
              {industry}
            </span>
            {separator}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
