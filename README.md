# Abdallah Dridi — personal site

Bilingual (EN/FR) portfolio at [abdallah-dridi.me](https://abdallah-dridi.me), designed as "The Slope": the page is a hill, and the stone you push by scrolling is the navigation. Design spec: [`docs/DESIGN.md`](./docs/DESIGN.md).

## Stack

- Next.js App Router, React 19, TypeScript
- Plain CSS design system in `app/globals.css` (Tailwind supplies only the reset)
- Lenis for smooth scrolling (disabled under `prefers-reduced-motion`)
- Self-hosted fonts in `public/fonts`: Redaction (MCKL, OFL) and Archivo (OFL)

## Develop

```bash
npm install
npm run dev
npm run lint && npm run typecheck && npm run build
```

## Where things live

```text
app/            layout, page, globals.css (tokens + all styles)
components/
  stages.tsx    Foot, Climb, Works, Tickets, Summit
  stone-rail.tsx  fixed navigation: the stone follows scroll, markers jump to sections
  cut-heading.tsx headings that sharpen from one Redaction cut to another on entry
  etchings.tsx  SVG line drawings for each project
data/
  content.ts    names, links, tools, certifications (language-neutral)
  en.ts, fr.ts  all copy, one dictionary per language
public/
  fonts/, textures/, images/, cv/
```

To change copy, edit `data/en.ts` and `data/fr.ts`; the French file is type-checked against the English one, so a missing key fails the build.
