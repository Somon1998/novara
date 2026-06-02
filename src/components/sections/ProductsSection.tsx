"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ProductCard } from "@/components/ui/ProductCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";
import type { FilterCategory } from "@/types";
import { cn } from "@/utils/cn";

export function ProductsSection() {
  const { t, products, filterOptions, format } = useLocale();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useGsapScrollReveal({
    selector: "[data-product-card]",
    y: 40,
    scale: 0.96,
    stagger: 0.06,
  });
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        !query || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, products]);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-product-card]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.04,
        ease: "power2.out",
      },
    );
  }, [filteredProducts]);

  return (
    <section id="products" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.products.label}</span>
          <h2 className="section-title">{t.products.title}</h2>
          <p className="section-subtitle">{t.products.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <label htmlFor="product-search" className="sr-only">
            {t.products.searchLabel}
          </label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="product-search"
              type="search"
              placeholder={t.products.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "w-full rounded-2xl border border-purple-500/20 bg-white/80 py-4 pl-12 pr-4",
                "text-foreground placeholder:text-muted/60",
                "shadow-sm backdrop-blur-sm transition-all duration-300",
                "focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20",
                "dark:bg-gray-900/80 dark:border-purple-500/20",
              )}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setActiveCategory(option.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === option.id
                  ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "glass-card text-muted hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="mt-12">
          {filteredProducts.length === 0 ? (
            <p className="py-16 text-center text-muted">{t.products.empty}</p>
          ) : (
            <div
              ref={cardsContainerRef}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          {format(t.products.found, {
            count: filteredProducts.length,
            total: products.length,
          })}
        </p>
      </div>
    </section>
  );
}
