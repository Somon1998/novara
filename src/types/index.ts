export type CategoryId =
  | "phone"
  | "home"
  | "kitchen"
  | "beauty"
  | "kids"
  | "gifts";

export type ProductBadge = "hit" | "new" | "popular";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  emoji: string;
  productCount: number;
}

export interface ProductBase {
  id: string;
  category: CategoryId;
  price: number;
  badge?: ProductBadge;
  featured?: boolean;
  emoji: string;
}

export interface Product extends ProductBase {
  name: string;
  categoryName: string;
  description: string;
}

export type FilterCategory = CategoryId | "all";

export interface ShopContacts {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  telegramUsername: string;
  telegramUrl: string;
  instagramUsername: string;
  instagramUrl: string;
  city: string;
}
