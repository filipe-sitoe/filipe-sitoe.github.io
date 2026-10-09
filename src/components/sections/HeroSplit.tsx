"use client";

import type { PointerEvent } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import coderImage from "@/assets/hero/coder.webp";
import designerImage from "@/assets/hero/designer.webp";
import strokesImage from "@/assets/hero/strokes.webp";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/site";

/** Decorative code drawn behind the "coder" half, below the text. */
const codeLines = [
  { text: '<section class="hero">', className: "top-[60%] left-[61%] text-[15px]" },
  { text: "display: grid;", className: "top-[66%] left-[67%] text-[17px]" },
  { text: "Next.js  Node.js", className: "top-[72%] left-[59%] text-[30px] tracking-tight" },
  { text: "SELECT * FROM projects;", className: "top-[82%] left-[63%] text-[15px]" },
  { text: "npm run build", className: "top-[88%] left-[70%] text-[17px]" },
  { text: "</>", className: "top-[93%] left-[61%] text-[22px]" },
];

const artSizes = "(min-width: 1280px) 960px, (min-width: 1024px) 800px, 100vw";

/** How far the portrait follows the pointer, as a share of the art width (same feel as the reference). */
const SHIFT = 0.078;

export function HeroSplit() {
  const heroRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const motion = useRef({ x: 0.5, target: 0.5, frame: 0, last: 0, artWidth: 0 });

  useEffect(() => {
    const state = motion.current;
    return () => cancelAnimationFrame(state.frame);
  }, []);

  // Like the reference, the entrance animation starts once the portrait has loaded
  // (or after 3s at the latest), so the halves never slide in empty.
  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;
    const markReady = () => element.setAttribute("data-ready", "");
    const pendingImages = Array.from(element.querySelectorAll("img")).filter((img) => !img.complete);
    if (pendingImages.length === 0) {
      markReady();
      return;
    }

    let pending = pendingImages.length;
    const onSettled = () => {
      pending -= 1;
      if (pending === 0) markReady();
    };
    for (const img of pendingImages) {
      img.addEventListener("load", onSettled, { once: true });
      img.addEventListener("error", onSettled, { once: true });
    }
    const timeout = window.setTimeout(markReady, 3000);
    return () => {
      window.clearTimeout(timeout);
      for (const img of pendingImages) {
        img.removeEventListener("load", onSettled);
        img.removeEventListener("error", onSettled);
      }
    };
  }, []);

  // Eases --x towards the pointer: 1/12 of the remaining distance per 30fps frame, like the reference.
  function step(time: number) {
    const state = motion.current;
    const element = heroRef.current;
    if (!element) return;
    const elapsed = state.last ? Math.min(time - state.last, 100) : 1000 / 60;
    state.last = time;
    state.x += (state.target - state.x) * (1 - Math.pow(11 / 12, elapsed / (1000 / 30)));
    if (Math.abs(state.target - state.x) < 0.0005) state.x = state.target;

    element.style.setProperty("--x", state.x.toFixed(4));
    element.style.setProperty("--shift", `${((0.5 - state.x) * SHIFT * state.artWidth).toFixed(2)}px`);

    if (state.x !== state.target) {
      state.frame = requestAnimationFrame(step);
    } else {
      state.frame = 0;
      state.last = 0;
    }
  }

  function aim(target: number) {
    const state = motion.current;
    state.target = target;
    if (!state.frame) state.frame = requestAnimationFrame(step);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const area = areaRef.current;
    const art = artRef.current;
    if (!area || !art || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    motion.current.artWidth = art.offsetWidth;
    const rect = area.getBoundingClientRect();
    aim(Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)));
  }

  return (
    <div
      ref={heroRef}
      className="hero-split relative overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => aim(0.5)}
    >
      <Container
        ref={areaRef}
        className="relative pt-12 sm:pt-16 lg:h-[calc(100svh-4rem)] lg:min-h-[36rem] lg:max-h-[58rem] lg:pt-0 xl:max-w-7xl"
      >
        <div aria-hidden="true" className="parallax-drift pointer-events-none absolute inset-0 hidden select-none lg:block">
          <div className="hero-enter-right-back absolute inset-0">
            <div className="hero-coder-bg absolute inset-0">
              {codeLines.map((line) => (
                <span key={line.text} className={`absolute font-mono whitespace-nowrap text-[#d4d4d4] ${line.className}`}>
                  {line.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:contents">
          <div className="hero-designer-text lg:absolute lg:top-[20%] lg:left-8 lg:z-20 lg:w-[250px] xl:w-[290px]">
            <div className="hero-enter-text">
              <p className="text-[clamp(2.25rem,1.2rem+4vw,5rem)] leading-none font-bold tracking-[-0.05em] text-[#262626] lg:text-[clamp(4.25rem,9svh,6rem)]">
                {hero.designer.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base lg:mt-5 lg:text-[17px]">
                {hero.designer.text}
              </p>
            </div>
          </div>

          <div className="hero-coder-text text-right lg:absolute lg:top-[20%] lg:right-8 lg:z-20 lg:w-[250px] lg:text-left xl:w-[290px]">
            <div className="hero-enter-text">
              <p className="font-mono text-[clamp(1.85rem,1rem+3.4vw,4.25rem)] leading-none font-medium tracking-[-0.07em] text-[#262626] lg:text-[clamp(3.6rem,7.6svh,5.1rem)]">
                {hero.coder.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base lg:mt-5 lg:text-[17px]">
                {hero.coder.text}
              </p>
            </div>
          </div>
        </div>

        <div
          ref={artRef}
          className="hero-art relative left-1/2 z-10 mt-2 aspect-[4/3] w-[130%] max-w-[640px] -translate-x-1/2 sm:mt-6 lg:absolute lg:bottom-0 lg:mt-0 lg:h-[min(86%,37.5rem)] lg:w-auto lg:max-w-none xl:h-[min(92%,45rem)]"
        >
          <div className="hero-enter-left-back absolute inset-0">
            <Image
              src={strokesImage}
              alt=""
              fill
              loading="eager"
              sizes={artSizes}
              className="hero-designer-bg object-contain object-bottom"
            />
          </div>
          <div className="hero-enter-right absolute inset-0">
            <Image
              src={coderImage}
              alt="Portrait of Filipe Sitoe, half illustrated and half photographed"
              fill
              loading="eager"
              fetchPriority="high"
              sizes={artSizes}
              className="hero-coder-layer object-contain object-bottom"
            />
          </div>
          <div className="hero-enter-left absolute inset-0">
            <Image
              src={designerImage}
              alt=""
              fill
              loading="eager"
              sizes={artSizes}
              className="hero-designer-layer object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
