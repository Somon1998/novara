"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";

export function FeaturedProductsSection() {
  const { t, featuredProducts } = useLocale();
  const gridRef = useGsapScrollReveal({
    selector: "[data-product-card]",
    y: 50,
    scale: 0.95,
    stagger: 0.1,
  });

  return (
    <section
      id="featured"
      className="section-padding bg-gradient-to-b from-transparent via-purple-500/[0.03] to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.featured.label}</span>
          <h2 className="section-title">{t.featured.title}</h2>
          <p className="section-subtitle">{t.featured.subtitle}</p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
