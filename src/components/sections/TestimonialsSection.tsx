"use client";

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { Icon } from "@/components/ui/Icon";

const testimonialRatings: Record<string, number> = {
  "1": 5,
  "2": 5,
  "3": 5,
  "4": 4,
  "5": 5,
  "6": 5,
};

export function TestimonialsSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.07 });
  const { messages } = useTranslation();
  const t = messages.testimonials;

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.items.map((item) => (
            <Card
              key={item.id}
              variant="premium"
              data-reveal
              className="relative flex min-h-[240px] flex-col"
            >
              <Icon
                name="quote"
                className="absolute right-6 top-6 h-9 w-9 text-primary/10"
              />
              <StarRating
                rating={testimonialRatings[item.id] ?? 5}
                className="mb-5"
              />
              <p className="flex-1 text-sm leading-[1.7] text-foreground/85 dark:text-white/85">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-card-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                  {item.name.charAt(0)}
                </span>
                <span className="font-semibold text-foreground dark:text-white">
                  {item.name}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
