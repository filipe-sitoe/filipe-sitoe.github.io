import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/content/projects";
import { revealDelay } from "@/lib/reveal";

const card =
  "group relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.28)]";

const linkOverlay =
  "after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-coral";

export function Work() {
  const [featured, ...others] = projects;

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 bg-surface">
      <Container className="py-20 lg:py-28">
        <SectionHeading id="work-title" className="text-muted">
          Selected work
        </SectionHeading>

        <FeaturedProject project={featured} />

        <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => (
            <li key={project.name} data-reveal style={revealDelay(index * 120)} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Screenshot({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <div className="reveal-settle absolute inset-0">
      <Image
        src={project.image}
        alt={`${project.name} website`}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      data-reveal
      className={`${card} mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface lg:border-r lg:border-b-0">
        <Screenshot project={project} sizes="(min-width: 1152px) 670px, (min-width: 1024px) 60vw, 100vw" />
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkOverlay}>
            {project.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </h3>
        <p className="mt-1.5 text-muted">
          {project.subtitle} · {project.year}
        </p>
        <p className="mt-5 leading-relaxed text-pretty text-muted">{project.description}</p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-subtle">{project.stack.join(" · ")}</p>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Visit website
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`${card} flex w-full flex-col`}>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        <Screenshot project={project} sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkOverlay}>
              {project.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h3>
          <span className="shrink-0 text-sm text-subtle tabular-nums">{project.year}</span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">{project.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <p className="text-sm text-subtle">{project.stack.join(" · ")}</p>
          <ArrowUpRightIcon className="size-[18px] shrink-0 text-subtle transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </article>
  );
}
