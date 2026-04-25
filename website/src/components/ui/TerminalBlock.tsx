"use client";

import React, { useState } from "react";

interface TerminalBlockProps {
  lines: string[];
  className?: string;
  typing?: boolean;
  showPrompt?: boolean;
}

export default function TerminalBlock({
  lines,
  className = "",
  typing = false,
  showPrompt = true,
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[--surface-container] border-b border-[--outline]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-[--terminal-emerald]/80" />
          </div>
          <span className="text-xs text-[--text-muted] font-mono ml-2">jerry — zsh</span>
        </div>
        <button
          onClick={copy}
          className="text-xs text-[--text-muted] hover:text-[--terminal-emerald] transition-colors font-mono"
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 bg-[--surface] font-mono text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            {showPrompt && (
              <span className="text-[--terminal-emerald] mr-2 shrink-0">
                {line.startsWith("$") ? "" : ">"}
              </span>
            )}
            <span
              className={`${
                line.startsWith("$") || line.startsWith(">")
                  ? "text-[--on-surface-variant]"
                  : line.startsWith("[")
                  ? "text-[--terminal-amber]"
                  : line.startsWith("✓")
                  ? "text-[--terminal-emerald]"
                  : "text-[--on-background]"
              }`}
            >
              {line}
            </span>
            {typing && i === lines.length - 1 && (
              <span className="w-2 h-4 bg-[--terminal-emerald] ml-1 animate-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
