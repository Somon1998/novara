"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";

export function HowToOrder() {
  const { t } = useLocale();
  const gridRef = useGsapScrollReveal({
    selector: "[data-step-card]",
    y: 60,
    stagger: 0.2,
  });

  return (
    <section id="how-to-order" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.howToOrder.label}</span>
          <h2 className="section-title">{t.howToOrder.title}</h2>
          <p className="section-subtitle">{t.howToOrder.subtitle}</p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {t.howToOrder.steps.map((step, index) => (
            <div
              key={step.title}
              data-step-card
              className="glass-card relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <span className="text-5xl font-extrabold gradient-text opacity-30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
