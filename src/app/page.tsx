import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <PersonJsonLd />
      <ScrollReveal />
    </>
  );
}
