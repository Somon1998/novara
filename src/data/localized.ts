import type { Category, CategoryId, FilterCategory, Product } from "@/types";
import type { Locale } from "@/i18n/types";
import { getDictionary } from "@/i18n";
import { categoryCatalog } from "@/i18n/catalog/categories";
import { productCatalog } from "@/i18n/catalog/products";
import { productBases } from "@/data/products";

export function getLocalizedProducts(locale: Locale): Product[] {
  const texts = productCatalog[locale];

  return productBases.map((base) => {
    const text = texts[base.id];
    const categoryName = categoryCatalog[locale][base.category].name;

    return {
      ...base,
      name: text?.name ?? base.id,
      description: text?.description ?? "",
      categoryName,
    };
  });
}

export function getLocalizedCategories(locale: Locale): Category[] {
  const products = getLocalizedProducts(locale);
  const meta = categoryCatalog[locale];

  const ids: CategoryId[] = [
    "phone",
    "home",
    "kitchen",
    "beauty",
    "kids",
    "gifts",
  ];

  const emojis: Record<CategoryId, string> = {
    phone: "📱",
    home: "🏠",
    kitchen: "🍳",
    beauty: "💄",
    kids: "🧸",
    gifts: "🎁",
  };

  return ids.map((id) => ({
    id,
    name: meta[id].name,
    description: meta[id].description,
    emoji: emojis[id],
    productCount: products.filter((p) => p.category === id).length,
  }));
}

export function getFilterOptions(locale: Locale) {
  const categories = getLocalizedCategories(locale);
  const allLabel = getDictionary(locale).products.filterAll;

  return [
    { id: "all" as const, label: allLabel },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ] satisfies { id: FilterCategory; label: string }[];
}

export function getFeaturedProducts(locale: Locale): Product[] {
  return getLocalizedProducts(locale).filter((p) => p.featured);
}
