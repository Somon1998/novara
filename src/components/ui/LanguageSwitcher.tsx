"use client";

import { LOCALE_OPTIONS } from "@/i18n";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-0.5 rounded-lg glass-card p-0.5 sm:gap-1 sm:rounded-xl sm:p-1",
        className,
      )}
      role="group"
      aria-label={t.language.switchAria}
    >
      {LOCALE_OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          className={cn(
            "min-w-[1.75rem] rounded-md px-1.5 py-1 text-[10px] font-bold leading-none transition-all duration-300 sm:min-w-0 sm:rounded-lg sm:px-2.5 sm:py-1.5 sm:text-xs",
            locale === option.code
              ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md"
              : "text-muted hover:text-foreground",
          )}
          aria-pressed={locale === option.code}
          title={option.label}
        >
          {option.shortLabel}
        </button>
      ))}
    </div>
  );
}
