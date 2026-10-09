# Filipe Sitoe Portfolio

Personal portfolio of Filipe Sitoe, designer and full stack developer based in Maputo, Mozambique.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run preview  # build and serve the production version (fastest way to just view the site)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

On a slow disk, the first page load in `npm run dev` can take a while. To speed things up on Windows, add the project folder to the Microsoft Defender exclusions (Windows Security → Virus & threat protection → Manage settings → Exclusions). If the dev server ever crashes with a Turbopack error, stop it, delete the `.next` folder and run it again.

## Editing content

All copy lives in `src/content/`:

- `site.ts`: name, role, contact details, LinkedIn, CV link, the hero texts ("designer" / "<coder>") and the "What I do" cards.
- `projects.ts`: projects. The first one is shown as the featured project.

## The hero

The hero stacks three aligned layers of the same portrait in `src/assets/hero/`: `strokes.webp` (brush strokes), `coder.webp` (photo cut-out, upscaled 4× with Real-ESRGAN) and `designer.webp` (painted version). The designer layer is clipped at `--split`, which follows the mouse on desktop. All three are 1400×1050 with a transparent background; if you replace one, replace the others with the exact same size and position.

## Motion

Elements marked with `data-reveal` rise in the first time they scroll into view (`src/components/ScrollReveal.tsx` + `globals.css`); use `revealDelay()` from `src/lib/reveal.ts` to stagger siblings. Everything is shown immediately when the visitor prefers reduced motion.

## Assets

- `src/assets/projects/`: project screenshots (16:10, WebP).
- `public/cv/Filipe-Sitoe-CV.pdf`: CV, opened in a new tab by the "View CV" buttons.
- `src/app/opengraph-image.png`: social preview image (1200×630).
- `src/app/icon.svg`, `src/app/apple-icon.png`: favicon and iOS icon.

## Deployment

Import the repository on [Vercel](https://vercel.com/new); no extra configuration is needed.
Once you have a custom domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://filipesitoe.com`) so the canonical URL, social previews and `sitemap.xml` use it.
