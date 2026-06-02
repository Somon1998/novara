"use client";

import { CategoryCard } from "@/components/ui/CategoryCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";

export function CategoriesSection() {
  const { t, categories } = useLocale();
  const gridRef = useGsapScrollReveal({
    selector: "[data-category-card]",
    y: 60,
    stagger: 0.1,
  });

  return (
    <section id="categories" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.categories.label}</span>
          <h2 className="section-title">{t.categories.title}</h2>
          <p className="section-subtitle">{t.categories.subtitle}</p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
