"use client";

import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { serviceImages } from "@/data/services";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ServicesSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.08 });
  const { messages } = useTranslation();
  const t = messages.services;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative bg-foreground/[0.015]"
    >
      <div
        className="glow-orb pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full opacity-40"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {t.items.map((service) => (
            <article
              key={service.id}
              className="flex w-full flex-col rounded-[1.25rem] border border-card-border bg-card/80 p-4 backdrop-blur-sm sm:rounded-[1.5rem] sm:p-5"
            >
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-foreground/[0.06] sm:mb-5 sm:rounded-2xl dark:bg-white/10">
                {service.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                    {service.badge}
                  </span>
                )}
                {serviceImages[service.id] && (
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 88vw, 33vw"
                  />
                )}
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-foreground dark:text-white sm:text-xl">
                {service.title}
              </h3>
              <p className="text-sm leading-[1.65] text-foreground/80 dark:text-white/75 sm:text-[0.9375rem]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
