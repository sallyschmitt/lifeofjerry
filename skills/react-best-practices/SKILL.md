---
name: react-best-practices
description: React and Next.js performance optimization and best practices. Use when writing React components, implementing data fetching, optimizing re-renders, reducing bundle size, or reviewing React/Next.js code for performance issues. Covers server components, client-side patterns, hooks optimization, and rendering strategies based on Vercel's official guidelines.
---

# React Best Practices

Comprehensive performance optimization for React and Next.js applications, based on Vercel's guidelines. 45 rules across 8 categories, prioritized by impact.

## When to Use

- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Re-render Optimization | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

---

## 1. Eliminating Waterfalls (CRITICAL)

- **async-defer-await** — Move await into branches where actually used
- **async-parallel** — Use Promise.all() for independent operations
- **async-dependencies** — Use better-all for partial dependencies
- **async-api-routes** — Start promises early, await late in API routes
- **async-suspense-boundaries** — Use Suspense to stream content

```tsx
// ❌ Sequential waterfall
const user = await getUser()
const posts = await getPosts(user.id)

// ✅ Parallel when independent
const [user, posts] = await Promise.all([getUser(), getPosts()])
```

---

## 2. Bundle Size Optimization (CRITICAL)

- **bundle-barrel-imports** — Import directly, avoid barrel files
- **bundle-dynamic-imports** — Use next/dynamic for heavy components
- **bundle-defer-third-party** — Load analytics/logging after hydration
- **bundle-conditional** — Load modules only when feature is activated
- **bundle-preload** — Preload on hover/focus for perceived speed

```tsx
// ❌ Barrel import
import { Button } from '@/components'

// ✅ Direct import
import { Button } from '@/components/Button'
```

---

## 3. Server-Side Performance (HIGH)

- **server-cache-react** — Use React.cache() for per-request deduplication
- **server-cache-lru** — Use LRU cache for cross-request caching
- **server-serialization** — Minimize data passed to client components
- **server-parallel-fetching** — Restructure components to parallelize fetches
- **server-after-nonblocking** — Use after() for non-blocking operations

---

## 4. Client-Side Data Fetching (MEDIUM-HIGH)

- **client-swr-dedup** — Use SWR for automatic request deduplication
- **client-event-listeners** — Deduplicate global event listeners

---

## 5. Re-render Optimization (MEDIUM)

- **rerender-defer-reads** — Don't subscribe to state only used in callbacks
- **rerender-memo** — Extract expensive work into memoized components
- **rerender-dependencies** — Use primitive dependencies in effects
- **rerender-derived-state** — Subscribe to derived booleans, not raw values
- **rerender-functional-setstate** — Use functional setState for stable callbacks
- **rerender-lazy-state-init** — Pass function to useState for expensive values
- **rerender-transitions** — Use startTransition for non-urgent updates

```tsx
// ❌ Re-renders on every state change
const [data, setData] = useState(expensiveCompute(initial))

// ✅ Lazy initialization
const [data, setData] = useState(() => expensiveCompute(initial))
```

---

## 6. Rendering Performance (MEDIUM)

- **rendering-animate-svg-wrapper** — Animate div wrapper, not SVG element
- **rendering-content-visibility** — Use content-visibility for long lists
- **rendering-hoist-jsx** — Extract static JSX outside components
- **rendering-svg-precision** — Reduce SVG coordinate precision
- **rendering-hydration-no-flicker** — Use inline script for client-only data
- **rendering-activity** — Use Activity component for show/hide
- **rendering-conditional-render** — Use ternary, not && for conditionals

```tsx
// ❌ Re-creates every render
const staticContent = <HeavyComponent />

function Page() {
  return <div>{condition ? staticContent : <Fallback />}</div>
}

// ✅ Hoisted outside component
const STATIC_CONTENT = <HeavyComponent />

function Page() {
  return <div>{condition ? STATIC_CONTENT : <Fallback />}</div>
}
```

---

## 7. JavaScript Performance (LOW-MEDIUM)

- **js-batch-dom-css** — Group CSS changes via classes or cssText
- **js-index-maps** — Build Map for repeated lookups
- **js-cache-property-access** — Cache object properties in loops
- **js-cache-function-results** — Cache function results in module-level Map
- **js-cache-storage** — Cache localStorage/sessionStorage reads
- **js-combine-iterations** — Combine multiple filter/map into one loop
- **js-length-check-first** — Check array length before expensive comparison
- **js-early-exit** — Return early from functions
- **js-hoist-regexp** — Hoist RegExp creation outside loops
- **js-min-max-loop** — Use loop for min/max instead of sort
- **js-set-map-lookups** — Use Set/Map for O(1) lookups
- **js-tosorted-immutable** — Use toSorted() for immutability

---

## 8. Advanced Patterns (LOW)

- **advanced-event-handler-refs** — Store event handlers in refs
- **advanced-use-latest** — useLatest for stable callback refs

---

## Quick Decision Tree

```
Is it a performance issue?
│
├── Waterfall/sequential fetching?
│   └── → Category 1 (async-*)
│
├── Large bundle or slow load?
│   └── → Category 2 (bundle-*)
│
├── Server rendering slow?
│   └── → Category 3 (server-*)
│
├── Client re-renders?
│   └── → Category 5 (rerender-*)
│
└── General perf?
    └── → Categories 6-8 (rendering-*, js-*, advanced-*)
```