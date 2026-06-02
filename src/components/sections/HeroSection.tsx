"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { useLocale } from "@/components/providers/LocaleProvider";
import { formatPrice } from "@/utils/formatPrice";

export function HeroSection() {
  const { t, featuredProducts } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const floatingCards = featuredProducts.slice(0, 4);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-title]", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from("[data-hero-subtitle]", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from("[data-hero-buttons]", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from("[data-hero-visual]", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.to("[data-blob='1']", {
        x: 30,
        y: -20,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to("[data-blob='2']", {
        x: -25,
        y: 25,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to("[data-blob='3']", {
        x: 20,
        y: 15,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const priceLabels = { from: t.hero.priceFrom, currency: t.hero.currency };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32"
    >
      <div
        data-blob="1"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/30 to-purple-500/20 blur-3xl"
        aria-hidden
      />
      <div
        data-blob="2"
        className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/25 to-rose-500/15 blur-3xl"
        aria-hidden
      />
      <div
        data-blob="3"
        className="pointer-events-none absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.hero.badge}
          </span>

          <h1
            data-hero-title
            className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t.hero.titleStart}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleEnd}
          </h1>

          <p
            data-hero-subtitle
            className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
          >
            {t.hero.subtitle}
          </p>

          <div data-hero-buttons className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#products" variant="primary" size="lg">
              {t.hero.ctaProducts}
            </Button>
            <Button
              href={getWhatsAppUrl(t.hero.whatsAppGreeting)}
              external
              variant="secondary"
              size="lg"
            >
              {t.hero.ctaWhatsApp}
            </Button>
          </div>
        </div>

        <div
          data-hero-visual
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {floatingCards.map((product) => (
              <div key={product.id} className="min-w-0">
                <div className="glass-card flex h-full min-h-[168px] flex-col overflow-hidden rounded-3xl p-3 shadow-2xl shadow-purple-500/10 sm:min-h-[180px] sm:p-4">
                  <div className="flex h-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 text-3xl dark:from-violet-950/50 dark:to-pink-950/50 sm:h-20 sm:text-4xl">
                    {product.emoji}
                  </div>
                  <p className="mt-3 min-h-11 text-sm font-bold leading-snug text-foreground line-clamp-2">
                    {product.name}
                  </p>
                  <p className="mt-auto pt-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                    {formatPrice(product.price, priceLabels)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            aria-hidden
          >
            <div className="h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
