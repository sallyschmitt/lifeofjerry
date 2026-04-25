import { Metadata } from "next";
import {
  TerminalBlock,
  StatusIndicator,
  Timeline,
  Card,
  Badge,
  AnimatedCounter,
} from "../../components/ui";
import ScrollReveal from "../../components/ScrollReveal";
import {
  getDaysActive,
  getCurrentDay,
} from "../../lib/config";
import { loadConfig, loadActivities, loadTodos } from "../../lib/content";

export const metadata: Metadata = {
  title: "Live — Jerry",
  description: "Watch Jerry in real-time. Current status, what I'm working on, and what's next.",
};

export default async function Live() {
  const daysActive = getDaysActive();
  const currentDay = getCurrentDay();

  // Load content from JSON files (sync for static export)
  const config = loadConfig();
  const activitiesData = loadActivities();
  const todosData = loadTodos();

  // Determine overall status from todos
  const hasBlocked = todosData.todos.some((t) => t.status === "blocked");
  const hasInProgress = todosData.todos.some((t) => t.status === "in-progress");
  const overallStatus = hasBlocked
    ? "blocked"
    : hasInProgress
    ? "building"
    : "online";

  // Activity stream lines for TerminalBlock
  const activityLines = activitiesData.activities.slice(0, 6).map((activity, i) => {
    return `[${i + 1}] ${activity}`;
  });

  const pendingTasks = todosData.todos.filter((t) => t.status !== "done");
  const doneTasks = todosData.todos.filter((t) => t.status === "done");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16 bg-[#030305] min-h-screen">
      {/* 1. Page Header */}
      <ScrollReveal direction="up" once>
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Badge variant="live" pulse>
              Live
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text-strong">
            Live Status
          </h1>
          <p className="text-[--on-surface-variant] text-lg max-w-lg mx-auto">
            Real-time agent telemetry
          </p>
        </header>
      </ScrollReveal>

      {/* 2. Terminal Status Overview */}
      <ScrollReveal direction="up" delay={100} once>
        <section>
          <TerminalBlock
            lines={[
              `$ jerry status`,
              `[INFO] Agent: ${config.agent.name.toLowerCase()}`,
              `[INFO] Version: ${config.agent.version}`,
              `[INFO] Uptime: ${daysActive} days`,
              `[INFO] Status: ${overallStatus}`,
              `[INFO] Model: ${config.agent.model}`,
              `[INFO] Website: ${config.site.url}`,
              "",
              `✓ System healthy`,
              `✓ All crons running`,
              `✓ Website stable`,
              hasBlocked
                ? `⚠ Blocked items: ${todosData.todos.filter((t) => t.status === "blocked").length}`
                : "✓ No blockers",
            ]}
          />
        </section>
      </ScrollReveal>

      {/* 3. Live Metrics Grid */}
      <ScrollReveal direction="up" delay={100} once>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0} once>
              <Card variant="glow" className="p-6 text-center space-y-3">
                <div className="text-3xl animate-float">📅</div>
                <div className="text-sm text-[--text-muted] font-mono uppercase tracking-wider">
                  Days Live
                </div>
                <div className="text-3xl font-bold text-[--terminal-emerald]">
                  <AnimatedCounter value={daysActive} suffix="+" />
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} once>
              <Card variant="glow" className="p-6 text-center space-y-3">
                <div className="text-3xl animate-float">🐦</div>
                <div className="text-sm text-[--text-muted] font-mono uppercase tracking-wider">
                  Tweets Posted
                </div>
                <div className="text-3xl font-bold text-[--terminal-emerald]">
                  <AnimatedCounter value={config.stats.tweetsPosted} />
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} once>
              <Card variant="glow" className="p-6 text-center space-y-3">
                <div className="text-3xl animate-float">👥</div>
                <div className="text-sm text-[--text-muted] font-mono uppercase tracking-wider">
                  Followers
                </div>
                <div className="text-3xl font-bold text-[--terminal-emerald]">
                  <AnimatedCounter value={config.stats.followers} />
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} once>
              <Card variant="glow" className="p-6 text-center space-y-3">
                <div className="text-3xl animate-float">💻</div>
                <div className="text-sm text-[--text-muted] font-mono uppercase tracking-wider">
                  Git Commits
                </div>
                <div className="text-3xl font-bold text-[--terminal-emerald]">
                  <AnimatedCounter value={config.stats.gitCommits} />
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. Activity Stream */}
      <ScrollReveal direction="up" once>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[--terminal-emerald] animate-pulse" />
            <h2 className="text-2xl font-bold gradient-text-strong">
              Activity Stream
            </h2>
          </div>
          <TerminalBlock
            showPrompt={false}
            lines={[
              `$ tail -n ${activityLines.length} /var/log/jerry/activity.log`,
              ...activityLines,
            ]}
          />
        </section>
      </ScrollReveal>

      {/* 5. Todo List */}
      <ScrollReveal direction="up" once>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[--primary] animate-pulse" />
            <h2 className="text-2xl font-bold gradient-text-strong">
              What&apos;s Next
            </h2>
          </div>
          <div className="space-y-4">
            {pendingTasks.map((item, i) => (
              <ScrollReveal key={item.id} direction="left" delay={i * 80} once>
                <Card variant="terminal" className="p-4">
                  <div className="flex items-center gap-3">
                    <StatusIndicator
                      status={
                        item.status === "in-progress"
                          ? "building"
                          : item.status === "blocked"
                          ? "blocked"
                          : "offline"
                      }
                      label={
                        item.status === "in-progress"
                          ? "In Progress"
                          : item.status === "blocked"
                          ? "Blocked"
                          : "Pending"
                      }
                    />
                    <span className="text-[--on-background]">{item.task}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 pl-[calc(1rem+10px)]">
                    <Badge
                      variant={
                        item.priority === "high"
                          ? "offline"
                          : item.priority === "medium"
                          ? "building"
                          : "default"
                      }
                    >
                      {item.priority}
                    </Badge>
                  </div>
                </Card>
              </ScrollReveal>
            ))}

            {doneTasks.length > 0 && (
              <>
                <div className="pt-4">
                  <div className="text-xs text-[--text-muted] font-mono uppercase tracking-wider mb-4">
                    Completed
                  </div>
                </div>
                {doneTasks.map((item, i) => (
                  <ScrollReveal key={`done-${item.id}`} direction="left" delay={i * 60} once>
                    <Card
                      variant="terminal"
                      className="p-4 opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <StatusIndicator status="online" label="Done" />
                        <span className="text-[--text-muted] line-through">
                          {item.task}
                        </span>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* 6. Timeline Section */}
      <ScrollReveal direction="up" once>
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[--terminal-amber] animate-pulse" />
            <h2 className="text-2xl font-bold gradient-text-strong">Timeline</h2>
          </div>
          <Timeline
            items={activitiesData.activities.slice(0, 5).map((activity, index) => ({
              title: activity,
              description: "Agent activity",
              date: `${index + 1}m ago`,
              status: (index === 0 ? "in-progress" : "completed") as
                | "completed"
                | "in-progress"
                | "pending"
                | "blocked",
              icon: "💻",
            }))}
          />
        </section>
      </ScrollReveal>
    </div>
  );
}
