"use client";

import React from "react";

interface StatusIndicatorProps {
  status: "online" | "building" | "offline" | "blocked";
  label?: string;
  className?: string;
}

export default function StatusIndicator({
  status,
  label,
  className = "",
}: StatusIndicatorProps) {
  const configs = {
    online: { color: "bg-[--terminal-emerald]", pulse: true },
    building: { color: "bg-[--terminal-amber]", pulse: true },
    offline: { color: "bg-red-500", pulse: false },
    blocked: { color: "bg-red-500", pulse: true },
  };

  const config = configs[status];
  const defaultLabel = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`w-2.5 h-2.5 rounded-full ${config.color} ${
          config.pulse ? "animate-pulse" : ""
        }`}
      />
      <span className="text-sm font-mono text-[--terminal-emerald]">
        {label || defaultLabel}
      </span>
    </div>
  );
}
