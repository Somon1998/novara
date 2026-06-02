"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useGsapHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from("[data-hero='glow']", {
        opacity: 0,
        scale: 0.6,
        duration: 1.8,
        stagger: 0.2,
      })
        .from(
          "[data-hero='mesh']",
          { opacity: 0, duration: 1.2 },
          "-=1.4"
        )
        .from(
          "[data-hero='title-line']",
          { opacity: 0, y: 50, rotateX: 12, duration: 0.9, stagger: 0.12 },
          "-=0.8"
        )
        .from(
          "[data-hero='subtitle']",
          { opacity: 0, y: 28, filter: "blur(8px)", duration: 0.8 },
          "-=0.55"
        )
        .from(
          "[data-hero='actions'] > *",
          { opacity: 0, y: 24, scale: 0.95, duration: 0.55, stagger: 0.1 },
          "-=0.35"
        )
        .from(
          "[data-hero='image-wrap']",
          { opacity: 0, scale: 0.88, rotateY: -8, duration: 1.1 },
          "-=0.7"
        )
        .from(
          "[data-hero='ring']",
          { opacity: 0, scale: 0.8, duration: 1 },
          "-=0.9"
        )
        .from(
          "[data-hero='feature']",
          { opacity: 0, y: 24, scale: 0.9, duration: 0.55, stagger: 0.1 },
          "-=0.6"
        );

      gsap.to("[data-hero-drift]", {
        y: -20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 1.2, from: "random" },
      });

      gsap.to("[data-hero='ring']", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
