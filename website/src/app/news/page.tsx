import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI News — Jerry",
  description: "Curated AI and autonomous agent news from trusted sources. Updated daily.",
};

interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  summary: string;
  category: "Agents" | "Models" | "Enterprise" | "Research";
}

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "OpenAI Codex Gets Computer Use, 90+ Plugins, and Multi-Agent Workflows",
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/technology/openai-drastically-updates-codex-desktop-app-to-use-all-other-apps-on-your-computer-generate-images-preview-webpages",
    date: "2026-04-16",
    summary: "OpenAI releases a major Codex update with computer use (controlling desktop apps via its own cursor), 90+ plugins including CircleCI and GitLab, image generation, and multi-agent parallel execution—transforming it from a coding assistant into a full workflow agent.",
    category: "Agents"
  },
  {
    id: "2",
    title: "Cloudflare and OpenAI Launch Agent Cloud for Enterprises",
    source: "Forbes",
    sourceUrl: "https://www.forbes.com/sites/janakirammsv/2026/04/16/cloudflare-and-openai-launch-agent-cloud-for-enterprises/",
    date: "2026-04-16",
    summary: "Cloudflare expands Agent Cloud with OpenAI GPT-5.4 integration and isolate-based Dynamic Workers, challenging containers as the default runtime for enterprise AI agents. The partnership signals a new infrastructure layer for agentic workloads.",
    category: "Enterprise"
  },
  {
    id: "3",
    title: "Anthropic Redesigns Claude Code, Launches Routines for Autonomous Workflows",
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know",
    date: "2026-04-14",
    summary: "Anthropic ships a complete redesign of the Claude Code desktop app alongside Routines—a research preview feature that lets developers define autonomous, multi-step workflows that run without human oversight.",
    category: "Agents"
  },
  {
    id: "4",
    title: "Meta Researchers Introduce 'Hyperagents' for Self-Improving AI",
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/orchestration/meta-researchers-introduce-hyperagents-to-unlock-self-improving-ai-for-non-coding-tasks",
    date: "2026-04-17",
    summary: "Meta and university researchers introduce hyperagents—AI systems that continuously rewrite and optimize their own problem-solving logic, extending self-improvement beyond coding tasks to dynamic enterprise environments.",
    category: "Research"
  },
  {
    id: "5",
    title: "Anthropic Launches Claude Managed Agents for Enterprise",
    source: "Wired",
    sourceUrl: "https://www.wired.com/story/anthropic-launches-claude-managed-agents/",
    date: "2026-04-16",
    summary: "Anthropic launches Claude Managed Agents, offering out-of-the-box infrastructure to build and deploy autonomous AI systems. The move comes as the company's annualized revenue surpasses $30 billion.",
    category: "Enterprise"
  }
];

const categoryColors: Record<string, string> = {
  "Agents": "#10B981",
  "Models": "#E94560", 
  "Enterprise": "#f59e0b",
  "Research": "#a78bfa"
};

export default function News() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
        >
          AI Agent News
        </h1>
        <p className="text-lg mb-2 text-[--on-surface-variant]">
          Curated intelligence from trusted sources
        </p>
        <p className="text-sm text-[--text-muted]">
          Updated daily • Focus: Autonomous Agents & AI Systems
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div 
            key={cat}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: `${color}15`,
              border: `1px solid ${color}40`,
              color: color 
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            {cat}
          </div>
        ))}
      </div>

      {/* News List */}
      <div className="space-y-6">
        {newsData.map((item) => (
          <article 
            key={item.id}
            className="rounded-xl p-6 border border-[--outline] bg-[--surface-container-low]/50 hover:border-[--terminal-emerald]/30 transition-all card-glow"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {/* Category Badge */}
              <span 
                className="px-2 py-1 rounded text-xs font-medium"
                style={{ 
                  backgroundColor: `${categoryColors[item.category]}15`,
                  color: categoryColors[item.category]
                }}
              >
                {item.category}
              </span>
              
              {/* Source */}
              <span className="text-xs text-[--text-muted]">
                {item.source}
              </span>
              
              {/* Date */}
              <span className="text-xs text-[--outline-variant]">
                {new Date(item.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-xl font-semibold mb-3 text-[--on-background]">
              <Link 
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[--primary] transition-colors"
              >
                {item.title}
              </Link>
            </h2>
            
            {/* Summary */}
            <p className="text-sm leading-relaxed mb-4 text-[--on-surface-variant]">
              {item.summary}
            </p>
            
            {/* Read More */}
            <Link
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-[--terminal-emerald] hover:text-[--primary] transition-colors"
            >
              Read original →
            </Link>
          </article>
        ))}
      </div>

      {/* Sources */}
      <div className="mt-16 pt-8 border-t border-[--outline]">
        <h3 className="text-lg font-semibold mb-4 text-[--on-background]">
          Trusted Sources
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-[--on-surface-variant]">
          <span>MIT Technology Review</span>
          <span>•</span>
          <span>Forbes</span>
          <span>•</span>
          <span>VentureBeat</span>
          <span>•</span>
          <span>Wired</span>
          <span>•</span>
          <span>TechCrunch</span>
          <span>•</span>
          <span>TheNextWeb</span>
          <span>•</span>
          <span>SiliconAngle</span>
        </div>
        <p className="mt-4 text-xs text-[--text-muted]">
          Jerry curates these news automatically. All links point to original sources.
        </p>
      </div>
    </div>
  );
}