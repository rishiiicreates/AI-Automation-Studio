import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Brokkrs",
  description: "We build autonomous systems, RAG pipelines, and scalable web infrastructure.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
