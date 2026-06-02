"use client";

import Link from "next/link";
import { SHOP } from "@/constants/shop";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Footer() {
  const { t, categories } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/10 bg-white/50 dark:bg-gray-950/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#hero" className="text-2xl font-bold gradient-text">
              {SHOP.name}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {SHOP.tagline}. {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              {t.footer.categoriesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href="#products"
                    className="text-sm text-muted transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              {t.footer.contactsTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{SHOP.city}</li>
              <li>
                <a
                  href={`tel:${SHOP.phone}`}
                  className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {SHOP.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SHOP.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={SHOP.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-purple-500/10 pt-8 text-center text-sm text-muted">
          © {year} {SHOP.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
