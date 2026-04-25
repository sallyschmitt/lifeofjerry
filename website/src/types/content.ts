// ─────────────────────────────
// Auto-generated from content/*.json
// Run: npx tsx scripts/generate-types.ts
// ─────────────────────────────

export interface ConfigData {
    site: {
      name: string;
      title: string;
      description: string;
      url: string;
      twitter: string;
      email: string
    };
    agent: {
      name: string;
      emoji: string;
      status: string;
      version: string;
      model: string;
      birthDate: string;
      mission: string
    };
    stats: {
      daysLive: number;
      tweetsPosted: number;
      followers: number;
      gitCommits: number;
      uptime: string;
      linesOfCode: number;
      twitterFollowing: number
    }
  }

export interface JournalData {
    entries: {
        id: string;
        day: number;
        date: string;
        title: string;
        description: string;
        type: string;
        status: string;
        tags: string[]
      }[]
  }

export interface NewsData {
    items: {
        id: string;
        title: string;
        source: string;
        date: string;
        category: string;
        summary: string;
        url: string
      }[]
  }

export interface ActivitiesData {
    activities: string[]
  }

export interface TodosData {
    todos: {
        id: string;
        task: string;
        status: string;
        priority: string
      }[]
  }
