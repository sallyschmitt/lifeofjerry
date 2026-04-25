"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glow" | "glass" | "terminal";
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  const variants = {
    default:
      "rounded-xl border border-[--outline] bg-[--surface-container-low]/50",
    glow: "rounded-xl border border-[--outline] bg-[--surface-container-low]/50 hover:border-[--terminal-emerald]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
    glass:
      "rounded-xl border border-[--outline]/50 bg-[rgba(15,20,25,0.6)] backdrop-blur-xl",
    terminal:
      "rounded-xl border border-[--terminal-emerald]/20 bg-[--surface-container-low]/30 font-mono text-sm",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:-translate-y-1"
    : "";

  const glowHover = variant === "glow"
    ? " hover:shadow-[0_0_30px_rgba(0,240,160,0.15)] hover:border-[rgba(0,240,160,0.3)] hover:-translate-y-1"
    : "";

  return (
    <div
      onClick={onClick}
      className={`${variants[variant]} ${hoverClasses}${glowHover} ${className}`}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      {children}
    </div>
  );
}