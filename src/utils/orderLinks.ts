import { SHOP } from "@/constants/shop";

export type OrderChannel = "whatsapp" | "telegram" | "instagram";

export function getWhatsAppOrderUrl(message: string): string {
  return `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** @deprecated используй getWhatsAppOrderUrl */
export function getWhatsAppUrl(message?: string): string {
  if (message) {
    return getWhatsAppOrderUrl(message);
  }
  return `https://wa.me/${SHOP.whatsappNumber}`;
}

export function getTelegramOrderUrl(message: string): string {
  return `https://t.me/${SHOP.telegramUsername}?text=${encodeURIComponent(message)}`;
}

export function getInstagramOrderUrl(): string {
  return `https://ig.me/m/${SHOP.instagramUsername}`;
}

export function getOrderChannelUrl(channel: OrderChannel, message: string): string {
  switch (channel) {
    case "whatsapp":
      return getWhatsAppOrderUrl(message);
    case "telegram":
      return getTelegramOrderUrl(message);
    case "instagram":
      return getInstagramOrderUrl();
  }
}

export const ORDER_CHANNEL_IDS: OrderChannel[] = [
  "whatsapp",
  "telegram",
  "instagram",
];
