"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";

const benefitEmojis = ["🚀", "✨", "💬", "💰"];

export function WhyChooseUs() {
  const { t } = useLocale();
  const gridRef = useGsapScrollReveal({
    selector: "[data-benefit-card]",
    y: 50,
    stagger: 0.12,
  });

  return (
    <section
      id="why-us"
      className="section-padding bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.whyUs.label}</span>
          <h2 className="section-title">{t.whyUs.title}</h2>
          <p className="section-subtitle">{t.whyUs.subtitle}</p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.whyUs.items.map((item, index) => (
            <div
              key={item.title}
              data-benefit-card
              className="glass-card group rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 text-3xl transition-transform duration-500 group-hover:scale-110">
                {benefitEmojis[index]}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
