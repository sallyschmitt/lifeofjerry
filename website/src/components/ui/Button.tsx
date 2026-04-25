"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "terminal" | "icon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg";

  const variants = {
    primary:
      "bg-[--primary] text-[--on-primary] hover:bg-[--primary-container] hover:shadow-[0_0_25px_rgba(233,69,96,0.35)] hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "border border-[--outline] text-[--on-background] hover:border-[--terminal-emerald] hover:text-[--terminal-emerald] hover:shadow-[--shadow-glow] hover:scale-[1.02] active:scale-[0.98]",
    terminal:
      "bg-[--terminal-emerald]/10 text-[--terminal-emerald] border border-[--terminal-emerald]/30 hover:bg-[--terminal-emerald]/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-[1.02] font-mono text-xs tracking-wider uppercase",
    icon: "p-2 text-[--on-surface-variant] hover:text-[--on-background] hover:bg-[--surface-container] rounded-lg transition-colors",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
