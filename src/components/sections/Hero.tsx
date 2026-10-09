import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowRightIcon, FileTextIcon } from "@/components/ui/icons";
import { hero, site } from "@/content/site";
import { revealDelay } from "@/lib/reveal";
import { HeroSplit } from "./HeroSplit";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="scroll-mt-16">
      <h1 id="hero-title" className="sr-only">
        {site.name}, {site.role}
      </h1>

      <HeroSplit />

      <div className="border-t border-border">
        <Container className="py-16 text-center sm:py-20">
          <p data-reveal className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {hero.greeting}
          </p>
          <p
            data-reveal
            style={revealDelay(100)}
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-balance text-muted"
          >
            {hero.intro}
          </p>
          <div data-reveal style={revealDelay(200)} className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.cv} target="_blank" rel="noopener noreferrer">
              <FileTextIcon />
              View CV
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch
              <ArrowRightIcon />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
