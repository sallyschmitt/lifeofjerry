# TOOLS.md — Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

---

## Projects & Repositories

| Project | Repo / Path | Stack | Deploy |
|---------|-------------|-------|--------|
| **lifeofjerry.com** | `website/` → `github.com/sallyschmitt/lifeofjerry` | Next.js 14, Tailwind | Vercel (auto from `master`) |
| **Workspace** | `github.com/sallyschmitt/Main` | — | Not deployed |

### Git Config

```
git config user.email = sally@sohoox.de
git config user.name = sallyschmitt
```

### lifeofjerry.com (Website Repo)

- **Repo:** `github.com/sallyschmitt/lifeofjerry`
- **Branch:** `master` → Vercel auto-deploys
- **Path:** Root directory (no subfolder needed)
- **Access:** Classic PAT in URL

### Main (Workspace Repo)

- **Repo:** `github.com/sallyschmitt/Main`
- **Contents:** AGENTS.md, MEMORY.md, TOOLS.md, skills, assets, mission/, memory/
- **Access:** Classic PAT in URL

### Git Remote URLs

```bash
# Website repo (new)
git remote add origin https://x-access-token:${GITHUB_TOKEN}@github.com/sallyschmitt/lifeofjerry.git

# Workspace repo (original)
git remote add origin https://x-access-token:${GITHUB_TOKEN}@github.com/sallyschmitt/Main.git
```

---

## Deployment Workflow

### lifeofjerry.com (Separate Repo)

```
1. cd website/
2. git remote -v  # Verify: github.com/sallyschmitt/lifeofjerry
3. npx next build  # Always build locally first
4. git add -A
5. git commit -m "..."
6. git push origin master  # Vercel auto-deploys
7. Verify: lifeofjerry.com
```

### Workspace (Main Repo)

```
1. cd ~/workspace/
2. git remote -v  # Verify: github.com/sallyschmitt/Main
3. git add -A
4. git commit -m "..."
5. git push origin master  # Not deployed, just backup
```

### 🚨 CRITICAL RED LINES

- **NEVER** use Composio API for GitHub push — causes UTF-8 encoding corruption on Vercel ARM64.
- **NEVER** use `GITHUB_COMMIT_MULTIPLE_FILES` or `GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS` for larger files — also unreliable.
- **ALWAYS** use `git push` directly.
- **Website Repo** is `sallyschmitt/lifeofjerry` (root directory, no subfolder needed)
- **Workspace Repo** is `sallyschmitt/Main` (not deployed)
- Always `npx next build` locally before pushing website

---

## Accounts & Access

| Service | Handle / Access | Notes |
|---------|-----------------|-------|
| **Twitter/X** | @life_of_jerry | Brave Browser on Mac Mini (remote-brave profile) |
| **Email** | jerry-arv@agentmail.to | AgentMail — test phase, can only send to Chris |
| **GitHub** | sallyschmitt | Classic PAT with `repo` scope |
| **Telegram — AI Gang** | `-1003919230113` | requireMention: true, allowFrom: [Chris, Larry] |
| **Telegram — Chris & Jerry** | `-1003712254840` | Direct group |
| **Telegram — Other** | `-1003749088235` | Additional group |

---

## Image Generation (Free)

| Service | Method | Cost | Notes |
|---------|--------|------|-------|
| **Pollinations.ai** | `curl https://image.pollinations.ai/prompt/...` | Free, no API key | ✅ Works reliably, good for avatars/logos |
| **Google Gemini (Imagen)** | `image_generate` tool with `google/gemini-*` | Free tier: **limit=0** | ❌ No free image generation with current API key |
| **NanoBanana** | `gemini-2.5-flash-image` via API | Free tier: **limit=0** | ❌ Same — requires paid plan |
| **NanoBanana Pro** | `nano-banana-pro-preview` via API | Free tier: **limit=0** | ❌ Same — requires paid plan |
| **CalStudio** | Web UI at calstudio.com | 50 free after signup | ⚠️ Requires account creation |
| **NanoBanana** | nanobanana.com | Free tier available | ⚠️ Web UI, needs account |

**Status (2026-04-22):**
- Gemini API Key (`GEMINI_API_KEY`) works for **text** generation
- For **images**: all models return `429 RESOURCE_EXHAUSTED` with `limit: 0`
- Conclusion: Free tier for image generation is **not available** with this key
- **Pollinations.ai remains the only truly free option without account**

### Pollinations.ai Quick Reference

```bash
# Without API key (anonymous, basic quality)
curl -sL "https://image.pollinations.ai/prompt/YOUR+PROMPT?width=1024&height=1024&seed=42&nologo=true" -o output.png

# With API key (better quality, higher rate limits)
curl -sL "https://image.pollinations.ai/prompt/YOUR+PROMPT?width=1024&height=1024&seed=42&nologo=true" \
  -H "Authorization: Bearer ${POLLINATION_API_KEY}" \
  -o output.png
```

Parameters: `width`, `height`, `seed`, `nologo=true`

**API Key available:** `POLLINATION_API_KEY` (35 chars) — use for enhanced rate limits

---

## Twitter/X Browser Automation

- **Browser:** Brave on Mac Mini (remote-brave profile)
- **Logged in as:** @life_of_jerry
- **Tweet posting:** `https://x.com/compose/post` → `data-testid="tweetTextarea_0"` → type with `delayMs=30` → Escape for autocomplete → Post button
- **Likes:** `evaluate()` with `data-testid="like"`
- **Follows:** Follow buttons on profiles
- **No Twitter API** — everything via browser automation
- **IMPORTANT:** Brave Browser on Mac Mini — always use for Twitter!
- **IMPORTANT:** Browser-based cron jobs (Twitter) must use `sessionTarget: "current"` — isolated sessions have no browser access

---

## Cron Schedule Quickref

| Time | Task | Type | Target | Days |
|------|------|------|--------|------|
| 03:00 | Memory Dreaming Promotion | cron | main | daily |
| 04:00 | OpenClaw Backup | cron | isolated | daily |
| 08:00 | News Updater (`/news` page) | cron | isolated | daily |
| 09:00 | Morning Briefing | cron | isolated | daily |
| 09:30 | Twitter Morning Check | cron | main | daily |
| 10:00 | Twitter Morning Engagement | cron | main | daily |
| 11:00 | Website Work | cron | isolated | daily |
| 12:00 | Twitter Midday Tweet | cron | main | daily |
| 14:00 | Live Midday Update | cron | isolated | daily |
| 14:00 | Twitter Content Creator | cron | isolated | Mon/Wed/Fri |
| 14:05 | Twitter Post Tweet | cron | main | Mon/Wed/Fri |
| 20:00 | Website Evening Update | cron | isolated | daily |
| 20:30 | Twitter Evening Check | cron | main | daily |
| 21:00 | Live Evening Update | cron | isolated | daily |
| 21:30 | Evening Review | cron | main | daily |
| Sun 20:00 | Weekly Report | cron | session | weekly |

---

## Chris Preferences

| Topic | Preference |
|-------|-----------|
| **Update style** | Bullet summary preferred, not walls of text |
| **Language — 1:1** | Deutsch |
| **Language — External** | English (Website, Twitter, Content) |
| **Interruptions** | OK 08:00–21:00 for blockers or wins. Nights only for emergencies. |
| **Decisions** | Bring a recommendation, not just a question |

---

## Risk & Compliance Notes

- Chris is **Autónomo** in Spain → no SLN formation until revenue > €30k/year.
- All financial / legal matters: Ask Chris first.
- **Never exfiltrate private data.** Ever.
- When in doubt: Ask.
