import { cn } from "@/lib/cn";

/** Small centred title between two rules, e.g. "SELECTED WORK". The rules grow out when revealed. */
export function SectionHeading({ id, children, className }: { id: string; children: string; className?: string }) {
  return (
    <div data-reveal className={cn("flex items-center gap-6", className)}>
      <span aria-hidden="true" className="reveal-grow h-px flex-1 origin-right bg-current opacity-15" />
      <h2 id={id} className="text-[13px] font-medium tracking-[0.22em] uppercase">
        {children}
      </h2>
      <span aria-hidden="true" className="reveal-grow h-px flex-1 origin-left bg-current opacity-15" />
    </div>
  );
}
