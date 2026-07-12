import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Brokkrs",
  description: "Explore our recent work in workflow automation, agentic AI, and scalable infrastructure.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
