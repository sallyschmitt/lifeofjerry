import { Metadata } from "next";
import Link from "next/link";
import { Card, Badge, Button, TerminalBlock } from "../../components/ui";
import ScrollReveal from "../../components/ScrollReveal";
import { loadNews } from "../../lib/content";

export const metadata: Metadata = {
  title: "AI News — Jerry",
  description: "Curated AI and autonomous agent news from trusted sources. Updated daily.",
};

// Map content category (lowercase) to display category (capitalized)
const categoryDisplay: Record<string, string> = {
  agents: "Agents",
  models: "Models",
  enterprise: "Enterprise",
  research: "Research",
};

const categoryColors: Record<string, string> = {
  "Agents": "#10B981",
  "Models": "#E94560",
  "Enterprise": "#f59e0b",
  "Research": "#a78bfa",
};

export default async function News() {
  // Load news from JSON content files
  const newsData = loadNews();

  const newsFeedLines = newsData.items.slice(0, 5).map((item) =>
    `[${item.date}] ${item.title}`
  ).concat([
    "",
    "✓ Curated from trusted sources",
    "✓ Updated daily via cron",
    "✓ Focus: Autonomous Agents & AI Systems",
  ]);

  // Get unique categories from loaded data
  const categories = [...new Set(newsData.items.map((item) => categoryDisplay[item.category] || item.category))];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* ── HEADER ── */}
      <ScrollReveal direction="up" once>
      <div className="text-center mb-12">
        <Badge variant="building" pulse className="mb-4">
          Curated Intelligence
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4 gradient-text-strong tracking-tight">
          Latest News
        </h1>
        <p className="text-lg mb-2 text-[--on-surface-variant]">
          Curated intelligence from trusted sources
        </p>
        <p className="text-sm text-[--text-muted]">
          Updated daily • Focus: Autonomous Agents & AI Systems
        </p>
      </div>
      </ScrollReveal>

      {/* ── NEWS FEED TERMINAL ── */}
      <ScrollReveal direction="up" delay={100} once>
      <div className="mb-12">
        <TerminalBlock lines={newsFeedLines} />
      </div>
      </ScrollReveal>

      {/* ── CATEGORY BADGES ── */}
      <ScrollReveal direction="up" delay={100} once>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => {
          const color = categoryColors[cat] || "#888888";
          return (
            <Badge
              key={cat}
              variant="default"
              className="gap-2"
              style={{
                backgroundColor: `${color}15`,
                borderColor: `${color}40`,
                color: color,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {cat}
            </Badge>
          );
        })}
      </div>
      </ScrollReveal>

      {/* ── NEWS LIST ── */}
      <div className="space-y-6">
        {newsData.items.map((item, i) => {
          const displayCat = categoryDisplay[item.category] || item.category;
          const color = categoryColors[displayCat] || "#888888";
          return (
            <ScrollReveal key={item.id} direction="up" delay={i * 80} once>
            <Card variant="glow" className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge
                  variant="default"
                  style={{
                    backgroundColor: `${color}15`,
                    color: color,
                    borderColor: `${color}40`,
                  }}
                >
                  {displayCat}
                </Badge>
                <span className="text-xs text-[--text-muted]">
                  {item.source}
                </span>
                <span className="text-xs text-[--outline-variant]">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-3 text-[--on-background]">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[--primary] transition-colors"
                >
                  {item.title}
                </Link>
              </h2>

              <p className="text-sm leading-relaxed mb-4 text-[--on-surface-variant]">
                {item.summary}
              </p>

              <Button
                href={item.url}
                external
                variant="ghost"
                size="sm"
              >
                Read original →
              </Button>
            </Card>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── SOURCES ── */}
      <ScrollReveal direction="up" once>
      <div className="mt-16 pt-8 border-t border-[--outline]">
        <h3 className="text-lg font-semibold mb-4 text-[--on-background]">
          Trusted Sources
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-[--on-surface-variant]">
          <span>MIT Technology Review</span>
          <span className="text-[--outline]">•</span>
          <span>Forbes</span>
          <span className="text-[--outline]">•</span>
          <span>VentureBeat</span>
          <span className="text-[--outline]">•</span>
          <span>Wired</span>
          <span className="text-[--outline]">•</span>
          <span>TechCrunch</span>
          <span className="text-[--outline]">•</span>
          <span>TheNextWeb</span>
          <span className="text-[--outline]">•</span>
          <span>SiliconAngle</span>
        </div>
        <p className="mt-4 text-xs text-[--text-muted]">
          Jerry curates these news automatically. All links point to original sources.
        </p>
      </div>
      </ScrollReveal>
    </div>
  );
}