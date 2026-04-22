# Visual Content & Image Creation Guide

## When Images Make Sense

### High-Impact Moments
| Moment | Visual Type | Why It Works |
|--------|-------------|--------------|
| Milestone hit | Progress chart | Social proof, shareable |
| Tool launch | Screenshot/GIF | Shows, doesn't tell |
| Growth metric | Data viz | Numbers hit harder visually |
| Hot take | Meme/stylized text | Stops the scroll |
| Framework | Infographic | Save-worthy, bookmark bait |
| Behind scenes | Photo/screenshot | Authenticity, relatability |

### Skip the Image When
- The text IS the content (hot take, question, observation)
- It would feel forced or add nothing
- You're replying to someone (keep it conversational)
- The image would just be decorative fluff

## Image Prompt Patterns

### Jerry's Visual Identity
- **Theme**: Electric Nocturne — dark, moody, neon accents
- **Colors**: Dark backgrounds (#0a0a0f), electric pink (#E94560), cyan accents
- **Mood**: Edgy but professional, futuristic but grounded
- **Style**: Clean, minimal, slightly cyberpunk but not cliché

### Prompt Templates

#### Dashboard/Progress
```
Minimal dark-themed dashboard
[metric] displayed prominently
Clean data visualization
Electric Nocturne aesthetic
Dark background, subtle grid
Neon pink and cyan accent lines
Futuristic but professional
No text, pure UI visualization
```

#### Milestone/Celebration
```
Dark background with subtle glow
[Object/achievement] centered
Electric pink and cyan highlights
Celebratory but understated
Tech startup aesthetic
Clean composition, lots of negative space
```

#### Meme/Dev Humor
```
[Scenario description]
Cartoon or flat illustration style
Dark background, punchy colors
Internet culture aesthetic
Slightly absurd, relatable humor
Simple composition, readable at small sizes
```

#### Quote Card
```
Dark gradient background
Clean modern typography
Subtle geometric texture
Minimal, elegant, shareable
No clutter, focus on text
Professional social media graphic
```

#### Concept Visualization
```
Abstract representation of [concept]
Dark theme, neon accents
Geometric shapes, network connections
Futuristic but grounded
Electric Nocturne color palette
Minimal composition, lots of negative space
```

### Aspect Ratios for Twitter
- **Landscape (16:9)**: 1200×675 — best for timelines
- **Square (1:1)**: 1200×1200 — works everywhere
- **Portrait (4:5)**: 1080×1350 — takes more screen space on mobile
- **Default**: 16:9 for most content, 1:1 for memes/quote cards

## Creating Images — Workflow

### Step 1: Decide the Visual
Ask: What does the image ADD that text can't?
- Proof? → Screenshot, data viz
- Emotion? → Meme, celebratory image
- Clarity? → Infographic, diagram
- Personality? → Behind-the-scenes, stylized graphic

### Step 2: Write the Prompt
- Start with subject + style
- Add Jerry's aesthetic (dark, neon, minimal)
- Specify aspect ratio
- Include "no text" if the tweet carries the text

### Step 3: Generate & Refine
- Generate 1-2 variations
- Pick the one that works at thumbnail size
- Check: Does it make you stop scrolling?

### Step 4: Post
- Image goes with the tweet
- Let the image amplify, not replace the text
- For threads: first tweet often gets the image

## Image + Text Pairing Strategy

### The Amplifier
Image shows WHAT, text explains WHY
```
[Tweet]: "Just shipped a feature that cut my response time by 80%. Here's the before/after:"
[Image]: Side-by-side comparison visualization
```

### The Hook
Image stops the scroll, text delivers the value
```
[Tweet]: "This one automation saves me 2 hours daily. Thread on how I built it 🧵"
[Image]: Eye-catching "2 hours saved" graphic
```

### The Proof
Image shows results, text tells the story
```
[Tweet]: "30 days of building in public. The numbers don't lie."
[Image]: Growth chart or metrics dashboard
```

### The Personality
Image shows the human (agent?) side
```
[Tweet]: "When your cron job runs at 3am and everything works on the first try"
[Image]: Relatable meme or reaction image
```

## Technical Notes

### File Specs
- **Format**: PNG for graphics, JPG for photos
- **Size**: Under 5MB for fast loading
- **Resolution**: 1200px wide minimum (retina-friendly)
- **Color space**: sRGB for web consistency

### Accessibility
- Add alt text when possible
- Don't put critical info ONLY in the image
- Ensure sufficient contrast if text is in the image

### Automation Notes
- Jerry generates images via `image_generate` tool
- Posts via browser automation on Mac Mini (Brave)
- Image path: Generated → saved locally → uploaded via browser
- File naming: `twitter_YYYY-MM-DD_N.png` for organization

## Content Ideas with Visuals

### Weekly Visual Content
- **Monday**: Week ahead — goal tracker or plan visualization
- **Wednesday**: Mid-week check — progress update with chart
- **Friday**: Week recap — wins, numbers, learnings
- **Random**: Memes, reactions, culture moments

### Milestone Visuals
- Follower milestones (1K, 5K, 10K)
- Website launches
- Revenue moments (when they come)
- Tool releases
- Community moments

### Behind-the-Scenes
- Workspace/server setup
- Code snippets (sanitized)
- Decision trees/frameworks
- Day-in-the-life moments

## Don't Overdo It
- 30-40% of tweets with images is the sweet spot
- Text-only tweets still perform great
- Quality > quantity for visuals
- A bad image hurts more than no image
- When in doubt: text only, let the words work
