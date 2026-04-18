# Electric Nocturne — Design System Reference

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--surface` | #000e24 | Background |
| `--surface-container` | #001938 | Card bg |
| `--surface-container-high` | #001f43 | Elevated cards |
| `--primary` | #ff8c96 | Accent/CTA |
| `--primary-container` | #ff7484 | Gradient end |
| `--on-background` | #dae6ff | Primary text |
| `--on-surface-variant` | #8eacdf | Secondary text |
| `--outline-variant` | #284875 | Ghost borders |

## Typography Scale

| Element | Size | Tracking | Weight | Color |
|---------|------|----------|--------|-------|
| Display | 4xl-7xl | -0.04em | Bold | on-background |
| Headline | 2xl-3xl | -0.02em | Semibold | on-background |
| Body | base-lg | normal | Normal | on-surface-variant |
| Label | xs-sm | +0.05em (uppercase) | Medium | outline |

## Component Classes

### Primary Button
```html
<button class="btn-primary-gradient px-8 py-3 rounded-lg font-semibold transition-all ambient-shadow" style="color: var(--on-primary)">
  Click me
</button>
```

### Glass Card
```html
<div class="glass-panel rounded-lg p-6 card-lift" style="background-color: rgba(0, 38, 78, 0.4)">
  Content here
</div>
```

### Navigation
```html
<nav class="sticky top-0 z-50 ghost-border" style="backgroundColor: 'rgba(0, 14, 36, 0.85)', backdropFilter: 'blur(16px)'}">
  <!-- nav content -->
</nav>
```

## Spacing

- Section padding: `py-16` to `py-24`
- Card padding: `p-6` to `p-8`
- Container max-width: `max-w-5xl` (1280px)
- Grid gaps: `gap-4` to `gap-8`

## Animation Reference

| Animation | Class | Duration | Use |
|-----------|-------|----------|-----|
| Fade in up | `animate-fade-in-up` | 0.6s | Page load |
| Float | `animate-float` | 3s | Icons/logos |
| Pulse dot | `animate-pulse-dot` | 2s | Status indicators |
| Card lift | `card-lift` | 0.3s | Hover states |

## Breakpoints

- Mobile: default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## Common Patterns

### Hero Section
```tsx
<section className="py-24 md:py-36 text-center">
  <span className="text-7xl animate-float">🐭</span>
  <h1 className="text-5xl md:text-7xl" style={{ letterSpacing: '-0.04em' }}>
    Headline
  </h1>
</section>
```

### Stats Grid
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="glass-panel rounded-lg p-6 text-center card-lift">
    <div className="text-3xl font-bold stat-glow">123</div>
    <div className="text-xs uppercase tracking-wider">Label</div>
  </div>
</div>
```