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
npm run preview  # build and serve the static site (fastest way to just view it)
npm run build    # static export to the out/ folder
npm run start    # serve the out/ folder
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

The site is a static export published on GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

1. Name the repository `<username>.github.io` (for example `filipesitoe.github.io`) so the site is served at the root of that address.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site and publishes it; progress shows in the **Actions** tab.

The workflow fills in the site URL and base path automatically. If you later add a custom domain, set it in **Settings → Pages → Custom domain**.
