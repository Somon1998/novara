import type { Locale, LocaleOption } from "./types";

export const DEFAULT_LOCALE: Locale = "ru";
export const LOCALE_STORAGE_KEY = "uyutmarket-locale";

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: "ru", label: "Русский", shortLabel: "RU" },
  { code: "tj", label: "Тоҷикӣ", shortLabel: "TJ" },
  { code: "en", label: "English", shortLabel: "EN" },
];

export const LOCALES: Locale[] = LOCALE_OPTIONS.map((l) => l.code);

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
