import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative -mt-px border-t border-white/10 bg-ink text-white/45">
      <Container className="flex flex-col items-center gap-1 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <p>{site.location}</p>
      </Container>
    </footer>
  );
}
