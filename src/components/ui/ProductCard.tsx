"use client";

import type { Product } from "@/types";
import { OrderButton } from "@/components/ui/OrderButton";
import { formatPrice, getBadgeLabel } from "@/utils/formatPrice";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

interface ProductCardProps {
  product: Product;
}

const badgeStyles = {
  hit: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  new: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
  popular: "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
};

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLocale();
  const priceLabels = { from: t.hero.priceFrom, currency: t.hero.currency };

  return (
    <article
      data-product-card
      className={cn(
        "product-card group flex flex-col overflow-hidden rounded-3xl",
        "glass-card transition-all duration-500",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10",
        "dark:hover:shadow-purple-500/20",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 dark:from-violet-950/50 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="absolute inset-0 flex items-center justify-center text-6xl transition-transform duration-700 group-hover:scale-110">
          {product.emoji}
        </div>
        {product.badge && (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-lg",
              badgeStyles[product.badge],
            )}
          >
            {getBadgeLabel(product.badge, t.badges)}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
          {product.categoryName}
        </span>
        <h3 className="text-lg font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <p className="text-xl font-bold gradient-text">
          {formatPrice(product.price, priceLabels)}
        </p>
        <OrderButton
          productName={product.name}
          variant="primary"
          size="sm"
          className="w-full"
        />
      </div>
    </article>
  );
}
