"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function useTranslation() {
  const { locale, messages, setLocale } = useLocale();
  return { locale, messages, setLocale };
}
