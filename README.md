# Abdallah Dridi Portfolio

Editorial personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Local `@fontsource` typography packages for offline-safe builds

## Local Development

```bash
npm install
npm run dev
```

Production export:

```bash
npm run build
```

The site is configured with `output: "export"` for static deployment.

## Content Editing

Most portfolio content lives in [`lib/site-data.ts`](./lib/site-data.ts):

- hero copy and quick links
- manifesto text
- current-state positioning
- investigations / work cards
- observation log entries
- contact details

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  contact-section.tsx
  custom-cursor.tsx
  film-grain.tsx
  hero-section.tsx
  identity-section.tsx
  manifesto-section.tsx
  navbar.tsx
  notes-section.tsx
  providers.tsx
  reveal.tsx
  section-shell.tsx
  systems-section.tsx
lib/
  motion.ts
  site-data.ts
```
