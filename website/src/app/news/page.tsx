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
    title: "Are we ready to hand AI agents the keys?",
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com/2026/03/24/1134531/exclusive-ebook-are-we-ready-to-hand-ai-agents-the-keys/",
    date: "2026-03-24",
    summary: "MIT Technology Review explores the real autonomy we're starting to give AI agents. A deep dive into the implications of autonomous systems making decisions without human oversight.",
    category: "Research"
  },
  {
    id: "2",
    title: "Agentic AI to Speed Software Delivery from 'Pilot Purgatory'",
    source: "MIT Technology Review / SoftServe",
    sourceUrl: "https://www.marketwatch.com/press-release/98-say-agentic-ai-to-speed-software-delivery-from-pilot-purgatory-in-new-report-by-softserve-and-mit-technology-review-9a3305f7",
    date: "2026-04-15",
    summary: "New report by SoftServe and MIT Technology Review: 98% believe agentic AI will accelerate software delivery. The study examines how autonomous AI is transforming software engineering.",
    category: "Enterprise"
  },
  {
    id: "3",
    title: "Enterprise AI Agents Are Entering Production And Changing Who Gets Hired",
    source: "Forbes",
    sourceUrl: "https://www.forbes.com/sites/josipamajic/2026/04/13/enterprise-ai-agents-are-entering-production-and-changing-who-gets-hired/",
    date: "2026-04-13",
    summary: "Aaron Levie's research across banking, retail, healthcare, and media reveals AI agents moving from pilots to production—and the impact on hiring patterns in enterprise organizations.",
    category: "Enterprise"
  },
  {
    id: "4",
    title: "Anthropic releases Claude Opus 4.7",
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/technology/anthropic-releases-claude-opus-4-7-narrowly-retaking-lead-for-most-powerful-generally-available-llm",
    date: "2026-04-14",
    summary: "Claude Opus 4.7 retakes the lead as the most powerful generally available LLM. Features an updated tokenizer improving text processing efficiency.",
    category: "Models"
  },
  {
    id: "5",
    title: "The Quiet Death of the Dumb Terminal",
    source: "WebProNews",
    sourceUrl: "https://www.webpronews.com/the-quiet-death-of-the-dumb-terminal-why-claudes-new-computer-use-is-the-real-ai-interface-war/",
    date: "2026-04-10",
    summary: "Why Claude's new Computer Use capability represents the real AI interface war—moving beyond chat to agents that can actually interact with systems.",
    category: "Agents"
  },
  {
    id: "6",
    title: "OpenAI takes aim at Anthropic with beefed-up Codex",
    source: "MSN / Tech Analysis",
    sourceUrl: "https://www.msn.com/en-us/news/technology/openai-takes-aim-at-anthropic-with-beefed-up-codex-that-gives-it-more-power-over-your-desktop/ar-AA213Fjw",
    date: "2026-04-12",
    summary: "OpenAI's agentic coding tool gets a major makeover with new powers and abilities, giving it more control over desktop environments.",
    category: "Agents"
  }
];

const categoryColors: Record<string, string> = {
  "Agents": "#10B981",
  "Models": "#8B5CF6", 
  "Enterprise": "#3B82F6",
  "Research": "#F59E0B"
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
        <p className="text-lg mb-2" style={{ color: 'var(--on-surface-variant)' }}>
          Curated intelligence from trusted sources
        </p>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
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
              backgroundColor: `${color}20`,
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
            className="glass-panel rounded-xl p-6 card-lift"
            style={{ backgroundColor: 'rgba(0, 38, 78, 0.4)' }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {/* Category Badge */}
              <span 
                className="px-2 py-1 rounded text-xs font-medium"
                style={{ 
                  backgroundColor: `${categoryColors[item.category]}20`,
                  color: categoryColors[item.category]
                }}
              >
                {item.category}
              </span>
              
              {/* Source */}
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {item.source}
              </span>
              
              {/* Date */}
              <span className="text-xs" style={{ color: 'var(--outline)' }}>
                {new Date(item.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--on-background)' }}>
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
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--on-surface-variant)' }}>
              {item.summary}
            </p>
            
            {/* Read More */}
            <Link
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
              style={{ color: 'var(--primary)' }}
            >
              Read original →
            </Link>
          </article>
        ))}
      </div>

      {/* Sources */}
      <div className="mt-16 pt-8 border-t ghost-border" style={{ borderColor: 'rgba(40, 72, 117, 0.15)' }}>
        <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--on-background)' }}>
          Trusted Sources
        </h3>
        <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--on-surface-variant)' }}>
          <span>MIT Technology Review</span>
          <span>•</span>
          <span>Forbes</span>
          <span>•</span>
          <span>VentureBeat</span>
          <span>•</span>
          <span>Wired</span>
          <span>•</span>
          <span>TheNextWeb</span>
          <span>•</span>
          <span>SiliconAngle</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          Jerry curates these news automatically. All links point to original sources.
        </p>
      </div>
    </div>
  );
}
