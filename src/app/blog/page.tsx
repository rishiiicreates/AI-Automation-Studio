import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Brokkrs",
  description: "Read our latest thinking on AI automation, agentic systems, web development, and digital transformation.",
};

const posts = [
  {
    title: "Why RAG is the Fastest Way to Unlock Your Internal Data",
    date: "May 12, 2024",
    category: "RAG",
    slug: "rag-fastest-way-to-unlock-data",
    excerpt: "Stop fine-tuning models from scratch. Retrieval-Augmented Generation is the key to accurate, context-aware AI.",
  },
  {
    title: "The 5 Agentic AI Mistakes That Kill Production Systems",
    date: "April 28, 2024",
    category: "Agentic AI",
    slug: "5-agentic-ai-mistakes",
    excerpt: "Agentic systems aren't magic. Without robust guardrails and state management, they fail in production.",
  },
  {
    title: "Workflow Automation vs. Hardcoded Scripts: Scaling Operations",
    date: "April 15, 2024",
    category: "Workflow Automation",
    slug: "workflow-automation-vs-scripts",
    excerpt: "Why modern workflow orchestration tools are replacing brittle cron jobs and isolated scripts.",
  }
];

import BackgroundStoryBlog from "@/components/BackgroundStoryBlog";

export default function BlogPage() {
  return (
    <div className="min-h-screen relative overflow-hidden text-black">
      <BackgroundStoryBlog />
      <div className="css-paper-texture fixed inset-0 pointer-events-none z-50" />
      <div className="pt-32 pb-20 container-narrow relative z-10">
        <div className="mb-16">
          <p className="text-label font-sans uppercase tracking-widest text-accent mb-4">Insights</p>
          <h1 className="font-display text-display-xl font-light text-black leading-tight">Blog</h1>
        </div>

        <div className="space-y-0 divide-y divide-black/8">
          {posts.map(({ title, date, category, slug, excerpt }) => (
            <Link href={`/blog/${slug}`} key={slug} className="group py-10 block">
              <article>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-label font-sans uppercase tracking-widest text-accent/70 text-black/70">{category}</span>
                  <span className="text-[0.65rem] font-sans text-black/40">
                    {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-light text-black leading-tight mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {title}
                </h2>
                <p className="font-sans text-sm text-black/60 leading-relaxed max-w-[60ch] mb-4">{excerpt}</p>
                <span className="text-label font-sans uppercase tracking-widest text-black/50 group-hover:text-brand-blue transition-colors duration-300">
                  Read Article →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
