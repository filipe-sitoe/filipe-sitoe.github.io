"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

/**
 * Reveals every element marked with `data-reveal` the first time it scrolls into view.
 * The hidden state only applies while <html data-js> is set (see layout.tsx), so the
 * content stays visible if JavaScript is unavailable.
 */
export function ScrollReveal() {
  useEffect(() => {
    window.__revealReady = true;
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      root.removeAttribute("data-js");
      return;
    }

    root.dataset.js = "";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -2% 0px", threshold: 0.1 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
