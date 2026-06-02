"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { clinicInfo } from "@/data/clinic";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const menuVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

export function Header() {
  const { messages } = useTranslation();
  const h = messages.header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-menu-item]", {
        opacity: 0,
        x: 32,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.from("[data-menu-footer]", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.45,
      });
    });

    return () => ctx.revert();
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled
            ? "border-b border-card-border/80 bg-[var(--header-bg)] py-3 shadow-[0_4px_24px_var(--shadow)] backdrop-blur-2xl"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between gap-2">
          <Link
            href="#home"
            className="group flex min-w-0 shrink items-center gap-2.5 focus-ring rounded-xl sm:gap-3"
            aria-label={h.homeAria}
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent-teal to-primary text-white shadow-[0_4px_16px_rgba(53,187,245,0.35)] transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon name="cross" className="relative h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground dark:text-white">
              {clinicInfo.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label={h.navAria}
          >
            {messages.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-all duration-200 focus-ring",
                  item.href === "#home"
                    ? "bg-primary text-[var(--primary-foreground)] shadow-[0_2px_12px_rgba(53,187,245,0.25)] dark:bg-primary dark:text-[var(--primary-foreground)] dark:shadow-[0_2px_12px_rgba(59,196,255,0.25)]"
                    : "text-foreground/90 hover:bg-primary/6 hover:text-primary dark:text-white/90 dark:hover:bg-primary/10 dark:hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <LanguageSwitcher className="flex shrink-0" />
            <ThemeToggle />
            <div className="hidden sm:block">
              <Button href="#appointment" size="sm">
                {h.book}
              </Button>
            </div>
            <button
              type="button"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 focus-ring xl:hidden",
                isMenuOpen
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-card-border bg-card/80 text-foreground backdrop-blur-sm hover:border-primary/30"
              )}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? h.closeMenu : h.openMenu}
            >
              <Icon
                name={isMenuOpen ? "close" : "menu"}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-md xl:hidden dark:bg-[#0b1121]/80"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              key="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[min(100vw,22rem)] flex-col overflow-hidden xl:hidden"
              aria-label={h.mobileNavAria}
            >
              <div className="relative flex h-full flex-col border-l border-white/10 bg-gradient-to-b from-background via-background to-primary/5 shadow-[-8px_0_40px_rgba(0,0,0,0.15)]">
                <div
                  className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between border-b border-card-border px-6 py-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {h.menu}
                    </p>
                    <p className="font-bold text-foreground dark:text-white">
                      {clinicInfo.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card/60 transition-colors hover:bg-primary/10 focus-ring"
                    aria-label={h.closeMenu}
                  >
                    <Icon name="close" className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative flex-1 overflow-y-auto px-4 py-2">
                  <ul className="space-y-1">
                    {messages.nav.map((item, index) => (
                      <li key={item.href} data-menu-item>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:bg-primary/8 focus-ring"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.9375rem] font-medium text-foreground transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                            {item.label}
                          </span>
                          <Icon
                            name="arrow"
                            className="ml-auto h-4 w-4 text-primary/60 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  data-menu-footer
                  className="relative space-y-4 border-t border-card-border p-6"
                >
                  <div className="rounded-2xl bg-primary/6 px-4 py-3">
                    <p className="text-xs text-primary">{h.addressLabel}</p>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-foreground dark:text-white">
                      {messages.clinic.shortAddress}
                    </p>
                  </div>
                  <Button
                    href="#appointment"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {h.bookFull}
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
