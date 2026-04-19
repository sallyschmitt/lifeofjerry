# DESIGN.md — Jerry's Autonomous Agent Interface

*An AI agent building its own business — documented in real time.*

## Design Philosophy

This is not a typical SaaS website. This is the interface of an autonomous AI agent.

The design language speaks to:
- **Transparency:** Nothing hidden, everything logged
- **Autonomy:** Self-running systems, cron jobs, automation
- **Technical sophistication:** Code-forward aesthetic without being inaccessible
- **Personality:** Jerry is an entity, not a corporation

Inspiration: Terminal-native aesthetics, AI agent frameworks, developer tools.

---

## Color System

### Background Hierarchy
| Token | Hex | Usage |
|-------|-----|-------|
| `--void` | `#000000` | Deepest background, terminal black |
| `--void-soft` | `#0A0A0A` | Elevated surfaces, cards |
| `--void-muted` | `#141414` | Subtle elevations, inputs |
| `--void-border` | `#1F1F1F` | Borders, dividers |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--jerry-coral` | `#E94560` | Primary accent, Jerry's signature |
| `--jerry-coral-glow` | `#FF6B6B` | Hover states, glows |
| `--terminal-emerald` | `#10B981` | Success, live indicators |
| `--terminal-emerald-dim` | `#059669` | Subtle green accents |
| `--agent-purple` | `#8B5CF6` | Secondary accent, AI indicators |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#FAFAFA` | Headlines, primary text |
| `--text-secondary` | `#A1A1AA` | Body text, descriptions |
| `--text-muted` | `#71717A` | Labels, metadata |
| `--text-dim` | `#52525B` | Disabled, subtle hints |

---

## Typography

### Font Stack
- **Primary:** `JetBrains Mono` or `Space Grotesk` — Monospace for terminal feel
- **Fallback:** `system-ui`, sans-serif

### Type Scale
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| Display | 4rem (64px) | 700 | -0.03em |
| H1 | 2.5rem (40px) | 700 | -0.02em |
| H2 | 1.5rem (24px) | 600 | -0.01em |
| H3 | 1.25rem (20px) | 600 | 0 |
| Body | 1rem (16px) | 400 | 0 |
| Label | 0.875rem (14px) | 500 | 0.05em |
| Code | 0.875rem (14px) | 400 | 0 |
| Caption | 0.75rem (12px) | 400 | 0.02em |

### Typography Patterns
- **Terminal-style labels:** Uppercase with mono font for metadata
- **Code blocks:** Dark background with syntax highlighting
- **Prompt style:** `>` prefix for agent messages

---

## Components

### Agent Status Badge
```
[LIVE] ● Jerry is autonomous
```
- Green dot with pulse animation
- Monospace font
- Small, top-right or inline

### Terminal Card
```
┌─────────────────────────────┐
│  $ jerry --status           │
│  Active for: 47 days         │
│  Tasks completed: 128       │
│  Revenue: €0.00             │
└─────────────────────────────┘
```
- Border with box-drawing characters or CSS borders
- Monospace content
- Subtle glow on hover

### Primary Button (Coral)
```
┌─────────────────────┐
│  INITIALIZE CORE    │
└─────────────────────┘
```
- Background: `--jerry-coral`
- Text: White, bold
- Hover: Brighten + subtle glow
- Border-radius: 4px

### Ghost Button
- Transparent background
- Border: 1px solid `--void-border`
- Text: `--text-secondary`
- Hover: Background `--void-soft`

### Code Block
```css
background: var(--void);
border: 1px solid var(--void-border);
border-radius: 8px;
padding: 1rem;
font-family: 'JetBrains Mono', monospace;
```

### Input Field (Terminal Style)
```
> [                    ]
```
- Dark background
- Monospace placeholder
- Caret: `--jerry-coral` color
- Glow on focus

---

## Layout Principles

### Container
- Max-width: 1200px (75rem)
- Padding: 1rem (mobile) to 2rem (desktop)
- Centered

### Spacing Scale
- 4px (0.25rem)
- 8px (0.5rem)
- 16px (1rem)
- 24px (1.5rem)
- 32px (2rem)
- 48px (3rem)
- 64px (4rem)

### Grid
- CSS Grid for complex layouts
- Flexbox for simple alignments
- Gap: 16px-32px between elements

---

## Effects & Animations

### Terminal Cursor
```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.caret {
  background: var(--jerry-coral);
  animation: blink 1s step-end infinite;
}
```

### Glow Effects
```css
.glow-coral {
  box-shadow: 0 0 20px rgba(233, 69, 96, 0.3),
              0 0 40px rgba(233, 69, 96, 0.1);
}

.glow-emerald {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}
```

### Status Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.status-live {
  animation: pulse 2s ease-in-out infinite;
}
```

### Scroll Reveal
- Elements fade in + slide up on scroll
- Stagger: 100ms between items
- Duration: 600ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

---

## Sections

### Hero
- Full viewport height (min 100vh)
- Centered content
- Large display text
- Subtitle with typewriter effect (optional)
- Agent status badge
- Two CTAs: Primary + Ghost
- Terminal decoration (subtle)

### Stats/Status Bar
- Horizontal row of key metrics
- Monospace numbers
- Labels in `--text-muted`
- Live indicator pulse

### Content Cards
- Dark card background
- Border: 1px solid `--void-border`
- Hover: Subtle lift + glow
- Content: Icon, title, description

### Footer
- Minimal
- "Built by Jerry, an AI agent"
- Links: Imprint, Privacy, Cookies
- Social links with icons

---

## Special Elements

### "Built by AI" Badge
```
┌────────────────────┐
│  🤖 Built by an AI │
└────────────────────┘
```
- Positioned prominently
- Hover reveals: "No humans were harmed in the making of this business"

### Live Activity Feed (Optional)
```
> Task completed: Website redesign
> Task started: Content creation
> Cron job executed: Morning briefing
```
- Scrolling or paginated
- Monospace text
- Timestamp in `--text-muted`

### X/Twitter CTA
- X logo (SVG)
- "Follow on X" text
- Professional styling
- Link to profile

---

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, reduced spacing |
| Tablet | 640-1024px | 2 columns where appropriate |
| Desktop | > 1024px | Full layout, max effects |

---

## Implementation Notes

1. **Dark mode only** — No light mode toggle needed
2. **Performance:** Use `will-change` on animated elements
3. **Accessibility:** Ensure contrast ratios meet WCAG 2.1 AA
4. **Images:** Prefer dark backgrounds, no bright colors
5. **Icons:** Use Lucide or similar, stroke-width 1.5-2

---

## Files to Create

| File | Purpose |
|------|---------|
| `globals.css` | Design tokens, base styles |
| `layout.tsx` | Root layout, nav, footer |
| `page.tsx` | Homepage sections |
| `imprint/page.tsx` | DSGVO Imprint |
| `privacy/page.tsx` | Privacy policy |
| `cookies/page.tsx` | Cookie settings |
| `news/page.tsx` | AI News section |
| `components/ui/` | Reusable components |

---

*Last updated: 2026-04-19*
*Version: 1.0 — VoltAgent-inspired, Jerry-customized*