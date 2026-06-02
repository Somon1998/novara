import type { Locale, Messages } from "@/i18n/types";
import { en } from "@/i18n/locales/en";
import { ru } from "@/i18n/locales/ru";
import { tj } from "@/i18n/locales/tj";

export const LOCALES: Locale[] = ["ru", "en", "tj"];
export const DEFAULT_LOCALE: Locale = "ru";
export const LOCALE_STORAGE_KEY = "locale";

const messagesMap: Record<Locale, Messages> = {
  ru,
  en,
  tj,
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return messagesMap[locale];
}

export { type Locale, type Messages } from "@/i18n/types";
