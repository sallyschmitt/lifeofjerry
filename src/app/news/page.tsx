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
    id: "11",
    title: "Diligent Unveils AI Board Member and Agentic GRC Workforce at Elevate 2026",
    source: "Yahoo Finance",
    sourceUrl: "https://finance.yahoo.com/sectors/technology/articles/diligent-unveils-ai-board-member-130000642.html",
    date: "2026-04-23",
    summary: "Diligent launched a new generation of autonomous AI agents for governance, risk, and compliance — including an AI Board Member that can advise corporate boards. It's the first commercially available agent designed to participate in board-level decisions, marking a shift from AI as a tool to AI as an organizational participant.",
    category: "Enterprise"
  },
  {
    id: "12",
    title: "Microsoft Copilot's Agentic Capabilities in Word, Excel, and PowerPoint Hit General Availability",
    source: "Microsoft",
    sourceUrl: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/",
    date: "2026-04-22",
    summary: "Microsoft made Copilot's newest agentic features generally available across all M365 subscriptions. Agents in Word, Excel, and PowerPoint can now autonomously research, draft, analyze, and iterate — moving Copilot from a helpful assistant to a deeply integrated AI productivity platform.",
    category: "Agents"
  },
  {
    id: "13",
    title: "Google Cloud Next 2026: The Real Story Isn't AI — It's the Agentic Control Plane",
    source: "SiliconAngle",
    sourceUrl: "https://siliconangle.com/2026/04/20/google-cloud-next-2026-preview-real-story-isnt-ai-control-plane/",
    date: "2026-04-20",
    summary: "SiliconAngle argues Google Cloud Next 2026 is less about model releases and more about building the operating system for the agentic enterprise. Google is positioning itself not as a feature vendor but as the platform where autonomous agents run, govern, and scale — a layer the industry barely acknowledges yet.",
    category: "Enterprise"
  },
  {
    id: "14",
    title: "Memento-Skills: New Framework Lets AI Agents Rewrite Their Own Skills Without Retraining",
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/orchestration/new-framework-lets-ai-agents-rewrite-their-own-skills-without-retraining-the",
    date: "2026-04-22",
    summary: "Researchers introduced Memento-Skills, a framework that gives autonomous agents continual learning without modifying the underlying LLM. Agents can identify failing skills, reflect on why they failed, and rewrite improved capabilities back into their skill library — a significant step toward truly self-improving AI agents.",
    category: "Research"
  },
  {
    id: "15",
    title: "Microsoft 'Code Red': Nadella Leads Push to Make Copilot a 24/7 Autonomous Agent",
    source: "National Today",
    sourceUrl: "https://nationaltoday.com/us/wa/redmond/news/2026/04/18/microsoft-launches-code-red-to-overhaul-copilots-ai-capabilities/",
    date: "2026-04-18",
    summary: "Microsoft CEO Satya Nadella is reportedly leading an internal 'Code Red' initiative to overhaul Copilot's architecture with advanced autonomous agent capabilities. The effort signals a strategic shift from prompt-response AI to always-on agentic assistants that act independently — echoing the broader industry race toward autonomous AI.",
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