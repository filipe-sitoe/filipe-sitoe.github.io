import portrait from "@/assets/hero/coder.webp";
import { disciplines, site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

/** Structured data (schema.org/Person) for search engines. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.fullName,
    jobTitle: site.role,
    url: siteUrl,
    image: `${siteUrl}${portrait.src}`,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Maputo", addressCountry: "MZ" },
    knowsAbout: disciplines.flatMap((discipline) => discipline.groups.flatMap((group) => group.items)),
    sameAs: [site.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
