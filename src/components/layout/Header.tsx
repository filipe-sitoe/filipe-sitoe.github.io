import { LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { Container } from "./Container";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <Container className="flex h-16 items-center justify-center gap-7 sm:gap-10">
        <nav aria-label="Main">
          <ul className="flex items-center gap-7 text-[15px] text-white/75 sm:gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span aria-hidden="true" className="h-4 w-px bg-white/20" />
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className="text-white/75 transition-colors hover:text-white"
        >
          <LinkedInIcon className="size-[18px]" />
        </a>
      </Container>
    </header>
  );
}
