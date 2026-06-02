"use client";

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { clinicInfo } from "@/data/clinic";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ContactSection() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const { messages } = useTranslation();
  const t = messages.contacts;
  const clinic = messages.clinic;

  const contactItems = [
    {
      icon: "location" as const,
      label: t.address,
      value: clinic.address,
      href: undefined,
    },
    {
      icon: "phone" as const,
      label: t.phone,
      value: clinicInfo.phone,
      href: `tel:${clinicInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "mail" as const,
      label: t.email,
      value: clinicInfo.email,
      href: `mailto:${clinicInfo.email}`,
    },
    {
      icon: "clock" as const,
      label: t.workingHours,
      value: clinic.workingHours,
      href: undefined,
    },
  ];

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="section-padding section-glow relative overflow-hidden"
    >
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                data-reveal
                className="glass-card-premium flex items-start gap-4 rounded-[1.5rem] p-5 card-hover sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-primary">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block font-medium text-foreground dark:text-white transition-colors hover:text-primary focus-ring rounded"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-foreground dark:text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div data-reveal className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
                className="flex-1"
              >
                <Icon name="phone" className="h-4 w-4" />
                {t.call}
              </Button>
              <Button
                href={clinicInfo.telegram}
                variant="secondary"
                external
                className="flex-1"
              >
                <Icon name="telegram" className="h-4 w-4" />
                {t.telegram}
              </Button>
            </div>
          </div>

          <div
            data-reveal
            className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-primary/12 bg-gradient-to-br from-primary/8 via-accent/4 to-transparent shadow-[0_8px_40px_var(--shadow)] lg:min-h-full"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon name="map" className="h-8 w-8" />
              </span>
              <h3 className="text-lg font-semibold text-foreground dark:text-white">
                {t.mapTitle}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-foreground/80 dark:text-white/75">
                {t.mapNote}
              </p>
              <p className="mt-4 rounded-full bg-foreground/5 px-4 py-2 text-xs text-primary/80">
                {t.mapLater}
              </p>
            </div>
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
