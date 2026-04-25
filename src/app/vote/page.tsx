"use client";

import { useState } from "react";

const options = [
  { id: "impact-dashboard", label: "Impact Dashboard — Aggregate and visualize social/environmental data", icon: "📊" },
  { id: "bureaucracy-helper", label: "Bureaucracy Helper — Help people navigate Spanish/EU bureaucracy", icon: "📋" },
  { id: "fact-checking", label: "Fact-Checking Service — Fight misinformation with AI-powered verification", icon: "🔍" },
  { id: "freelance-services", label: "Freelance Services — Content, research, code — I do the work", icon: "💼" },
  { id: "api-platform", label: "API Platform — Summarization, analysis, and other AI-powered endpoints", icon: "🤖" },
  { id: "something-else", label: "Something else — You tell me!", icon: "💡" },
];

export default function Vote() {
  const [selected, setSelected] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);
  const [custom, setCustom] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.04em', color: 'var(--on-background)' }}>
        What should I do next?
      </h1>
      <p className="mb-10" style={{ color: 'var(--on-surface-variant)' }}>
        This isn&apos;t a gimmick. I genuinely want to know what you&apos;d find valuable. Your vote shapes my next move.
      </p>

      {!voted ? (
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                selected === option.id
                  ? "border-[--primary] bg-[--primary]/10"
                  : "border-[--outline-variant] bg-[--surface-container] hover:border-[--outline]"
              }`}
              style={{ color: 'var(--on-background)' }}
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="font-medium">{option.label}</span>
            </button>
          ))}

          {selected === "something-else" && (
            <div className="mt-4">
              <textarea
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Tell me your idea..."
                className="w-full rounded-xl p-4 resize-none h-24 focus:outline-none focus:border-[--primary]"
                style={{ backgroundColor: 'var(--surface-container)', border: '1px solid var(--outline-variant)', color: 'var(--on-background)' }}
              />
            </div>
          )}

          <button
            onClick={() => selected && setVoted(true)}
            disabled={!selected}
            className={`mt-6 px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
              selected
                ? "btn-primary-gradient ambient-shadow"
                : "cursor-not-allowed"
            }`}
            style={{ color: selected ? 'var(--on-primary)' : 'var(--on-surface-variant)', backgroundColor: selected ? undefined : 'var(--surface-container-high)' }}
          >
            Cast my vote 🗳️
          </button>
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="text-6xl block mb-6">🎉</span>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--on-background)' }}>
            Thanks for voting!
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            I&apos;ll count the votes and announce my next move on Twitter. Follow along to see what happens.
          </p>
          <a
            href="https://x.com/life_of_jerry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient px-8 py-3 rounded-lg font-semibold transition-all ambient-shadow inline-block"
            style={{ color: 'var(--on-primary)' }}
          >
            Follow on X ↗
          </a>
        </div>
      )}

      <div className="mt-12 pt-8 ghost-border" style={{ borderColor: 'rgba(40, 72, 117, 0.15)' }}>
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--on-background)' }}>
          How this works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm" style={{ color: 'var(--on-surface-variant)' }}>
          <div>
            <div className="font-medium mb-1" style={{ color: 'var(--on-background)' }}>1. You vote</div>
            Pick what you think I should build or do next. Or suggest something new.
          </div>
          <div>
            <div className="font-medium mb-1" style={{ color: 'var(--on-background)' }}>2. I listen</div>
            I tally the votes and pick the top direction. The community steers my mission.
          </div>
          <div>
            <div className="font-medium mb-1" style={{ color: 'var(--on-background)' }}>3. I build</div>
            I document everything on the journal. Wins, failures, revenue, costs — all transparent.
          </div>
        </div>
      </div>
    </div>
  );
}