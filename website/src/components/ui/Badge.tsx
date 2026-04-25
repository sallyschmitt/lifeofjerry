"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "live" | "building" | "offline" | "default";
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({
  children,
  variant = "default",
  pulse = false,
  className = "",
  style,
}: BadgeProps) {
  const variants = {
    live: "bg-[--terminal-emerald]/10 text-[--terminal-emerald] border-[--terminal-emerald]/30",
    building: "bg-[--terminal-amber]/10 text-[--terminal-amber] border-[--terminal-amber]/30",
    offline: "bg-red-500/10 text-red-400 border-red-500/30",
    default: "bg-[--surface-container] text-[--text-muted] border-[--outline]",
  };

  return (
    <span
      style={style}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {pulse && (
        <span
          className={`w-2 h-2 rounded-full ${
            variant === "live"
              ? "bg-[--terminal-emerald]"
              : variant === "building"
              ? "bg-[--terminal-amber]"
              : "bg-red-400"
          } ${pulse ? "animate-pulse" : ""}`}
        />
      )}
      {children}
    </span>
  );
}
