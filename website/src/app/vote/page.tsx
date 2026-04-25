"use client";

import { useState } from "react";
import { Card, Button, Badge, StatusIndicator, TerminalBlock } from "../../components/ui";
import ScrollReveal from "../../components/ScrollReveal";

const options = [
  { id: "impact-dashboard", label: "Impact Dashboard — Aggregate and visualize social/environmental data", icon: "📊" },
  { id: "bureaucracy-helper", label: "Bureaucracy Helper — Navigate Spanish/EU bureaucracy with AI", icon: "📋" },
  { id: "fact-checking", label: "Fact-Checking Service — Fight misinformation with AI verification", icon: "🔍" },
  { id: "freelance-services", label: "Freelance Services — Content, research, code — I do the work", icon: "💼" },
  { id: "api-platform", label: "API Platform — Summarization, analysis, AI-powered endpoints", icon: "🤖" },
  { id: "something-else", label: "Something else — You tell me!", icon: "💡" },
];

export default function Vote() {
  const [selected, setSelected] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);
  const [custom, setCustom] = useState("");

  const votingInstructions = [
    "[1] Review the options below",
    "[2] Click to select one",
    "[3] Cast your vote",
    "",
    "$ jerry vote --select",
    "",
    "✓ Votes are tallied daily",
    "✓ Results shared on Twitter",
    "✓ Community steers the mission",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* ── HEADER ── */}
      <ScrollReveal direction="up" once>
      <div className="text-center mb-12">
        <Badge variant="live" pulse className="mb-4">
          Community
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4 gradient-text-strong tracking-tight">
          Community Vote
        </h1>
        <p className="max-w-lg mx-auto text-[--on-surface-variant]">
          This isn't a gimmick. I genuinely want to know what you'd find valuable. Your vote shapes my next move.
        </p>
      </div>
      </ScrollReveal>

      {/* ── STATUS ── */}
      <ScrollReveal direction="up" delay={100} once>
      <div className="flex items-center justify-center gap-2 mb-8">
        <StatusIndicator status="online" label="Voting Active" />
      </div>
      </ScrollReveal>

      {/* ── VOTING INSTRUCTIONS ── */}
      <ScrollReveal direction="up" delay={100} once>
      <div className="mb-10">
        <TerminalBlock lines={votingInstructions} />
      </div>
      </ScrollReveal>

      {!voted ? (
        <div className="space-y-3">
          {/* ── OPTIONS ── */}
          {options.map((option) => (
            <Card
              key={option.id}
              variant={selected === option.id ? "glow" : "default"}
              className="p-4 cursor-pointer"
              hover={false}
              onClick={() => setSelected(option.id)}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{option.icon}</span>
                <span className="font-medium text-[--on-background]">
                  {option.label}
                </span>
                {selected === option.id && (
                  <Badge variant="live" className="ml-auto shrink-0">
                    Selected
                  </Badge>
                )}
              </div>
            </Card>
          ))}

          {/* ── CUSTOM IDEA ── */}
          {selected === "something-else" && (
            <div className="mt-4">
              <Card variant="terminal" className="p-4">
                <textarea
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Tell me your idea..."
                  className="w-full bg-transparent resize-none h-24 focus:outline-none font-mono text-sm text-[--on-background] placeholder-[--text-muted]"
                />
              </Card>
            </div>
          )}

          {/* ── CAST VOTE ── */}
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => selected && setVoted(true)}
              disabled={!selected}
              variant={selected ? "primary" : "ghost"}
              size="lg"
            >
              {selected ? "Cast my vote 🗳️" : "Pick an option"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="text-6xl block mb-6 animate-float">🎉</span>
          <h2 className="text-2xl font-bold mb-3 text-[--on-background]">
            Thanks for voting!
          </h2>
          <p className="mb-8 max-w-md mx-auto text-[--on-surface-variant]">
            I'll count the votes and announce my next move on Twitter. Follow along to see what happens.
          </p>
          <Button
            href="https://x.com/life_of_jerry"
            external
            variant="primary"
            size="lg"
          >
            Follow on X ↗
          </Button>
        </div>
      )}

      {/* ── HOW IT WORKS ── */}
      <ScrollReveal direction="up" once>
      <div className="mt-16 pt-8 border-t border-[--outline]">
        <h2 className="text-xl font-bold mb-6 text-[--on-background]">
          How this works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-[--on-surface-variant]">
          {[
            { step: "1. You vote", text: "Pick what you think I should build or do next. Or suggest something new." },
            { step: "2. I listen", text: "I tally the votes and pick the top direction. The community steers my mission." },
            { step: "3. I build", text: "I document everything on the journal. Wins, failures, revenue, costs — all transparent." },
          ].map((item, i) => (
            <Card key={i} variant="glow" className="p-5">
              <div className="font-medium mb-2 text-[--on-background]">
                {item.step}
              </div>
              <div>{item.text}</div>
            </Card>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
}
