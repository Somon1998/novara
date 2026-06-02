import type { Locale } from "./types";
import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";
import { tj } from "./dictionaries/tj";
import type { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { ru, en, tj };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(values[key] ?? ""),
  );
}

export type { Locale, Dictionary };
export { DEFAULT_LOCALE, LOCALE_OPTIONS, LOCALE_STORAGE_KEY, LOCALES, isLocale } from "./locales";
