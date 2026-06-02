"use client";

import { useMemo } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { aboutCardIcons } from "@/data/stats";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function AboutSection() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const { messages } = useTranslation();
  const t = messages.about;

  const cards = useMemo(
    () =>
      aboutCardIcons.map((item) => {
        const text = t.cards.find((c) => c.id === item.id);
        return { ...item, title: text?.title ?? "", description: text?.description ?? "" };
      }),
    [t.cards]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={messages.clinic.description}
        />

        <div
          className="mb-12 rounded-[1.5rem] border border-primary/12 bg-gradient-to-r from-primary/6 via-transparent to-accent/6 p-6 sm:mb-14 sm:p-8"
          data-reveal
        >
          <div className="flex items-start gap-4 sm:gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm">
              <Icon name="location" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold text-foreground dark:text-white">
                {t.addressTitle}
              </h3>
              <p className="mt-1.5 text-sm leading-[1.7] text-foreground/80 dark:text-white/75 sm:text-base">
                {messages.clinic.address}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <Card key={card.id} variant="premium" data-reveal className="group">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-[1.0625rem] font-semibold text-foreground dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-[1.65] text-foreground/80 dark:text-white/75">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
