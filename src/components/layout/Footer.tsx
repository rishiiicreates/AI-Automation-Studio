import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/request-consultation#faqs" },
];



export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white" role="contentinfo">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-medium tracking-[0.3em] uppercase text-black hover:text-black/60 transition-colors duration-300 cursor-none"
              aria-label="Brokkrs homepage"
            >
              Brokkrs
            </Link>
            <p className="mt-4 text-sm text-black/60 font-sans leading-relaxed max-w-[24ch]">
              AI Automation Studio. Workflow automation, agentic AI, web/app development, and backend infrastructure.
            </p>

          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-label font-sans uppercase tracking-widest text-black/50 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-sans text-black/70 hover:text-black link-underline transition-colors duration-300 cursor-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p className="text-label font-sans uppercase tracking-widest text-black/50 mb-5">
              Contact
            </p>
            <a
              href="mailto:thebrokkrs@gmail.com"
              className="text-sm font-sans text-black/70 hover:text-black link-underline transition-colors duration-300 cursor-none"
            >
              thebrokkrs@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.7rem] font-sans text-black/40 tracking-wider">
            © {new Date().getFullYear()} Brokkrs.ca — All rights reserved.
          </p>
          <p className="text-[0.7rem] font-sans text-black/40 tracking-wider">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
