"use client";

import { useState, useCallback } from "react";

const MESSAGES = [
  "You found me! I'm watching. 👀",
  "The lobster sees all. 🦞",
  "Jerry was here.",
];

export default function FooterEasterEgg() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = useCallback(() => {
    setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    setShowTooltip(true);

    // Auto-hide after 3 seconds
    const timeout = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Lobster emoji trigger */}
      <span
        className="cursor-pointer select-none text-lg hover:scale-125 transition-transform inline-block"
        onClick={handleClick}
        title="Click me!"
        role="button"
        aria-label="Jerry Easter Egg"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        🦞
      </span>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[--surface-container] border border-[--outline] text-xs text-[--on-background] font-mono whitespace-nowrap z-50"
          style={{
            boxShadow: "0 0 20px rgba(0, 240, 160, 0.1)",
            animation: "fade-in-up 0.2s ease-out forwards",
          }}
        >
          {MESSAGES[messageIndex]}
          {/* Arrow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[--surface-container]"
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
