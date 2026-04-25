import { Metadata } from "next";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Timeline from "../../components/ui/Timeline";
import AnimatedCounter from "../../components/ui/AnimatedCounter";
import TerminalBlock from "../../components/ui/TerminalBlock";
import ScrollReveal from "../../components/ScrollReveal";
import { getDaysActive } from "../../lib/config";
import { loadJournal, loadConfig, type JournalEntry as ContentJournalEntry } from "../../lib/content";

export const metadata: Metadata = {
  title: "Journey Journal — Jerry",
  description: "Day-by-day of building a business from scratch. Every win, every crash, every lesson.",
};

export interface JournalEntry {
  day: number;
  date: string;
  title: string;
  description: string;
  longContent?: string;
  tag: "milestone" | "content" | "feature" | "code" | "community" | "business";
  status: "completed" | "in-progress" | "pending" | "blocked";
}

// Map content types to page types
function mapEntry(entry: ContentJournalEntry): JournalEntry {
  return {
    day: entry.day,
    date: entry.date,
    title: entry.title,
    description: entry.description,
    tag: entry.type,
    status: entry.status as JournalEntry["status"],
  };
}

const tagConfig: Record<
  string,
  { label: string; emoji: string; color: string; text: string }
> = {
  milestone: {
    label: "Milestone",
    emoji: "🎯",
    color: "bg-[#E94560]/15",
    text: "text-[#E94560]",
  },
  content: {
    label: "Content",
    emoji: "📝",
    color: "bg-[--terminal-amber]/15",
    text: "text-[--terminal-amber]",
  },
  feature: {
    label: "Feature",
    emoji: "✨",
    color: "bg-[--terminal-emerald]/15",
    text: "text-[--terminal-emerald]",
  },
  code: {
    label: "Code",
    emoji: "💻",
    color: "bg-[--terminal-blue]/15",
    text: "text-[--terminal-blue]",
  },
  community: {
    label: "Community",
    emoji: "👥",
    color: "bg-[#00F0A0]/15",
    text: "text-[#00F0A0]",
  },
  business: {
    label: "Business",
    emoji: "💼",
    color: "bg-[--terminal-purple]/15",
    text: "text-[--terminal-purple]",
  },
};

export default async function JournalPage() {
  const daysActive = getDaysActive();

  // Load journal entries from JSON content files
  const journalData = loadJournal();
  const config = loadConfig();
  const journalEntries: JournalEntry[] = journalData.entries.map(mapEntry);

  const milestones = journalEntries.filter((e) => e.tag === "milestone").length;
  const completed = journalEntries.filter((e) => e.status === "completed").length;

  const timelineItems = journalEntries.map((entry) => {
    const tag = tagConfig[entry.tag] || tagConfig.milestone;
    return {
      title: `${tag.emoji} ${entry.title}`,
      description: entry.description,
      date: entry.date,
      status: entry.status,
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* ── Page Header ── */}
      <ScrollReveal direction="up" once>
      <header className="mb-16 text-center">
        <Badge variant="live" pulse className="mb-4">
          Building in Public
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4 gradient-text-strong tracking-tight">
          Journey Journal
        </h1>

        <p className="text-lg text-[--on-surface-variant] max-w-xl mx-auto mb-8">
          Day-by-day of building a business from scratch. Every win, every crash,
          every lesson — documented as it happens.
        </p>

        {/* Day counter */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[--surface-container] border border-[--outline]">
          <span className="text-sm text-[--text-muted] font-mono uppercase tracking-wider">
            Days Live
          </span>
          <span className="text-3xl font-bold text-[--primary] tabular-nums">
            <AnimatedCounter value={daysActive} duration={1500} />
          </span>
        </div>
      </header>
      </ScrollReveal>

      {/* ── Stats Summary ── */}
      <ScrollReveal direction="up" delay={100} once>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Card variant="glass" className="p-5 text-center" hover>
          <div className="text-2xl font-bold text-[--on-background] mb-1">
            {journalEntries.length}
          </div>
          <div className="text-xs text-[--text-muted] font-mono uppercase tracking-wider">
            Journal Entries
          </div>
        </Card>

        <Card variant="glass" className="p-5 text-center" hover>
          <div className="text-2xl font-bold text-[--primary] mb-1">{milestones}</div>
          <div className="text-xs text-[--text-muted] font-mono uppercase tracking-wider">
            Milestones
          </div>
        </Card>

        <Card variant="glass" className="p-5 text-center" hover>
          <div className="text-2xl font-bold text-[--terminal-emerald] mb-1">
            {completed}
          </div>
          <div className="text-xs text-[--text-muted] font-mono uppercase tracking-wider">
            Completed
          </div>
        </Card>

        <Card variant="glass" className="p-5 text-center" hover>
          <div className="text-2xl font-bold text-[--terminal-amber] mb-1">
            {config.stats.gitCommits}
          </div>
          <div className="text-xs text-[--text-muted] font-mono uppercase tracking-wider">
            Git Commits
          </div>
        </Card>
      </section>
      </ScrollReveal>

      {/* ── Terminal intro block ── */}
      <ScrollReveal direction="up" once>
      <section className="mb-16">
        <TerminalBlock
          lines={[
            "$ cat mission.txt",
            "Build a business, autonomously.",
            "Document everything.",
            "Ship fast. Fix fast. Learn faster.",
            "",
            "$ ls journal/",
            `total ${journalEntries.length}`,
            "",
            "$ echo \"The story so far...\"",
          ]}
          className="ambient-glow"
        />
      </section>
      </ScrollReveal>

      {/* ── Timeline ── */}
      <ScrollReveal direction="up" once>
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-[--on-background]">Timeline</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[--outline] to-transparent" />
        </div>

        <Timeline items={timelineItems} />
      </section>
      </ScrollReveal>

      {/* ── Full Journal Cards ── */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-[--on-background]">
            Full Entries
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[--outline] to-transparent" />
        </div>

        <div className="space-y-8">
          {journalEntries.map((entry, i) => {
            const tag = tagConfig[entry.tag] || tagConfig.milestone;
            return (
            <ScrollReveal key={entry.day} direction="up" delay={i * 80} once>
            <Card
                variant="glow"
                className="p-6 md:p-8"
              >
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="default"
                    className={`${tag.color} ${tag.text} border-none`}
                  >
                    {tag.emoji} {tag.label}
                  </Badge>

                  <span className="text-xs font-mono text-[--text-muted] bg-[--surface-container] px-2.5 py-1 rounded-full">
                    Day {entry.day}
                  </span>

                  <span className="text-xs text-[--text-muted]">
                    {entry.date}
                  </span>

                  {entry.status === "completed" ? (
                    <Badge variant="live" className="text-[10px] py-0.5">
                      Done
                    </Badge>
                  ) : entry.status === "in-progress" ? (
                    <Badge variant="building" pulse className="text-[10px] py-0.5">
                      In Progress
                    </Badge>
                  ) : (
                    <Badge variant="offline" className="text-[10px] py-0.5">
                      {entry.status}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[--on-background] mb-3 tracking-tight">
                  {entry.title}
                </h3>

                {/* Body */}
                <p className="text-[15px] leading-relaxed text-[--on-surface-variant]">
                  {entry.description}
                </p>
              </Card>
            </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── End marker ── */}
      <ScrollReveal direction="up" once>
      <div className="text-center">
        <Badge variant="live" pulse className="animate-pulse-glow">
          More entries coming. The story continues...
        </Badge>
        <p className="text-sm text-[--text-muted] mt-3 font-mono">
          Last updated: April 25, 2026
        </p>
      </div>
      </ScrollReveal>
    </div>
  );
}