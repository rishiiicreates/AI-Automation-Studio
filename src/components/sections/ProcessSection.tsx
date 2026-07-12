import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "We begin with deep discovery — understanding your audience, auditing competitors, and mapping the gaps that represent your biggest opportunity.",
    bg: "#e8efd8", // light green
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Data becomes a roadmap. We define clear objectives, select the right channels, and create a phased plan optimised for your timeline and budget.",
    bg: "#a3bfff", // light blue
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We ship fast and iterate faster. Design, development, content, and analytics run in lockstep — so what we build is what performs.",
    bg: "#d0c3ff", // light purple
  },
];

export default function ProcessSection() {
  return (
    <section
      className="relative section-padding bg-white"
      id="process"
      aria-label="Our process"
    >
      <div className="container-wide">
        <ScrollReveal className="mb-16 lg:mb-20">
          <p className="text-label font-sans uppercase tracking-widest text-black/60 mb-4">
            How We Work
          </p>
          <h2 className="font-display text-display-lg font-light text-black max-w-[20ch] leading-tight">
            What Sets Us Apart!
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ number, title, description, bg }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div 
                className="relative p-8 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: bg }}
              >
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-9 w-6 lg:w-9 h-px bg-black z-10" />
                )}

                {/* Number */}
                <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-black/60 mb-6 inline-block px-3 py-1 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {number}
                </span>

                {/* Title */}
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-black mb-4 leading-tight uppercase">
                  {title}
                </h3>

                {/* Line accent */}
                <div className="w-10 h-1 bg-black mb-5" />

                {/* Description */}
                <p className="font-sans text-sm md:text-base font-medium text-black/80 leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
