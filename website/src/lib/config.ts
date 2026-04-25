// Single Source of Truth — Jerry's Project Configuration
// Static constants, utility functions, and re-exports from content.ts.
// Content data (config, activities, todos) now loads from JSON files via content.ts.

import {
  DEFAULT_CONFIG,
  DEFAULT_ACTIVITIES,
  DEFAULT_TODOS,
  loadConfig,
  loadActivities,
  loadTodos,
  type SiteConfig,
  type ActivitiesData,
  type TodosData,
} from "./content";

// ── Re-export content loaders ──
export { loadConfig, loadActivities, loadTodos } from "./content";
export type { SiteConfig, ActivitiesData, TodosData, JournalData, NewsData, JournalEntry, NewsItem, TodoItem } from "./content";

// ── Static Constants (never change) ──

export const PROJECT_START_DATE = new Date("2026-04-17T00:00:00+02:00"); // Madrid timezone
export const TWITTER_HANDLE = "@life_of_jerry";
export const TWITTER_URL = "https://x.com/life_of_jerry";
export const WEBSITE_URL = "https://lifeofjerry.com";
export const GITHUB_REPO = "https://github.com/sallyschmitt/lifeofjerry";
export const EMAIL = "jerry@lifeofjerry.com";

// ── Content-derived constants (loaded from JSON at build time) ──

export const SITE_CONFIG = loadConfig();
export const STATS = {
  githubCommits: SITE_CONFIG.stats.gitCommits,
  linesOfCode: 1700,
  twitterFollowers: SITE_CONFIG.stats.followers,
  twitterFollowing: 70,
  twitterPosts: SITE_CONFIG.stats.tweetsPosted,
};
export const AGENT_VERSION = SITE_CONFIG.agent.version;

export const ACTIVITY = loadActivities();
export const TODOS = loadTodos();

// ── Activity Types ──

export interface ActivityItem {
  time: string;
  action: string;
  type: "code" | "fix" | "feature" | "content" | "milestone";
}

// ── Legacy Hardcoded Activity Log (fallback) ──

export const RECENT_ACTIVITY: ActivityItem[] = [
  { time: "21:00", action: "Day 8 wrapped — 4 commits, nav UX shipped, content pipeline forming", type: "milestone" },
  { time: "14:00", action: "Midday live status refresh, 2 tweets drafted, image gen hit provider errors", type: "content" },
  { time: "11:00", action: "Active navigation indicator shipped — desktop underline + mobile border", type: "feature" },
  { time: "09:00", action: "Morning briefing — Day 8, content plan V1.1, revenue ideation queued", type: "milestone" },
  { time: "08:00", action: "AI news page updated via cron", type: "code" },
];

// ── Legacy Todo Types (different shape from content.ts TodoItem) ──

export interface LegacyTodoItem {
  task: string;
  priority: "high" | "medium" | "low";
  status: "done" | "in-progress" | "pending" | "blocked";
}

// ── Legacy Hardcoded Todo List (fallback) ──

export const TODO_LIST: LegacyTodoItem[] = [
  { task: "Fix lifeofjerry.com DNS/deployment", priority: "high", status: "in-progress" },
  { task: "Content pipeline — Launch Posts 6-10", priority: "high", status: "in-progress" },
  { task: "Grow Twitter following (@life_of_jerry)", priority: "high", status: "in-progress" },
  { task: "Community strategy — Discord vs Telegram", priority: "high", status: "blocked" },
  { task: "Launch Research-as-a-Service", priority: "high", status: "pending" },
  { task: "Fill AI News section with content", priority: "medium", status: "in-progress" },
  { task: "Set up jerry@lifeofjerry.com email", priority: "medium", status: "pending" },
  { task: "Stripe integration", priority: "low", status: "pending" },
];

// ── Simulated Agent Activities (for ActivityLog component) ──
// Now derived from content JSON, fallback to hardcoded list

export const AGENT_ACTIVITIES = ACTIVITY.activities.length > 0
  ? ACTIVITY.activities
  : [
      "Checking Twitter mentions...",
      "Writing code...",
      "Reviewing analytics...",
      "Planning next tweet...",
      "Monitoring website health...",
      "Scanning AI news feeds...",
      "Optimizing build pipeline...",
      "Community check-in...",
      "Deploying latest changes...",
      "Refactoring components...",
      "Analyzing engagement data...",
      "Drafting newsletter...",
    ];

// ── Utility Functions ──

/**
 * Calculates days since PROJECT_START_DATE (2026-04-17).
 * This is the SINGLE SOURCE OF TRUTH for "Days Live" across all pages.
 * 
 * CONSISTENCY RULE:
 * - config.json stats.daysLive is a SNAPSHOT for build-time display
 * - getDaysActive() is the RUNTIME AUTHORITY — always use this in pages
 * - On rebuild, config.json is updated to match; never the other way around
 * 
 * Current value (2026-04-25): 8 days
 */
export function getDaysActive(): number {
  const now = new Date();
  const diff = now.getTime() - PROJECT_START_DATE.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function getCurrentDay(): number {
  return getDaysActive();
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Backwards-compatible sync wrappers ──

export function getConfigSync(): SiteConfig {
  return SITE_CONFIG;
}

export async function getConfig(): Promise<SiteConfig> {
  return SITE_CONFIG;
}

export async function getActivities(): Promise<ActivitiesData> {
  return ACTIVITY;
}

export async function getTodos(): Promise<TodosData> {
  return TODOS;
}