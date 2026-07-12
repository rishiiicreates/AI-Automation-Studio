import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

import RagBlog from "./content/RagBlog";
import AgenticMistakesBlog from "./content/AgenticMistakesBlog";
import WorkflowBlog from "./content/WorkflowBlog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | Brokkrs Blog`,
    description: `Read our latest thinking on ${title}.`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Since this is a template, we just format the slug into a title
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="pt-32 pb-20 container-narrow min-h-screen">
      <div className="mb-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/50 hover:text-brand-blue transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <span className="block text-label font-sans uppercase tracking-widest text-brand-orange mb-4">Article</span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-black/60 text-sm font-medium border-b-2 border-black/10 pb-8">
          <span>By Brokkrs Team</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>

      <article className="prose prose-lg prose-black max-w-none font-sans text-black/80">
        {slug === "rag-fastest-way-to-unlock-data" && <RagBlog />}
        {slug === "5-agentic-ai-mistakes" && <AgenticMistakesBlog />}
        {slug === "workflow-automation-vs-scripts" && <WorkflowBlog />}

        {slug !== "rag-fastest-way-to-unlock-data" && slug !== "5-agentic-ai-mistakes" && slug !== "workflow-automation-vs-scripts" && (
          <>
            <p className="lead text-2xl font-light text-black mb-8">
              This is a full article view for <strong>{title}</strong>. 
            </p>
            <p className="mb-6">
              In the modern enterprise, everything is about operational leverage. 
              The intersection of AI and infrastructure is where true performance happens. 
              When we build automation systems, we don't just focus on the code, but how it scales.
            </p>
            <h2 className="text-3xl font-bold text-black mt-12 mb-6">The Engineering Approach</h2>
            <p className="mb-6">
              Our methodology relies on rigorous architecture and a brutalist approach to discarding brittle logic.
              Every API call must justify its existence. We leverage advanced orchestration and agentic patterns to build systems that scale seamlessly.
            </p>
            <div className="bg-[#fceba7] p-8 md:p-12 border-4 border-black rounded-[2rem] my-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold mb-4">Key Takeaways:</h3>
              <ul className="list-disc pl-5 space-y-3 font-medium">
                <li>Never compromise reliability for speed.</li>
                <li>Test every assumption with real production data.</li>
                <li>Optimize for infrastructure scalability first.</li>
              </ul>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
