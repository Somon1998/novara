"use client";

import Image from "next/image";
import { useGsapHero } from "@/hooks/useGsapHero";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function HeroSection() {
  const containerRef = useGsapHero();
  const { messages } = useTranslation();
  const t = messages.hero;

  return (
    <section
      id="home"
      ref={containerRef}
      className="noise-overlay relative flex min-h-[100dvh] flex-col justify-center overflow-hidden gradient-bg pt-48 pb-[6.4rem] sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
    >
      <div
        data-hero="glow"
        data-hero-drift="true"
        className="glow-orb animate-pulse-glow pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full"
        aria-hidden="true"
      />
      <div
        data-hero="glow"
        data-hero-drift="true"
        className="glow-orb-teal animate-pulse-glow pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />
      <div
        data-hero="glow"
        data-hero-drift="true"
        className="glow-orb-accent pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full opacity-60"
        aria-hidden="true"
      />

      <div
        data-hero="mesh"
        className="hero-mesh pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="w-full text-left lg:max-w-none">
            <h1 className="hero-title">
              <span data-hero="title-line">{t.titleLine1}</span>
              <span data-hero="title-line" className="text-primary">
                {t.titleLine2}
              </span>
            </h1>

            <p data-hero="subtitle" className="hero-lead">
              {t.subtitle}
            </p>

            <div
              data-hero="actions"
              className="mt-6 flex flex-col gap-3 sm:mt-8 lg:mt-10 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href="#appointment" size="lg" className="w-full sm:w-auto">
                {t.bookConsultation}
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.viewServices}
              </Button>
            </div>
          </div>

          <div
            data-hero="image-wrap"
            className="relative mx-auto -mt-3 w-full max-w-[26rem] sm:mt-0 sm:max-w-[28rem] lg:mx-0 lg:max-w-none lg:justify-self-end"
          >
            <div className="hero-image-panel relative aspect-[734/596] w-full overflow-hidden rounded-[1.875rem] sm:rounded-[2rem]">
              <Image
                src="/images/hero-team.png"
                alt={t.imageAlt}
                fill
                priority
                quality={92}
                className="object-cover object-[center_28%] sm:object-[center_35%] lg:object-center"
                sizes="(max-width: 1024px) min(28rem, 90vw), 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
