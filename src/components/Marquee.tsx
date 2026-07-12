"use client";

export default function Marquee() {
  return (
    <section className="w-full py-12 overflow-hidden bg-transparent border-y border-black/10">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {/* Double content to allow seamless loop (0% to -50%) */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {["MVP Development", "Agentic AI", "API Integrations", "DevOps & Cloud", "LLM Evaluation", "Fractional CTO"].map((text, j) => (
              <div key={j} className="flex items-center">
                <span className="text-4xl md:text-6xl font-medium tracking-tighter text-black mx-8">
                  {text}
                </span>
                <span className="w-4 h-4 rounded-full bg-[#a3bfff] mx-4" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
