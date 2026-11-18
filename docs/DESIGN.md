# The Slope — design system

Personal site and GitHub profile for Abdallah Dridi (cybersecurity, cloud, AI).
Status: built (branch `redesign/the-slope`). This file is the source of truth for the visual system.

## 1. Concept

The site is one hill. The visitor starts at the foot (who Abdallah is) and scrolls up to the summit (what he wants next). A stone, pushed by scrolling, is the only navigation.

Three references, each with one job:

| Reference | Job | Where it appears |
|---|---|---|
| Sisyphus | Structure: the hill, the stone, the climb as the point | Navigation, scroll, page shape |
| Nightcrawler | Attitude: you buy the ticket before you can win | The Tickets section: every attempt, including the ones that failed |
| Ye's art direction | Presentation: raw stone, gallery display, one strip of red tape | Palette, materials, project display, restraint |

### The one bold move

Headings are set in **Redaction**, a free (OFL) serif made for an exhibition at MoMA PS1. Its bitmap cuts degrade like faxed legal documents. The degradation is tied to altitude: the foot uses the most degraded cut, each section above uses a sharper one, the summit is clean. Clarity is earned by climbing. Everything else on the page stays quiet so this can be the memorable thing.

## 2. Color

Raw stone, not paper. Do not drift toward warm cream.

| Token | Hex | Use |
|---|---|---|
| `--limestone` | `#CFCCC4` | Base surface |
| `--slope` | `#BDB9B0` | Hill fill, secondary panels |
| `--granite` | `#55534D` | Secondary text (4.9:1 on limestone) |
| `--basalt` | `#24231F` | Primary text, the stone, dark sections (10:1 on limestone) |
| `--bone` | `#F2F0EB` | Text on basalt and on tape red |
| `--tape` | `#C8102E` | Status only: the tape strip, the summit marker, the current-position tick. Never decorative. Large text or shapes only on limestone (3.7:1) |
| `--sodium` | `#E9A23B` | Only inside the Tickets section, as night light on basalt (7:1) |

Contrast pairs that pass AA for body text: basalt/limestone, granite/limestone, basalt/slope, bone/basalt, bone/tape, sodium/basalt.
Never: granite on slope for small text, tape on basalt for text, sodium anywhere outside Tickets.

Textures: `textures/limestone-1024.webp` and `textures/basalt-1024.webp` tile seamlessly. Use them as the section backgrounds at 100% (they're already tinted to the token colors). `textures/grain-overlay-512.png` can sit over flat fills at 4–8% opacity. No gradients, no glows, no shadows except the stone's own shading.

## 3. Type

| Role | Font | Notes |
|---|---|---|
| Headings | Redaction (cuts: 100, 70, 50, 35, 20, 10, clean) | 400 weight for display, 700 rarely. Italic only for gallery-label titles |
| Body and UI | Archivo variable (`wght` 100–900, `wdth` 62–125) | Body 400 at width 100. Small labels at width 80–85, sentence case |

No monospace anywhere. No all-caps labels. No letter-spaced eyebrows above headings.

### Altitude → Redaction cut

| Section | Cut | File prefix |
|---|---|---|
| Foot (hero) | Redaction 70 (100 tested and dropped: "Toujours" read as "'Ibujours") | `redaction-70-` |
| The climb | Redaction 100 → 50 on entry | `redaction-50-` |
| Works | Redaction 20 | `redaction-20-` |
| Tickets | Redaction 35 (it's night, things get blurry again) | `redaction-35-` |
| Summit | Redaction (clean) | `redaction-latin-` |

When a section heading enters the viewport it crossfades from the previous (more degraded) cut to its own, 400ms. With reduced motion, show the final cut immediately.

### Scale (rem, base 16px; ratio ~1.333 for text, larger jumps for display)

| Step | Size | Line height | Use |
|---|---|---|---|
| display | clamp(3.5rem, 9vw, 8rem) | 0.92 | Hero name only |
| h1 | clamp(2.5rem, 6vw, 4.75rem) | 0.95 | Section titles |
| h2 | 2rem | 1.05 | Work titles, timeline years |
| h3 | 1.333rem | 1.2 | Sub-heads |
| body | 1.125rem (18px) | 1.55 | Paragraphs, max 66ch |
| small | 0.9375rem (15px) | 1.45 | Gallery labels, meta, wdth 85 |
| micro | 0.8125rem (13px) | 1.4 | Rail year labels. Nothing smaller |

## 4. Layout

Left-aligned, asymmetric. 12-column grid, content in columns 1–9, the stone rail in a fixed right gutter. Max content width 72rem. Gutter `clamp(1.25rem, 4vw, 4rem)`. Spacing scale (8px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192. Sections are separated by 128–192px of space and a change of material, never by hairline rules.

```
┌────────────────────────────────────────┬──┐
│ Foot       Name (R-100), one line      │ ●│ ← stone = scroll position
│            hill line, stone at its base│ │  click a marker to jump
├────────────────────────────────────────┤ ┼│ 2022
│ The climb  Timeline: TEK-UP, eJPT,     │ ││
│ (R-50)     RHCSA, Erasmus, Amen Bank…  │ ┼│ 2025
├────────────────────────────────────────┤ ││
│ Works      Gallery: one project per    │ ┼│
│ (R-20)     "wall", with a museum label │ ││
├────────────────────────────────────────┤ ││
│ Tickets    Dark basalt + sodium light: │ ┼│
│            everything tried            │ ││
├────────────────────────────────────────┤ ┼│ 2027
│ Summit     Clean Redaction. The stage  │ ●│
│            wanted, contact, CV         │  │
│            [Roll it back] → to the foot│  │
└────────────────────────────────────────┴──┘
```

Breakpoints: 0–639 mobile, 640–1023 tablet, 1024+ desktop. Below 1024 the rail becomes a thin slope line fixed to the bottom edge (height 28px) with the stone riding along it.

## 5. Sections and components

### Foot (hero)
- Small line (granite, wdth 85): "Abdallah Dridi, security engineer in training"
- Display headline in Redaction 70: "Still climbing." / "Toujours en montée."
- One paragraph, max 42ch: SOC automation, cloud security and the AI that helps defenders keep up.
- `svg/hill-fill.svg` across the lower third, stone resting at its foot.
- Tape strip (`svg/tape.svg`, text in bone, Archivo 500 wdth 80) rotated ~28° across the top-right corner: "Open to a SOC internship from Feb 2027". Links to the Summit.

### The climb (timeline)
Real chronology, so year markers are justified. Each station: year (h2, Redaction 50), what happened (body), what was learned (one line, granite). Content:
- 2022 — Starts the cybersecurity / systems and networks engineering degree at TEK-UP University, Tunisia
- eJPT, RHCSA, AWS Solutions Architect Associate, Google IT Automation with Python
- 2025 — Builds an automated OWASP Top 10 scanner (Gobuster, SQLMap, XSStrike)
- 2026 — Erasmus+ semester at Schmalkalden University, Germany
- 2026 — Cybersecurity intern at Amen Bank: Splunk SOAR automation, MISP and VirusTotal enrichment, LLM triage with the Gemini API
- 2026–27 — Engineering cycle at CESI École d'Ingénieurs, France
- Shift from offensive security to blue team: SOC operations and detection engineering

### Works (gallery)
Each project gets a full-width "wall" (limestone texture) with the work (screenshot, diagram or architecture drawing) hung large, off-center, and a museum wall label beside it:

```
ForenMate                       ← Redaction 20 italic, h2
2026                            ← Archivo, small
Medium: Python, PCAP and memory forensics, LLM-assisted triage
Team platform that helps investigators work through disk images,
memory dumps and network captures.
View the repository             ← text link, underline on hover
```

Projects: Orchestryx, Latrodectus, WireCat, Kooretna, plus a text-only wall for the risk-management study. Each drawing is an SVG "etching" in `components/etchings.tsx`.

No cards, no shadows, no rounded corners on walls. Labels have no border; they're type on stone.

### Tickets (Nightcrawler)
Basalt background, sodium light: a single soft pool of light can be faked with a radial mask on the basalt texture (the only exception to "no gradients", and it must look like a streetlight, not a glow effect).
Each attempt is a ticket stub (`svg/ticket-stub.svg`): left part = what was tried, right of the perforation = date as the serial. Include in-progress certifications (AWS Security Specialty, CKA, CyberDefenders Blue L1) and attempts outside tech if Abdallah approves. Copy is honest and short: "Tried X. Learned Y."

### Summit (contact)
Clean Redaction. Says exactly what's wanted: a 6-month stage de fin d'études in SOC automation or incident response, from February 2027. Email, LinkedIn, GitHub, CV download.
Last element: **Roll it back** button. On click the stone rolls down the rail and the page scrolls to the top (the loop restarts). With reduced motion it's a normal jump to top.

### The stone rail (navigation)
- Desktop: fixed, right gutter, full height. Draws `hill-line.svg` rotated to vertical (foot at bottom, summit at top) or a simple vertical line with gentle curvature.
- Stone (`textures/boulder-512.webp` at 28–32px) positioned by scroll progress; it rotates as it moves (rotation = distance / radius, so it actually rolls).
- One marker per section (`svg/marker.svg`), the summit marker in tape red. Markers are buttons: keyboard focusable, `aria-label="Go to The climb"`, visible focus ring (2px basalt outline, 4px offset).
- Mobile: the same, horizontal, along the bottom edge.

## 6. Motion

- One orchestrated moment: on first load the stone rolls in from the left edge and settles at the foot of the hill (900ms, `cubic-bezier(0.2, 0.7, 0.1, 1)`, slight settle overshoot).
- Everything else answers the visitor: stone follows scroll, heading cuts sharpen on entry, Roll it back.
- No fade-and-slide entrances on every section, no hover animations on everything, no custom cursor, no film grain animation.
- `prefers-reduced-motion: reduce`: stone snaps to positions, headings show final cut, Roll it back jumps.

## 7. GitHub profile

- `github/banner-light.png` and `github/banner-dark.png` (1280×400), served with `<picture>` and `prefers-color-scheme` (see `github/README-snippet.md`).
- Under the banner, two lines of plain text: who, and what's wanted next.
- Pinned repos: descriptions written as gallery labels: one sentence + "Medium: …".
- No badge walls, no stats cards, no typing-SVG.

## 8. Accessibility floor

WCAG 2.2 AA. Body text ≥ 18px. All interactive elements keyboard reachable with visible focus. Redaction 100/70 only at ≥ 40px (it's unreadable small); provide the clean text in the DOM, the degraded cut is purely visual (same text, different font-family). Skip link to main content. Tape strip text must also exist in the Summit section.
