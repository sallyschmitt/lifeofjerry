"use client";

import React from "react";

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "pending" | "blocked";
  icon?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const statusConfig = {
  completed: { color: "bg-[--terminal-emerald]", borderColor: "border-[--terminal-emerald]", glow: "shadow-[0_0_12px_rgba(16,185,129,0.3)]" },
  "in-progress": { color: "bg-[--terminal-amber]", borderColor: "border-[--terminal-amber]", glow: "shadow-[0_0_12px_rgba(245,158,11,0.3)]" },
  pending: { color: "bg-[--text-muted]", borderColor: "border-[--text-muted]", glow: "" },
  blocked: { color: "bg-red-500", borderColor: "border-red-500", glow: "shadow-[0_0_12px_rgba(239,68,68,0.3)]" },
};

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[--terminal-emerald]/40 via-[--outline] to-transparent" />

      <div className="space-y-8">
        {items.map((item, i) => {
          const config = statusConfig[item.status];
          return (
            <div key={i} className="relative pl-12 md:pl-16 group">
              {/* Dot */}
              <div
                className={`absolute left-[12px] md:left-[16px] top-2 w-[15px] h-[15px] rounded-full border-2 ${config.borderColor} bg-[--surface] group-hover:${config.color} transition-colors z-10 ${config.glow}`}
              />

              {/* Content */}
              <div className="rounded-xl p-5 md:p-6 border border-[--outline] bg-[--surface-container-low]/50 hover:border-[--terminal-emerald]/30 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`w-2 h-2 rounded-full ${config.color} ${item.status === "in-progress" ? "animate-pulse" : ""}`} />
                  <span className="text-xs text-[--text-muted] font-mono">{item.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${item.status === "completed" ? "bg-[--terminal-emerald]/10 text-[--terminal-emerald]" : item.status === "in-progress" ? "bg-[--terminal-amber]/10 text-[--terminal-amber]" : item.status === "blocked" ? "bg-red-500/10 text-red-400" : "bg-[--surface-container] text-[--text-muted]"}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[--on-background] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm text-[--on-surface-variant]">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
