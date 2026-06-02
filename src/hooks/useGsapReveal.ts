"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let scrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (!scrollTriggerRegistered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }
}

interface UseGsapRevealOptions {
  selector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
  scale?: number;
  blur?: number;
}

export function useGsapReveal<T extends HTMLElement>(
  options: UseGsapRevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  const {
    selector = "[data-reveal]",
    stagger = 0.08,
    y = 36,
    duration = 0.9,
    start = "top 88%",
    scale = 0.97,
    blur = 6,
  } = options;

  useEffect(() => {
    registerScrollTrigger();
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(elements, { opacity: 1, y: 0, scale: 1, filter: "none" });
        return;
      }

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y,
          scale,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, [selector, stagger, y, duration, start, scale, blur]);

  return containerRef;
}

interface UseGsapCounterOptions {
  selector?: string;
  duration?: number;
  start?: string;
}

export function useGsapCounter<T extends HTMLElement>(
  options: UseGsapCounterOptions = {}
) {
  const containerRef = useRef<T>(null);
  const { selector = "[data-counter]", duration = 2, start = "top 85%" } =
    options;

  useEffect(() => {
    registerScrollTrigger();
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const target = el as HTMLElement;
        const raw = target.dataset.counterValue ?? target.textContent ?? "0";
        const suffix = raw.replace(/[\d]/g, "");
        const endValue = parseInt(raw.replace(/\D/g, ""), 10);

        if (Number.isNaN(endValue)) return;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: endValue,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start,
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            target.textContent = `${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [selector, duration, start]);

  return containerRef;
}
