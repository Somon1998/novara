import type { ShopContacts } from "@/types";

/** Измените контакты магазина здесь */
export const SHOP: ShopContacts = {
  name: "УютМаркет",
  tagline: "Полезные товары с доставкой по Душанбе",
  phone: "+992939999029",
  phoneDisplay: "+992 93 999 9029",
  whatsappNumber: "992939999029",
  telegramUsername: "Karimzoda_IT_frontend",
  telegramUrl: "https://t.me/Karimzoda_IT_frontend",
  instagramUsername: "somon7650k",
  instagramUrl: "https://www.instagram.com/somon7650k/",
  city: "Душанбе",
};

export const NAV_LINKS = [
  { href: "#hero", key: "home" as const },
  { href: "#categories", key: "categories" as const },
  { href: "#products", key: "products" as const },
  { href: "#how-to-order", key: "howToOrder" as const },
  { href: "#contact", key: "contact" as const },
] as const;
