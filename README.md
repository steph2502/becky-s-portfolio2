# Becky Anjola Lasore — Portfolio

A single-page personal portfolio for Becky Anjola Lasore, a finance &
operations leader, founder, and campus leader. Built with Next.js 14 (App
Router), TypeScript, Tailwind CSS, and a touch of Framer Motion.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with the site's maroon/gold/cream design
  tokens defined in `tailwind.config.ts`
- **Framer Motion** — used sparingly: the hero's initial load-in stagger, and
  a single fade/slide-up reveal per section on scroll
  (`components/RevealSection.tsx`)
- **next/font/google** for Playfair Display (headings) and Lato (body text)
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Composes all sections in order
  globals.css         Base styles, CSS variables, focus states, reduced-motion
components/
  Nav.tsx             Fixed nav with anchor links + mobile hamburger menu
  Hero.tsx            Hero section with Framer Motion load-in
  About.tsx           Two-column about section with pull-quote
  FocusAreas.tsx      4-column "focus areas" grid
  Experience.tsx      Dark professional experience list
  Leadership.tsx      Cream leadership timeline
  Quote.tsx           Full-width maroon pull-quote band
  Skills.tsx          Skills/competencies chips + education & certification
  Contact.tsx         Contact details + resume download card
  Footer.tsx          Footer
  SectionHead.tsx      Shared "tag / heading / description" block
  RevealSection.tsx    Scroll-reveal wrapper (respects prefers-reduced-motion)
lib/
  data.ts             All real content (experience, leadership, skills, etc.)
                      as typed data — no Lorem Ipsum anywhere.
public/
  images/             Photo placeholders — see PLACEHOLDER-README.md
  resume/             CV placeholder — see PLACEHOLDER-README.md
```

## Placeholders to replace before launch

1. **Hero photo panel** and **About photo panel** — currently styled "BAL"
   monogram panels. See `public/images/PLACEHOLDER-README.md` for exact swap
   instructions.
2. **Resume PDF** — the "Download CV (PDF)" button in the contact section
   links to `/resume/becky-anjola-lasore-cv.pdf`, which doesn't exist yet.
   See `public/resume/PLACEHOLDER-README.md`.

## Accessibility & UX notes

- All interactive elements have a visible gold keyboard focus ring
  (`:focus-visible` in `app/globals.css`).
- `prefers-reduced-motion` disables scroll/entrance animations and smooth
  scrolling site-wide.
- Nav collapses to a hamburger menu below 900px width.
- Layout remains usable down to small mobile widths (tested at 375px).

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket (or use the Vercel CLI).
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Deploy.
