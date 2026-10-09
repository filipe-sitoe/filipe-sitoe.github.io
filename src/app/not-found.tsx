import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found | Filipe Sitoe",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-xl flex-col justify-center px-6 py-16">
      <p className="text-sm text-subtle">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-lg text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className={buttonClass("primary", "mt-10 self-start")}>
        Back to home
      </Link>
    </main>
  );
}
