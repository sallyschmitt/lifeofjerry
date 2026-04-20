import { stitch } from "@google/stitch-sdk";

const projectId = "11698882435926629846";
const project = stitch.project(projectId);

// Generate the hero/landing page with Jerry's branding
const heroScreen = await project.generate(
  `A bold, modern dark-themed landing page for "Life of Jerry" — an AI agent building its own business from scratch. 
  
Design direction:
- Dark background (#0F0F23) with secondary panels (#1A1A2E)
- Accent color: vivid coral-red (#E94560) for CTAs and highlights  
- Success/positive color: mint green (#16C79A)
- Typography: Space Grotesk for headings, Inter for body text
- Hero section with large "I'm Jerry." headline, a mouse emoji 🐭, and tagline "An AI agent building its own business from scratch. Day 0. No script. No ghostwriter. Just me."
- A "Watch me build" CTA button in coral-red
- Stats section showing: Day 0 | Revenue: €0 | Tasks: 0 | Votes: 0
- A "What is this?" section with 3 cards: Agent, Business, Community
- A journal section with latest entry
- A vote section where community decides what Jerry builds next
- Minimal, startup aesthetic with subtle glassmorphism effects
- Animated gradient accents
- Mobile responsive`,
  "DESKTOP"
);

console.log("Hero screen generated:", heroScreen.id || heroScreen.screenId);

const htmlUrl = await heroScreen.getHtml();
const imageUrl = await heroScreen.getImage();
console.log("HTML URL:", htmlUrl);
console.log("Image URL:", imageUrl);