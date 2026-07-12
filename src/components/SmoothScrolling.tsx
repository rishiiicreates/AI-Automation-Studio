"use client";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.07, wheelMultiplier: 1, smoothWheel: true }} autoRaf={false}>
      <SmoothScrollingInner>{children}</SmoothScrollingInner>
    </ReactLenis>
  );
}

function SmoothScrollingInner({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    if (!lenis) return;
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(ticker);
  }, [lenis]);

  return <>{children}</>;
}
