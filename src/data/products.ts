import type { ProductBase } from "@/types";

const phoneProducts: ProductBase[] = [
  { id: "phone-1", price: 35, badge: "hit", featured: true, emoji: "📱", category: "phone" },
  { id: "phone-2", price: 25, badge: "popular", featured: true, emoji: "🛡️", category: "phone" },
  { id: "phone-3", price: 30, badge: "new", emoji: "🔌", category: "phone" },
  { id: "phone-4", price: 35, emoji: "⚡", category: "phone" },
  { id: "phone-5", price: 45, badge: "hit", featured: true, emoji: "🔋", category: "phone" },
  { id: "phone-6", price: 40, emoji: "🚗", category: "phone" },
  { id: "phone-7", price: 28, emoji: "📐", category: "phone" },
  { id: "phone-8", price: 80, badge: "popular", featured: true, emoji: "🔌", category: "phone" },
];

const homeProducts: ProductBase[] = [
  { id: "home-1", price: 45, badge: "new", emoji: "🗂️", category: "home" },
  { id: "home-2", price: 35, badge: "popular", emoji: "🥡", category: "home" },
  { id: "home-3", price: 25, emoji: "🪝", category: "home" },
  { id: "home-4", price: 55, emoji: "🚿", category: "home" },
  { id: "home-5", price: 40, emoji: "📦", category: "home" },
  { id: "home-6", price: 25, emoji: "🧽", category: "home" },
  { id: "home-7", price: 50, badge: "hit", featured: true, emoji: "💡", category: "home" },
];

const kitchenProducts: ProductBase[] = [
  { id: "kitchen-1", price: 35, badge: "popular", emoji: "🍶", category: "kitchen" },
  { id: "kitchen-2", price: 55, badge: "hit", featured: true, emoji: "☕", category: "kitchen" },
  { id: "kitchen-3", price: 45, emoji: "🥒", category: "kitchen" },
  { id: "kitchen-4", price: 30, emoji: "🧀", category: "kitchen" },
  { id: "kitchen-5", price: 40, emoji: "🧁", category: "kitchen" },
  { id: "kitchen-6", price: 35, emoji: "🔪", category: "kitchen" },
  { id: "kitchen-7", price: 28, emoji: "🫙", category: "kitchen" },
];

const beautyProducts: ProductBase[] = [
  { id: "beauty-1", price: 40, badge: "new", emoji: "👛", category: "beauty" },
  { id: "beauty-2", price: 25, emoji: "💇", category: "beauty" },
  { id: "beauty-3", price: 30, badge: "popular", emoji: "🪞", category: "beauty" },
  { id: "beauty-4", price: 25, emoji: "🎀", category: "beauty" },
  { id: "beauty-5", price: 45, emoji: "🖌️", category: "beauty" },
  { id: "beauty-6", price: 25, emoji: "📎", category: "beauty" },
  { id: "beauty-7", price: 25, emoji: "🎗️", category: "beauty" },
];

const kidsProducts: ProductBase[] = [
  { id: "kids-1", price: 50, badge: "hit", emoji: "🧩", category: "kids" },
  { id: "kids-2", price: 25, emoji: "🎨", category: "kids" },
  { id: "kids-3", price: 30, emoji: "🖍️", category: "kids" },
  { id: "kids-4", price: 35, emoji: "🍼", category: "kids" },
  { id: "kids-5", price: 45, badge: "new", emoji: "🌙", category: "kids" },
  { id: "kids-6", price: 28, emoji: "✏️", category: "kids" },
  { id: "kids-7", price: 25, emoji: "⭐", category: "kids" },
];

const giftProducts: ProductBase[] = [
  { id: "gifts-1", price: 30, badge: "popular", emoji: "🎀", category: "gifts" },
  { id: "gifts-2", price: 25, emoji: "💌", category: "gifts" },
  { id: "gifts-3", price: 35, badge: "hit", featured: true, emoji: "☕", category: "gifts" },
  { id: "gifts-4", price: 40, emoji: "🕯️", category: "gifts" },
  { id: "gifts-5", price: 55, emoji: "🧸", category: "gifts" },
  { id: "gifts-6", price: 25, emoji: "🏷️", category: "gifts" },
  { id: "gifts-7", price: 25, emoji: "🛍️", category: "gifts" },
];

export const productBases: ProductBase[] = [
  ...phoneProducts,
  ...homeProducts,
  ...kitchenProducts,
  ...beautyProducts,
  ...kidsProducts,
  ...giftProducts,
];
