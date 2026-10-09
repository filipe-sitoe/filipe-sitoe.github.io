/**
 * Public URL of the site, used for SEO (canonical URL, Open Graph, sitemap).
 * Set NEXT_PUBLIC_SITE_URL once you have a custom domain; on Vercel the
 * project's production domain is detected automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
