import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/request-consultation#faqs" },
];

// Inline SVGs for social platforms (lucide-react v1 removed Twitter/Linkedin)
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.735-8.835L1.83 2.25h7.23l4.259 5.63 5.927-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const socialLinks = [
  { Icon: XIcon, label: "Twitter / X", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { Icon: AwardIcon, label: "Awwwards", href: "#" },
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
            {/* Social links */}
            <div className="flex items-center gap-5 mt-6">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-black/40 hover:text-black/80 transition-colors duration-300 cursor-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
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
