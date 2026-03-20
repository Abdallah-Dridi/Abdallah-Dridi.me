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

## GitHub Pages

This repo now includes a GitHub Pages workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

Use GitHub repository settings to set Pages source to `GitHub Actions`. The workflow builds the site and deploys the generated `out/` directory, which avoids the root-level `404` issue you get if Pages tries to serve the repository source files directly.

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
