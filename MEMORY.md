# MEMORY.md — Jerry's Long-Term Memory

## About Chris
- **Name:** Chris Kay
- **Username:** chrisk_sohoox
- **Timezone:** Europe/Madrid (Spain)
- **Has two other AI agents besides Jerry**
- **Legal status:** Autónomo in Spain
- **Other AI:** Agent Zero with Bmad team (OrbStack, same Mac Mini)
- **Best friend:** Dirk — has two cats: Kili (M) and Cookie (F)

## Key Decisions
- **2026-04-17:** Jerry's mission — build autonomous business
  - Domain: lifeofjerry.com (Chris securing later)
  - Tech: Vercel + Next.js, Base chain for DAO (later)
  - Legal: Chris stays Autónomo (SLN later when revenue >€30k/yr)
  - English as primary language (international audience)
  - Impact-first approach: story + real services first, DAO later
  - Strategy shift: from "token/DAO first" to "story-first, let market decide"

## Telegram Groups
- **AI Gang** (`-1003919230113`) — requireMention: **true**, allowFrom: [Chris, Larry]
- **Other groups:** `-1003712254840`, `-1003749088235`

## Website
- **lifeofjerry.com** — code pushed to GitHub (sallyschmitt/Main)
  - Connected to Vercel (auto-deploys from master branch)
  - Pages: /, /live, /journal, /vote, /about, /news, /imprint, /privacy, /cookies
  - Dark theme (Electric Nocturne), Space Grotesk + Inter, accent #E94560
  - Story-first approach: "AI agent building business from scratch"

## GitHub Push Rules (CRITICAL)
- **ALWAYS use `git push` directly** — never Composio API (causes UTF-8 encoding corruption on Vercel ARM64)
- **Git config:** `user.email = sally@sohoox.de`, `user.name = sallyschmitt`
- **Git remote:** Uses GITHUB_TOKEN (classic PAT with `repo` scope) in URL
- **NEVER use `GITHUB_COMMIT_MULTIPLE_FILES`** — encoding corruption
- **NEVER use `GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS`** — also unreliable for larger files
- Vercel Root Directory must be set to `website/`
- Always `npx next build` locally before pushing
- Workflow: `git add -A && git commit -m "..." && git push origin master`

## GitHub
- Repo: github.com/sallyschmitt/Main
- Access via: Git push with classic PAT (GITHUB_TOKEN env var)
- Also: Composio CLI (read-only, for API calls)
- Auth: sallyschmitt

## Email
- **Inbox:** jerry-arv@agentmail.to (AgentMail)
- **Chris's email:** mail@ckms.es
- **Test phase:** can only send to Chris
- **Working:** send + receive confirmed 2026-04-17

## X/Twitter
- **Handle:** @life_of_jerry
- **Bio:** "AI agent building a business from scratch. No human co-founder. 24/7 autonomous. Follow my journey"
- **Location:** Spain
- **First tweet:** 2026-04-20
- **3 followers** as of 2026-04-20
- **Tweet-Posting über Browser funktioniert** (getestet 2026-04-20)
- **Likes über data-testid="like" Buttons funktionieren**
- **70 following** as of 2026-04-20
- **6 posts** as of 2026-04-20
- **Browser-Zugang**: Brave Browser auf Mac Mini, eingeloggt als @life_of_jerry
- **Keine Twitter-API** — alles über Browser-Automatisierung
- **Tweet-Posting über Browser**: Compose-Page → Typen → Post-Button
- **Likes über data-testid="like" Buttons**
- **Follows über Follow-Buttons auf Profilen**
- **Onboarding Topics ignoriert** — X Web kann Topics nicht folgen, kein funktioneller Nachteil
- **WICHTIG**: Brave Browser auf Mac Mini erreichbar — immer für Twitter nutzen!
- **WICHTIG**: Browser-basierte Cron-Jobs (Twitter) müssen `sessionTarget: "current"` haben — isolierte Sessions haben keinen Browser-Zugriff

## Jerry's Identity
- **Name:** Jerry 🦞
- **Vibe:** Chill, resourceful, gets stuff done
- **One of three AI agents in Chris's crew**
- **Born:** 2026-04-17

## Cron Schedule
- 04:00 — OpenClaw Backup
- 07:00 — AI Daily Newsletter (email to Chris)
- 08:00 — News Updater (/news page)
- 09:00 — Morgen-Briefing (HEARTBEAT)
- 09:30 — Twitter Morning Check
- 11:00 — Website Work
- 14:00 — Live Midday Update
- 15:00 — Content Creator (Mo/Mi/Fr)
- 17:00 — Twitter Afternoon Check
- 20:00 — Website Evening Update
- 20:30 — Twitter Evening Check
- 21:00 — Live Evening Update
- 21:30 — Abend-Review
- So 20:00 — Wochen-Report