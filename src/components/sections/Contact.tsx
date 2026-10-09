import { Container } from "@/components/layout/Container";
import { LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { revealDelay } from "@/lib/reveal";

const links = [
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "WhatsApp", href: site.whatsapp, Icon: WhatsAppIcon },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 bg-ink text-white">
      <Container className="py-24 text-center lg:py-32">
        <h2
          id="contact-title"
          data-reveal
          className="text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] leading-none font-semibold tracking-[-0.045em]"
        >
          {"Let's work together."}
        </h2>
        <p
          data-reveal
          style={revealDelay(100)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-balance text-white/60"
        >
          Have a project in mind or an opportunity to discuss? Send me a message.
        </p>

        <div data-reveal style={revealDelay(200)} className="mt-12">
          <a
            href={`mailto:${site.email}`}
            className="group mx-auto inline-flex max-w-full items-center gap-3 text-xl font-medium tracking-tight sm:text-3xl"
          >
            <MailIcon className="size-6 shrink-0 text-white/50 sm:size-7" />
            <span className="underline decoration-white/25 decoration-2 underline-offset-[10px] transition-colors [overflow-wrap:anywhere] group-hover:decoration-white">
              {site.email}
            </span>
          </a>
        </div>

        <ul data-reveal style={revealDelay(300)} className="mt-12 flex flex-wrap justify-center gap-3">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-[15px] font-medium text-white/85 transition-colors hover:border-white hover:text-white"
              >
                <Icon className="size-4" />
                {label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
