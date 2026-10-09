import type { CSSProperties } from "react";

/** Delay for elements revealed on scroll (`data-reveal`), used to stagger siblings. */
export function revealDelay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
