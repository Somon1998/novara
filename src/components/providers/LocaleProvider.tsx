"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  getDictionary,
  interpolate,
  isLocale,
  LOCALE_STORAGE_KEY,
} from "@/i18n";
import type { Dictionary, Locale } from "@/i18n";
import {
  getFeaturedProducts,
  getFilterOptions,
  getLocalizedCategories,
  getLocalizedProducts,
} from "@/data/localized";
import type { Category, Product } from "@/types";
import type { FilterCategory } from "@/types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  products: Product[];
  categories: Category[];
  featuredProducts: Product[];
  filterOptions: { id: FilterCategory; label: string }[];
  format: typeof interpolate;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const effectiveLocale = mounted ? locale : DEFAULT_LOCALE;

  useEffect(() => {
    const htmlLang = effectiveLocale === "tj" ? "tg" : effectiveLocale;
    document.documentElement.lang = htmlLang;
  }, [effectiveLocale]);

  const value = useMemo<LocaleContextValue>(() => {
    const t = getDictionary(effectiveLocale);
    return {
      locale: effectiveLocale,
      setLocale,
      t,
      products: getLocalizedProducts(effectiveLocale),
      categories: getLocalizedCategories(effectiveLocale),
      featuredProducts: getFeaturedProducts(effectiveLocale),
      filterOptions: getFilterOptions(effectiveLocale),
      format: interpolate,
    };
  }, [effectiveLocale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
