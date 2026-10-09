import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { disciplines } from "@/content/site";
import { revealDelay } from "@/lib/reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16">
      <Container className="py-20 lg:py-28">
        <SectionHeading id="about-title" className="text-muted">
          What I do
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {disciplines.map((discipline, index) => (
            <article
              key={discipline.title}
              data-reveal
              style={revealDelay(index * 140)}
              className="rounded-2xl border border-border p-8 sm:p-10"
            >
              <h3 className="text-2xl font-semibold tracking-tight">{discipline.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-muted">{discipline.text}</p>

              <dl className="mt-8 space-y-5 border-t border-border pt-6">
                {discipline.groups.map((group) => (
                  <div key={group.label}>
                    <dt className="text-sm text-subtle">{group.label}</dt>
                    <dd className="mt-2 text-[15px] leading-relaxed">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
