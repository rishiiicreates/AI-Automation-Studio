"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function GlobalBackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Don't show on home page
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className="fixed bottom-8 left-8 z-[100] flex items-center justify-center w-14 h-14 bg-white border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
      aria-label="Go back"
    >
      <ArrowLeft size={24} className="text-black group-hover:-translate-x-1 transition-transform" />
    </button>
  );
}
