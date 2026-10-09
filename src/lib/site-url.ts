/**
 * Public URL of the site, used for SEO (canonical URL, Open Graph, sitemap).
 * The GitHub Pages workflow sets NEXT_PUBLIC_SITE_URL to the Pages address
 * (e.g. https://filipesitoe.github.io); set it yourself for a custom domain.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
