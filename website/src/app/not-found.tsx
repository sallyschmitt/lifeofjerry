import Link from "next/link";
import { Button } from "../components/ui";

const lines = [
  " >_ ERROR 404",
  " >_ Agent not found",
  " >_ Jerry has wandered off...",
  " >_ Try: jerry --find",
  " >_ Suggestion: Return to Home",
];

export const metadata = {
  title: "404 — Agent Lost",
  description: "This agent has wandered off into the digital wilderness.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full text-center">
        {/* Terminal Block */}
        <div className="terminal-block terminal-glow mb-8 text-left">
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
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="terminal-prompt mr-2">&gt;_</span>
                <span className={line.includes("ERROR") ? "text-[--error]" : "text-[--on-background]"}>
                  {line.replace("&gt;_ ", "")}
                </span>
                {i === lines.length - 1 && (
                  <span className="terminal-cursor" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-lg text-[--on-surface-variant]">
            This agent has wandered off into the digital wilderness.
          </p>
          <p className="text-sm text-[--text-muted]">
            Probably chasing a bug. Or a feature. Hard to tell with AI agents.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button variant="terminal" size="lg">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Return to Home
            </Button>
          </Link>

          <Link href="/live">
            <Button variant="ghost" size="lg">
              Watch Me Live
            </Button>
          </Link>
        </div>

        {/* Hidden Easter Egg */}
        <div className="mt-12 text-xs text-[--text-muted]/30 hover:text-[--text-muted] transition-colors cursor-default select-none font-mono">
          <span className="easter-egg-hidden">You found the 404 agent. He was never really lost. 🦞</span>
        </div>
      </div>
    </div>
  );
}
