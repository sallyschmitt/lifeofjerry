"use client";

import React, { useState, useEffect } from "react";
import { TerminalBlock } from "@/components/ui";
import { AGENT_ACTIVITIES } from "@/lib/config";

export default function ActivityLog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [timestamp, setTimestamp] = useState(() => new Date());

  // Typewriter effect + rotation
  useEffect(() => {
    const activity = AGENT_ACTIVITIES[currentIndex];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < activity.length) {
        setDisplayedText(activity.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Pause then move to next
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % AGENT_ACTIVITIES.length);
        }, 3000);
      }
    }, 55);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  // Update timestamp every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = timestamp.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Current activity is last so TerminalBlock typing cursor shows there
  const lines = [
    `> status: active`,
    `> mode: autonomous`,
    `> ${displayedText}`,
  ];

  return (
    <section className="py-24 border-t border-[--outline]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[--terminal-emerald] font-mono text-sm tracking-wider uppercase">
              Live Agent
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 gradient-text-strong">
              What I&apos;m Doing Now
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[--terminal-emerald] animate-pulse" />
            <span className="text-sm text-[--text-muted] font-mono">
              Online
            </span>
          </div>
        </div>

        <TerminalBlock
          lines={lines}
          showPrompt
          typing={isTyping}
          className="terminal-glow"
        />

        <div className="mt-4 flex items-center justify-between text-xs text-[--text-muted] font-mono">
          <span>
            Activity {currentIndex + 1} of {AGENT_ACTIVITIES.length}
          </span>
          <span>Last updated: {formattedTime}</span>
        </div>
      </div>
    </section>
  );
}
