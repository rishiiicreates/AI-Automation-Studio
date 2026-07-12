# Brokkrs

Brokkrs is a premium AI automation studio website built to position the brand as a technical partner for companies that want to reduce manual work, modernize their product stack, and ship reliable automation systems. The site is not a generic portfolio or agency template. It is a full marketing and lead-generation experience for an AI-first studio that works across workflow automation, agentic systems, web development, app development, chat agents, and backend infrastructure.

The overall message of the site is simple: Brokkrs does not sell hype. It sells systems. The copy, motion, page structure, and visual language all reinforce the idea that automation without architecture falls apart, and that good AI work has to survive production, scale, and edge cases.

## What This Website Is About

This site presents Brokkrs as a studio for teams that need practical automation and software engineering, not just experiments. The homepage introduces the studio as a combination of strategy, execution, and systems thinking. The services pages explain the kinds of work the studio offers. The portfolio page shows example engagements and case-study style project cards. The blog publishes educational content around RAG, agentic AI, and workflow automation. The consultation flow gives visitors an immediate way to talk to the studio through a conversational AI assistant.

In practice, the website serves four jobs at once:

1. Explain what Brokkrs does.
2. Prove that the team understands technical execution.
3. Show visual and interaction polish that suggests premium quality.
4. Convert visitors into consultation leads.

## Core Positioning

The brand position is intentionally sharp:

- Brokkrs builds AI automation systems, not one-off demos.
- Brokkrs focuses on operational leverage, not superficial AI branding.
- Brokkrs treats infrastructure as part of the product, not an afterthought.
- Brokkrs blends design, engineering, and AI systems into one studio offering.

That shows up in the copy across the site. The site repeatedly emphasizes architecture, resilience, production readiness, scale, and automation that reduces drag on real teams.

## Main Pages

### Home

The homepage is the main narrative page. It assembles the primary sections of the site in this order:

- Hero section introducing Brokkrs as an AI automation studio.
- Focus section that frames the studio philosophy.
- Marquee section for industries and capability signals.
- Portfolio preview.
- Parallax gallery for visual movement and depth.
- Services overview.
- Process section.
- Testimonials.
- Call to action.

The home page is designed to feel immersive and editorial. It is not a standard SaaS landing page. It uses motion, layered backgrounds, doodle-style accents, textured paper visuals, and large typography to create a more stylized studio identity.

### About

The About page explains the studio’s point of view in a more direct, manifesto-like way. It focuses on themes like:

- Automation needs architecture.
- Strong systems beat gimmicks.
- The studio works with engineering and operations teams.
- Execution matters more than prototypes.

The page also uses parallax image movement and strong color blocks to keep the same visual language as the rest of the site.

### Services

The Services page breaks the studio offering into six concrete categories:

- Workflow automation.
- Agentic AI systems.
- Web development.
- App development.
- AI chat and support agents.
- Data and backend infrastructure.

This page is the clearest summary of the business. It tells visitors exactly what Brokkrs can build and what is included in each kind of engagement.

### Portfolio

The Portfolio page showcases selected work examples across AI, RAG, web development, data infrastructure, and chat agents. The cards are intentionally visual and minimal, acting more like featured case studies than detailed reports. The goal is to communicate breadth and technical range while keeping the page highly visual.

### Blog

The Blog section publishes educational and authority-building content. The current articles focus on topics such as:

- Why RAG is useful for internal data access.
- Common mistakes that break agentic AI systems in production.
- Why workflow automation scales better than brittle scripts.

The blog is meant to establish technical credibility and support SEO around the studio’s core service areas.

### Consultation

The consultation experience is one of the most distinctive parts of the site. Visitors can chat with Shiro, the AI consultant, through a guided conversation flow. The assistant asks questions, learns about the visitor’s needs, and eventually collects contact information for the team.

This is not just a contact form replacement. It is part of the brand story: Brokkrs uses AI in its own sales and consultation flow.

### Request Consultation

The request consultation page provides a more traditional lead-capture experience with:

- A contact form.
- FAQs.
- A prompt to chat with the AI consultant.

This page makes it easy for visitors who prefer a conventional form instead of the conversational flow.

## Interaction Model

The site is intentionally motion-heavy, but the motion is part of the brand rather than decoration. The experience uses:

- Smooth scrolling.
- Scroll-triggered reveals.
- Parallax image motion.
- Magnetic button interactions.
- Animated counters.
- Marquees.
- A custom cursor on supported devices.
- Textured overlays and doodle-style visual accents.

The interactions are there to make the site feel handcrafted and premium. They also communicate that the studio cares about motion, polish, and sequencing, which matters for a design-forward technical brand.

## AI And Automation Features

The website is backed by real product-like interactions, not just static marketing pages.

### Chat API

The consultation flow uses a server route that forwards the conversation to Gemini. The assistant prompt is written to behave like a professional Brokkrs consultant named Shiro. It guides the conversation toward understanding the visitor’s needs and collecting lead details.

### Notification API

When a consultation is completed, the site can send a lead summary to Telegram. If Telegram is not configured, the app falls back to logging the summary in the server console.

These two routes make the site feel like a working business tool, not just a brochure.

## Visual Style

The site uses a bold, playful, editorial visual system rather than a clean corporate SaaS look. The aesthetic mixes:

- High-contrast typography.
- Large, expressive headings.
- Thick borders and shadowed card surfaces.
- Bright, saturated color blocks.
- Paper texture overlays.
- Hand-drawn doodle accents.
- Layered motion and parallax.

The result is closer to a creative digital studio than a typical consulting site. That fits the brand promise: technical depth presented with strong taste.

## Tech Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Motion | GSAP, ScrollTrigger, Framer Motion |
| Smooth Scrolling | Lenis |
| Icons | lucide-react |
| Analytics | Vercel Analytics, Vercel Speed Insights |
| AI Chat | Gemini API |
| Notifications | Telegram Bot API |

## Project Structure

```text
src/
  app/
    layout.tsx                 Root layout, metadata, analytics, global wrappers
    page.tsx                   Home page assembly
    globals.css                Global styles and theme tokens
    about/                     About page
    blog/                      Blog listing and blog post routes
    consult/                   AI consultation chat experience
    portfolio/                 Portfolio showcase
    request-consultation/      Contact form and FAQ page
    services/                  Service offering page
    api/
      chat/                    Gemini-backed chat endpoint
      notify/                  Telegram notification endpoint
  components/
    layout/                    Navigation and footer pieces
    sections/                  Page section components
    ui/                        Reusable motion and interaction primitives
public/
  fonts/, images/, textures/   Static assets and visual elements
root html files                Standalone concept and showcase mockups
```

## Standalone HTML Files

The root-level HTML files are separate presentation mockups and visual references. They are not part of the Next.js app routing. They show focused concepts such as:

- AI chat support UI.
- Data infrastructure dashboard visuals.
- RAG system diagrams.
- Web development layout studies.

These files are useful as visual design references and concept artifacts.

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

If port 3000 is already occupied by another Next.js process, stop the stale server first and start the app again.

## Environment Variables

The site can run with a basic local setup, but the AI consultation and notification flows rely on environment variables.

### Required for AI chat

- `GEMINI_API_KEY` - used by `/api/chat`.

### Optional for lead notifications

- `TELEGRAM_BOT_TOKEN` - used by `/api/notify`.
- `TELEGRAM_CHAT_ID` - destination chat for lead summaries.

If Telegram is not configured, the notification route falls back to console logging.

## Content Strategy

The site is written to support three overlapping goals:

1. Brand positioning.
2. Technical credibility.
3. Lead generation.

The copy intentionally avoids generic agency language. Instead, it talks about automation architecture, agentic systems, backend reliability, production readiness, and operational leverage. The blog supports that message with practical technical content, while the consultation flow gives people a direct path to engage.

## Accessibility And UX Notes

- Interactive elements are designed with visible focus states in the broader codebase.
- Animations are layered, but the experience should still be understandable without relying on them alone.
- The content structure uses page sections and clear headings so the site remains scannable.
- The consultation flow supports both guided AI chat and a standard form-based contact path.

## Deployment

The site is designed to be deployed as a standard Next.js application, and Vercel is the natural target.

```bash
npx vercel
```

## In One Sentence

Brokkrs is a highly designed marketing and consultation website for an AI automation studio that builds workflow automation, agentic AI systems, web apps, chat agents, and backend infrastructure for teams that want real operational leverage.
