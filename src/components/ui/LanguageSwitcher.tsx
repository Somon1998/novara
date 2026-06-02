"use client";

import { LOCALES, type Locale } from "@/i18n";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/cn";

const localeCodes: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  tj: "TJ",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, messages } = useTranslation();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-card-border bg-card/80 p-1 backdrop-blur-sm",
        className
      )}
      role="group"
      aria-label={messages.language.label}
    >
      {LOCALES.map((code) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "min-w-[2rem] rounded-full px-2 py-1 text-[0.6875rem] font-bold transition-all duration-300 focus-ring sm:min-w-[2.5rem] sm:px-3 sm:py-1.5 sm:text-xs",
              isActive
                ? "bg-primary text-white shadow-[0_2px_10px_rgba(53,187,245,0.3)]"
                : "text-foreground/70 hover:text-primary dark:text-white/70 dark:hover:text-primary"
            )}
            aria-pressed={isActive}
            aria-label={messages.language[code]}
            title={messages.language[code]}
          >
            {localeCodes[code]}
          </button>
        );
      })}
    </div>
  );
}
