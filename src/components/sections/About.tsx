import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { disciplines, otherSkills } from "@/content/site";
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

          <article
            data-reveal
            style={revealDelay(disciplines.length * 140)}
            className="rounded-2xl border border-border p-8 sm:p-10 md:col-span-2"
          >
            {/* Column gap = 2 × (40px card padding + half the 24px grid gap), so the skills
                line up with the Developer card above. */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-[104px]">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{otherSkills.title}</h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{otherSkills.text}</p>
              </div>

              <dl className="space-y-5 border-t border-border pt-6 md:border-t-0 md:pt-0">
                {otherSkills.groups.map((group) => (
                  <div key={group.label}>
                    <dt className="text-sm text-subtle">{group.label}</dt>
                    <dd className="mt-2.5">
                      <ul className="flex flex-wrap gap-2.5">
                        {group.items.map((skill) => (
                          <li key={skill} className="rounded-full border border-border px-4 py-2 text-[15px]">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
