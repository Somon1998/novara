import type { ProductBadge } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function formatPrice(
  price: number,
  labels: { from: string; currency: string },
): string {
  return `${labels.from} ${price} ${labels.currency}`;
}

export function getBadgeLabel(
  badge: ProductBadge,
  badges: Dictionary["badges"],
): string {
  const map = {
    hit: badges.hit,
    new: badges.new,
    popular: badges.popular,
  };
  return map[badge];
}
