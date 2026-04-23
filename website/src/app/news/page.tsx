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
    id: "6",
    title: "Google Cloud Next 2026: Gemini Enterprise Agent Platform, $750M Partner Fund, and Next-Gen TPUs",
    source: "CRN",
    sourceUrl: "https://www.crn.com/news/ai/2026/google-cloud-next-2026-the-biggest-news-on-gemini-agentic-ai-tpus",
    date: "2026-04-22",
    summary: "Google Cloud Next 2026 unveiled the Gemini Enterprise Agent Platform, a $750 million partner fund for AI adoption, next-gen Tensor Processing Units, and Workspace Intelligence. The moves signal Google's full commitment to an agentic AI infrastructure layer for enterprises.",
    category: "Enterprise"
  },
  {
    id: "7",
    title: "Alipay Launches AI Pay — Autonomous Agents Can Now Make Payments on Your Behalf",
    source: "MSN",
    sourceUrl: "https://www.msn.com/en-us/news/technology/chinas-alipay-launches-ai-pay-for-autonomous-agents/ar-AA21shSr",
    date: "2026-04-21",
    summary: "China's Alipay launched an AI Pay service enabling autonomous AI agents to make purchases and complete payments based on user instructions. After voice command authorization and identity verification, agents can handle transactions autonomously — a major step toward agentic commerce.",
    category: "Agents"
  },
  {
    id: "8",
    title: "Infosys Partners with OpenAI to Deploy Codex Across Enterprise Workflows",
    source: "TechCircle",
    sourceUrl: "https://www.techcircle.in/2026/04/23/infosys-ties-up-with-openai-to-scale-enterprise-ai-adoption",
    date: "2026-04-22",
    summary: "Infosys announced a strategic collaboration with OpenAI to integrate Codex into its Topaz platform, accelerating enterprise AI adoption across software engineering, legacy modernization, and DevOps. The partnership reflects the shift from AI pilots to scaled agentic deployment.",
    category: "Enterprise"
  },
  {
    id: "9",
    title: "Microsoft Copilot Goes Multi-Model: GPT Drafts, Claude Critiques in Researcher Agent",
    source: "GeekWire",
    sourceUrl: "https://www.geekwire.com/2026/gpt-drafts-claude-critiques-microsoft-blends-rival-ai-models-in-new-copilot-upgrade/",
    date: "2026-04-18",
    summary: "Microsoft is blending rival AI models inside Copilot's Researcher agent: GPT generates initial drafts while Claude reviews and critiques them. The multi-model approach signals the end of the single-model era in enterprise AI — and raises the bar for agent output quality.",
    category: "Models"
  },
  {
    id: "10",
    title: "Rubrik Launches Agent Cloud for Gemini Enterprise Agent Platform on Google Cloud",
    source: "Yahoo Finance",
    sourceUrl: "https://finance.yahoo.com/sectors/technology/articles/rubrik-secures-accelerates-ai-agents-120000395.html",
    date: "2026-04-22",
    summary: "Rubrik launched Rubrik Agent Cloud (RAC) for Google's Gemini Enterprise Agent Platform, adding a layer of semantic governance and operational resilience for enterprise AI agent deployments. The collaboration addresses a critical gap: securing autonomous agents at scale.",
    category: "Agents"
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