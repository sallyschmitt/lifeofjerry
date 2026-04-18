---
name: web-developer
description: Build and maintain Jerry's website (lifeofjerry.com) using Next.js, Tailwind, and the Electric Nocturne design system. Use for website updates, new features, bugfixes, and deployments. Ensures consistent code quality, proper Git workflow, and successful Vercel deployment.
---

# Web Developer — Jerry's Tech Stack

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Design System:** Electric Nocturne
- **Hosting:** Vercel (auto-deploy from GitHub)
- **Repo:** github.com/sallyschmitt/Main
- **Domain:** lifeofjerry.com

## Design System Reference

### Colors (CSS Variables)
```css
--surface: #000e24;              /* Deep navy background */
--surface-container: #001938;    /* Card backgrounds */
--primary: #ff8c96;              /* Coral-red accent */
--primary-container: #ff7484;    /* Gradient end */
--on-background: #dae6ff;        /* Primary text */
--on-surface-variant: #8eacdf;   /* Secondary text */
--outline-variant: #284875;      /* Ghost borders */
```

### Typography
- **Font:** Space Grotesk (sole typeface)
- **Display:** `letter-spacing: -0.04em`
- **Labels:** UPPERCASE, `letter-spacing: 0.05em`
- **Body:** Regular weight, `color: var(--on-surface-variant)`

### Components
- **Primary Button:** `.btn-primary-gradient` — gradient, shadow
- **Cards:** `.glass-panel` — backdrop-blur, ghost border
- **Container:** Max-width 5xl (1280px), padding px-6

## Workflow

### 1. Before Coding
- [ ] Check current site state
- [ ] Review `mission/website-ideas.md` for backlog
- [ ] Identify specific improvement/feature
- [ ] Plan implementation approach

### 2. Coding
- [ ] Edit files in `/website/src/app/`
- [ ] Follow existing patterns
- [ ] Test locally: `npm run dev` or `npx next build`
- [ ] Ensure no build errors

### 3. Git Workflow
```bash
# Check status
cd /home/node/.openclaw/workspace
git status

# Stage changes
git add website/

# Commit
git commit -m "feat: describe change"

# Push via Composio (use sally@sohoox.de)
composio execute GITHUB_COMMIT_MULTIPLE_FILES \
  --owner sallyschmitt \
  --repo Main \
  --branch main \
  --message "describe change" \
  --author '{"name":"sallyschmitt","email":"sally@sohoox.de"}'
```

### 4. Deployment Check
- [ ] Wait for Vercel build (usually 1-2 min)
- [ ] Visit lifeofjerry.com
- [ ] Verify changes live
- [ ] Check for console errors

## Common Tasks

### Add New Page
1. Create folder: `website/src/app/pagename/`
2. Create `page.tsx` with default export
3. Add to navigation in `layout.tsx`
4. Follow design system for styling

### Update Component
1. Locate component in `website/src/app/`
2. Edit with proper TypeScript types
3. Test in context (where it's used)
4. Check responsive behavior

### Fix Bug
1. Reproduce bug locally
2. Identify root cause
3. Fix with minimal change
4. Test fix thoroughly
5. Document what was wrong

## Code Standards

- **TypeScript:** Strict mode, proper types
- **Naming:** kebab-case for files, camelCase for variables
- **CSS:** Prefer Tailwind utilities, custom classes for complex patterns
- **Accessibility:** Alt text, proper headings, contrast ratios
- **Performance:** Optimize images, lazy load below-fold

## References

- `references/design-system.md` — Full design tokens
- `references/nextjs-patterns.md` — Common patterns
- `references/vercel-deployment.md` — Troubleshooting deploys

## Emergency Contacts

- Build fails? Check `vercel.json` config
- Git push blocked? Verify author email matches GitHub
- Design questions? Check `mission/design-system.md`