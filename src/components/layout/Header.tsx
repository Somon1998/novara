"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SHOP } from "@/constants/shop";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { OrderButton } from "@/components/ui/OrderButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { BurgerButton, MobileMenu } from "@/components/layout/MobileMenu";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      NAV_LINKS.map((link) => ({
        href: link.href,
        label: t.nav[link.key],
      })),
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-purple-500/10 bg-white/70 py-2.5 shadow-lg shadow-purple-500/5 backdrop-blur-xl sm:py-3 dark:bg-gray-950/70"
            : "bg-transparent py-3 sm:py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="#hero"
            className="group flex shrink-0 items-center gap-2"
            aria-label={`${SHOP.name}${t.nav.homeAria}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
              У
            </span>
            <span className="hidden text-xl font-bold gradient-text sm:block">
              {SHOP.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label={t.nav.mainNavAria}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-purple-500/10 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <OrderButton variant="primary" size="sm" className="hidden lg:inline-flex" />
            <BurgerButton
              isOpen={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
