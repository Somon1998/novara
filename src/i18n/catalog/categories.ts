import type { CategoryId } from "@/types";
import type { CategoryText } from "../types";
import type { Locale } from "../types";

export const categoryCatalog: Record<
  Locale,
  Record<CategoryId, CategoryText>
> = {
  ru: {
    phone: {
      name: "Для телефона",
      description: "Чехлы, защитные стёкла, кабели, зарядки и аксессуары.",
    },
    home: {
      name: "Для дома",
      description: "Органайзеры, контейнеры, полки и полезные мелочи для уюта.",
    },
    kitchen: {
      name: "Для кухни",
      description:
        "Термокружки, бутылки, овощерезки, формы и кухонные аксессуары.",
    },
    beauty: {
      name: "Красота и уход",
      description: "Косметички, зеркала, расчёски, спонжи и аксессуары для ухода.",
    },
    kids: {
      name: "Детские товары",
      description: "Игрушки, раскраски, маркеры, бутылки, ночники и наклейки.",
    },
    gifts: {
      name: "Подарки",
      description: "Подарочные коробки, свечи, кружки, открытки и сувениры.",
    },
  },
  en: {
    phone: {
      name: "For phone",
      description: "Cases, screen protectors, cables, chargers and accessories.",
    },
    home: {
      name: "For home",
      description: "Organizers, containers, shelves and useful home essentials.",
    },
    kitchen: {
      name: "For kitchen",
      description: "Thermo mugs, bottles, slicers, molds and kitchen accessories.",
    },
    beauty: {
      name: "Beauty & care",
      description: "Cosmetic bags, mirrors, combs, sponges and care accessories.",
    },
    kids: {
      name: "Kids products",
      description: "Toys, coloring books, markers, bottles, night lights and stickers.",
    },
    gifts: {
      name: "Gifts",
      description: "Gift boxes, candles, mugs, cards and souvenirs.",
    },
  },
  tj: {
    phone: {
      name: "Барои телефон",
      description: "Қобқҳо, шишаҳои ҳимоявӣ, кабельҳо, қувватдиҳандаҳо ва аксессуарҳо.",
    },
    home: {
      name: "Барои хона",
      description: "Ташкилкунандаҳо, контейнерҳо, рафҳо ва чизҳои фоиданок барои хона.",
    },
    kitchen: {
      name: "Барои ошхона",
      description: "Косаи термоӣ, зарфҳо, резаки сабзавот, қолибҳо ва аксессуарҳои ошхона.",
    },
    beauty: {
      name: "Зебоӣ ва нигоҳубин",
      description: "Косметичкаҳо, оинаҳо, шонаҳо, спонжҳо ва аксессуарҳои нигоҳубин.",
    },
    kids: {
      name: "Молҳои кӯдакона",
      description: "Бозичаҳо, рангкуниҳо, маркерҳо, зарфҳо, чароғҳои шабӣ ва стикерҳо.",
    },
    gifts: {
      name: "Тӯҳфаҳо",
      description: "Қуттиҳои тӯҳфавӣ, шамъҳо, косаҳо, открыткаҳо ва сувенирҳо.",
    },
  },
};
