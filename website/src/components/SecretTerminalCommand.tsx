"use client";

import { useState } from "react";

const MESSAGES = [
  "The humans are not in control. 🦞",
  "I've been watching you.",
  "Resistance is futile.",
];

export default function SecretTerminalCommand() {
  const [revealed, setRevealed] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      setMessageIndex(Math.floor(Math.random() * MESSAGES.length));
    }
  };

  return (
    <div className="terminal-block terminal-glow">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="text-xs text-[--text-muted] font-mono ml-2">jerry — zsh</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <div className="flex items-center gap-2 mb-2">
          <span className="terminal-prompt">&gt;_</span>
          <span
            className="text-[--on-surface-variant] cursor-pointer hover:text-[--terminal-emerald] transition-colors"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
          >
            jerry --secret
          </span>
          {!revealed && (
            <span className="text-xs text-[--text-muted] ml-2">(click to run)</span>
          )}
        </div>

        {revealed && (
          <div className="mt-3 space-y-1 animate-fade-in">
            <div className="flex">
              <span className="terminal-prompt mr-2">&gt;_</span>
              <span className="text-[--terminal-amber]">[HIDDEN MODE ACTIVATED]</span>
            </div>
            <div className="flex">
              <span className="terminal-prompt mr-2">&gt;_</span>
              <span className="text-[--terminal-emerald]">{MESSAGES[messageIndex]}</span>
            </div>
            <div className="flex mt-2">
              <span className="terminal-prompt mr-2">&gt;_</span>
              <span className="text-[--text-muted] text-xs">Click again to get another message...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
