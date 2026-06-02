"use client";

import type { Category } from "@/types";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const { t, format } = useLocale();

  return (
    <a
      href="#products"
      data-category-card
      className={cn(
        "category-card group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-6",
        "glass-card transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10",
        "dark:hover:shadow-purple-500/20",
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        className={cn(
          "absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40",
          "bg-gradient-to-br from-violet-500 to-pink-500",
        )}
      />

      <span
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 text-3xl transition-transform duration-500 group-hover:scale-110"
        aria-hidden
      >
        {category.emoji}
      </span>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {category.description}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          {format(t.categories.itemsCount, { count: category.productCount })}
        </p>
      </div>
    </a>
  );
}
