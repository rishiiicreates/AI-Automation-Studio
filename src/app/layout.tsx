import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Brokkrs | AI Automation Studio",
  description: "Brokkrs is an AI automation studio. We build multi-agent systems, workflow automations, RAG pipelines, and scalable web/app infrastructure.",
};

import Header from "@/components/Header";
import FooterWrapper from "@/components/FooterWrapper";
import { SquiggleDoodle, StarDoodle, CircleDoodle } from "@/components/Doodles";
import GlobalBackButton from "@/components/ui/GlobalBackButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-black selection:bg-brand-blue selection:text-white relative flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
        {/* Subtle light background pattern mimicking Wix */}
        <div 
          className="pointer-events-none fixed inset-0 z-[-1] h-full w-full opacity-30"
          style={{ backgroundImage: `radial-gradient(circle at 15% 50%, rgba(255, 90, 0, 0.05), transparent 25%), radial-gradient(circle at 85% 30%, rgba(18, 57, 184, 0.05), transparent 25%)` }}
        />
        
        {/* Global Floating Background Doodles for consistency across all pages */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <StarDoodle className="absolute top-[15%] left-[5%] w-10 h-10 text-brand-blue opacity-20 rotate-12" />
          <CircleDoodle className="absolute top-[40%] right-[10%] w-16 h-16 text-brand-orange opacity-20 rotate-45" />
          <SquiggleDoodle className="absolute bottom-[20%] left-[10%] w-20 h-10 text-brand-pink opacity-20 -rotate-12" />
          <StarDoodle className="absolute bottom-[10%] right-[20%] w-12 h-12 text-brand-yellow opacity-30 -rotate-[20deg]" />
        </div>
        
        <Preloader />
        <GlobalBackButton />
        <SmoothScrolling>
          <div className="relative flex flex-col min-h-screen">
            
            {/* Pure CSS Seamless Crumpled Paper Texture - Fixed to viewport for 60fps! */}
            <div className="css-paper-texture !fixed !inset-0 !h-screen !w-screen" />
            
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <FooterWrapper />
            </div>

          </div>
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
