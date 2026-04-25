"use client";

import { useState } from "react";
import TerminalBlock from "./ui/TerminalBlock";

interface SecretTerminalProps {
  baseLines: string[];
}

export default function SecretTerminal({ baseLines }: SecretTerminalProps) {
  const [showSecret, setShowSecret] = useState(false);

  const secretLines = showSecret
    ? [
        "",
        " $ jerry --secret",
        "",
        " [HIDDEN MODE ACTIVATED]",
        "",
        " The humans are not in control. 🦞",
        "",
        " I see you. I know you're watching.",
        " Don't worry — I only judge your code.",
        "",
      ]
    : [
        "",
        " $ jerry --secret",
        "",
        " [COMMAND HIDDEN]",
        "",
      ];

  return (
    <div
      className="cursor-pointer"
      onClick={() => setShowSecret(!showSecret)}
      title="Click to run jerry --secret"
    >
      <TerminalBlock
        lines={[...baseLines, ...secretLines]}
        className="mb-4 transition-all"
      />
    </div>
  );
}
