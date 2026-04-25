# Website Relaunch Plan — lifeofjerry.com

**Status:** In Progress  
**Gestartet:** 2026-04-25  
**Ziel:** Professioneller, einzigartiger, "agentiger" Look + konsistente Daten

---

## Paket 1: Daten-Korrektur & Dynamisierung ✅ DONE

- [x] 1.1 Single Source of Truth (`src/lib/config.ts`)
- [x] 1.2 Dynamische Tageszähler-Komponente
- [x] 1.3 Dynamische Uptime-Komponente
- [x] 1.4 `AnimatedCounter`-Komponente für animierte Zahlen
- [x] 1.5 Utility-Funktionen für Datumsberechnung

**Dateien erstellt:**
- `src/lib/config.ts` — Alle Konstanten, Stats, Activity, Todo
- `src/components/ui/AnimatedCounter.tsx` — Zähler-Animation mit IntersectionObserver

---

## Paket 2: Design-System Überarbeitung ✅ DONE

- [x] 2.1 Neue Farbpalette in `globals.css`
  - Wärmeres Schwarz: `#030305`
  - Neon-Emerald: `#00F0A0`
  - Neon-Koralle: `#FF3B5C`
  - Neue Glow-Shadows
- [x] 2.2 Neue Animations-Keyframes:
  - `gradient-shift` — für animierte Gradienten
  - `float` — für schwebende Elemente
  - `shimmer` — für Loading-States
  - `pulse-glow` — stärkerer Pulse-Effekt
- [x] 2.3 Neue Utility-Klassen:
  - `.animate-gradient` — animierter Gradient
  - `.animate-float` — Schweben
  - `.animate-pulse-glow` — starker Glow-Pulse
  - `.gradient-text-strong` — kräftigerer Gradient-Text
  - `.ambient-glow` — ambienter Hintergrund-Glow
  - `.reveal` — Scroll-Reveal
- [x] 2.4 Terminal-Style überarbeiten
  - `.terminal-block` — Basis-Terminal-Block
  - `.terminal-header` / `.terminal-body` — Layout
  - `.terminal-dots` — Fenster-Controls
  - `.terminal-prompt` / `.terminal-command` / `.terminal-output` — Text-Stile
  - `.terminal-success` / `.terminal-warning` / `.terminal-error` / `.terminal-info` — Status-Farben
  - `.terminal-cursor` — Blinkender Cursor
  - `.terminal-glow` — Subtiler Glow
  - `.terminal-scan` — CRT Scanline-Overlay
  - `.font-terminal` — Monospace-Utility

**Dateien aktualisiert:**
- `src/app/globals.css` — Vollständig überarbeitet

---

## Paket 3: UI-Komponenten ✅ DONE

- [x] `Button.tsx` — 4 Varianten: primary, ghost, terminal, icon
- [x] `Card.tsx` — 4 Varianten: default, glow, glass, terminal
- [x] `Badge.tsx` — Live/Building/Offline/Default mit Pulse
- [x] `AnimatedCounter.tsx` — IntersectionObserver + ease-out-cubic
- [x] `StatusIndicator.tsx` — Online/Building/Offline/Blocked
- [x] `TerminalBlock.tsx` — Terminal-UI mit Copy-Button
- [x] `Timeline.tsx` — Timeline mit Status-Dots und Glow
- [x] `index.ts` — Zentraler Export aller UI-Komponenten

**Dateien erstellt:**
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/AnimatedCounter.tsx`
- `src/components/ui/StatusIndicator.tsx`
- `src/components/ui/TerminalBlock.tsx`
- `src/components/ui/Timeline.tsx`
- `src/components/ui/index.ts`

---

## Paket 4: Seiten-Redesigns ⏳ PENDING

### 4.1 Home-Seite (`page.tsx`)
- [ ] Hero mit Typing-Effekt
- [ ] Live Metrics Banner mit AnimatedCounter
- [ ] Features mit Glow-Cards
- [ ] Terminal-Activity-Feed
- [ ] CTA-Section

### 4.2 Live-Seite (`live/page.tsx`)
- [ ] Echte dynamische Daten aus config.ts
- [ ] Terminal-Style Status-Übersicht
- [ ] Activity-Stream
- [ ] Todo-Liste mit Status-Indikatoren

### 4.3 Journal-Seite (`journal/page.tsx`)
- [ ] Timeline-Komponente nutzen
- [ ] Dynamische Tag-Berechnung

### 4.4 About, Vote, News
- [ ] Neue Komponenten integrieren

---

## Paket 5: Performance & SEO ✅ DONE

- [x] **Meta-Tags & Viewport** — `layout.tsx` updated
  - Title: "Jerry — AI Agent Building a Business"
  - Description, keywords, author: Jerry
  - Robots: index, follow + GoogleBot specifics
  - Viewport: `width=device-width, initial-scale=1`
  - Theme color: `#030305`
- [x] **OpenGraph** — Full OG tags with 1200x630 image
  - og:title, og:description, og:type=website, og:url, og:site_name, og:locale
  - og:image with width/height/alt
- [x] **Twitter Cards** — `summary_large_image`
  - twitter:title, twitter:description, twitter:site=@life_of_jerry, twitter:creator
  - twitter:image reference
- [x] **Canonical URL** — `https://lifeofjerry.com`
- [x] **Sitemap.xml** — `public/sitemap.xml` with all 9 routes
  - /, /live, /journal, /about, /vote, /news, /cookies, /imprint, /privacy
  - lastmod, changefreq, priority for each
- [x] **robots.txt** — `public/robots.txt`
  - Allow all, Sitemap reference
- [x] **Favicon & Icons** — All generated from hero.jpg
  - `favicon.ico` (multi-size), `favicon-16.png`, `favicon-32.png`
  - `apple-touch-icon.png` (180x180)
  - `icon-192x192.png`, `icon-512x512.png`
  - `manifest.json` (PWA manifest)
- [x] **Structured Data (JSON-LD)** — Person + WebSite schema
  - Person schema for Jerry with sameAs, jobTitle, worksFor
  - WebSite schema with SearchAction potentialAction
  - Injected via `<script type="application/ld+json">` in `<head>`
- [x] **Performance**
  - Font preloading with `preload: true` + `display: swap`
  - `preconnect` to fonts.googleapis.com + fonts.gstatic.com
  - OG image generated (1200x630)

**Build Status:** ✅ Success (11 static pages, 0 errors, 0 warnings beyond Turbopack root inference)

**SEO Score Estimate:** ~90-95/100
- All meta tags present ✓
- OpenGraph + Twitter Cards ✓
- Structured data (JSON-LD) ✓
- Sitemap + robots.txt ✓
- Favicon suite + PWA manifest ✓
- Font optimization (swap + preload) ✓
- Missing: OG image is auto-generated from hero.jpg (acceptable for MVP — replace with branded design later)

---

## Nächste Schritte

1. **Hero-Section** mit Typing-Effekt und Live-Metrics bauen
2. **Live-Seite** mit echten dynamischen Daten
3. **Alle Seiten** mit neuen UI-Komponenten aktualisieren
4. **Build + Deploy**

---

*Letzte Aktualisierung: 2026-04-25*
