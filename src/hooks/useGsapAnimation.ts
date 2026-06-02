"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  scale?: number;
}

/** Хук для плавного появления элементов при скролле */
export function useGsapScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  const {
    selector,
    y = 50,
    stagger = 0.12,
    duration = 0.8,
    start = "top 85%",
    scale,
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = selector
      ? container.querySelectorAll(selector)
      : container.children;

    if (!targets.length) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none reverse",
      },
    };

    if (scale !== undefined) {
      fromVars.scale = scale;
      toVars.scale = 1;
    }

    const tween = gsap.fromTo(targets, fromVars, toVars);

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [selector, y, stagger, duration, start, scale]);

  return ref;
}

/** Хук для одноразовой анимации при монтировании (Hero и т.д.) */
export function useGsapMountAnimation(
  animationFn: (ctx: gsap.Context) => void,
  deps: unknown[] = [],
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      animationFn(ctx as unknown as gsap.Context);
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export { gsap, ScrollTrigger };
