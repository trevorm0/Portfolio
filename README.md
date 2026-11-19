# Developer Portfolio (Simplified)

A lean, content-driven portfolio that keeps the original dark tech theme (cyan / blue / violet accents, Unbounded + Manrope + JetBrains Mono) while dropping the heavy 3D world and workbench tools.

## Features

- Dark / light theme toggle (system preference + localStorage)
- Responsive mobile layout with safe-area support
- Content-driven sections: Hero, About, Projects (case-study modal), Skills, Journey, Contact
- Formspree contact form
- Accessibility: skip link, focus styles, reduced-motion

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

Requires Node.js 20.19+ (or 22.12+).

## Editing content

All personal data lives in `src/content/` — edit data files, not components.

| File | Purpose |
|------|---------|
| `src/content/site.ts` | Name, title, about, links, hero hotspots |
| `src/content/projects.ts` | Projects |
| `src/content/skills.ts` | Skill categories |
| `src/content/journey.ts` | Timeline milestones |

Placeholders in `[square brackets]` are highlighted in dev and removed in production builds.

## Contact form

1. Create a form at [Formspree](https://formspree.io)
2. Copy `.env.example` → `.env` and set `VITE_FORMSPREE_ID=your_id`
3. Restart `npm run dev`

## Theme

Use the sun/moon control in the nav. Preference is stored as `portfolio:theme` in localStorage and falls back to `prefers-color-scheme`.
