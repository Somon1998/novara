"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useGsapReveal, useGsapCounter } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { advantageIcons, statValues } from "@/data/stats";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function WhyChooseUsSection() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const statsRef = useGsapCounter<HTMLDivElement>();
  const { messages } = useTranslation();
  const t = messages.advantages;

  const stats = useMemo(
    () =>
      statValues.map((item) => ({
        ...item,
        label: t.stats.find((s) => s.id === item.id)?.label ?? "",
      })),
    [t.stats]
  );

  const advantages = useMemo(
    () =>
      advantageIcons.map((item) => {
        const text = t.items.find((a) => a.id === item.id);
        return {
          ...item,
          title: text?.title ?? "",
          description: text?.description ?? "",
        };
      }),
    [t.items]
  );

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="section-padding section-glow relative overflow-hidden bg-foreground/[0.015]"
    >
      <div
        className="glow-orb-teal pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-50"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div
          className="mb-16 grid items-center gap-8 sm:mb-20 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          data-reveal
        >
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[1.75rem] border border-card-border/60 shadow-[0_24px_60px_var(--shadow)] sm:max-w-lg lg:mx-0 lg:max-w-none">
            <Image
              src="/images/about-clinic.png"
              alt={t.imageAlt}
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) min(28rem, 90vw), 42vw"
            />
          </div>

          <div className="flex flex-col justify-center text-left lg:max-w-xl">
            <p className="text-base leading-[1.75] text-foreground/80 dark:text-white/75 sm:text-lg">
              {messages.clinic.description}
            </p>
            <div className="mt-8">
              <Button href="#contacts" size="lg">
                {t.contacts}
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="mb-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mb-20 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              data-reveal
              className="glass-card-premium rounded-[1.5rem] p-6 text-center card-hover sm:p-8"
            >
              <p
                data-counter
                data-counter-value={stat.value}
                className="text-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-primary"
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-foreground/90 dark:text-white/90 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {advantages.map((item) => (
            <Card
              key={item.id}
              variant="premium"
              data-reveal
              className="group flex gap-4 !p-5 sm:!p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-[1.65] text-foreground/80 dark:text-white/75">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
