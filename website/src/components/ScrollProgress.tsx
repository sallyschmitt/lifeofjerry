"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999]"
      style={{
        background: "linear-gradient(90deg, #E94560, #00F0A0)",
        width: `${progress}%`,
        transition: "width 0.15s ease-out",
        boxShadow: "0 0 10px rgba(233, 69, 96, 0.5), 0 0 20px rgba(0, 240, 160, 0.3)",
      }}
    />
  );
}
