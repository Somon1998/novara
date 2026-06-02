"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { SHOP } from "@/constants/shop";
import { OrderButton } from "@/components/ui/OrderButton";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { t } = useLocale();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        panel,
        { x: "100%" },
        { x: "0%", duration: 0.45, ease: "power3.out" },
      );
      gsap.fromTo(
        panel.querySelectorAll("[data-menu-item]"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          delay: 0.15,
          ease: "power3.out",
        },
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) {
      onClose();
      return;
    }

    gsap.to(panel, {
      x: "100%",
      duration: 0.35,
      ease: "power3.in",
    });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <nav
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-8 bg-white/95 p-8 shadow-2xl backdrop-blur-xl dark:bg-gray-950/95"
        aria-label={t.menu.mobileAria}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">{SHOP.name}</span>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl glass-card"
            aria-label={t.menu.close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href} data-menu-item>
              <Link
                href={link.href}
                onClick={handleClose}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-purple-500/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div data-menu-item className="mt-auto">
          <OrderButton variant="primary" className="w-full" />
        </div>
      </nav>
    </div>
  );
}

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  const { t } = useLocale();

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1 rounded-lg sm:h-10 sm:w-10 sm:gap-1.5 sm:rounded-xl lg:hidden",
        "glass-card transition-all duration-300",
      )}
      aria-label={isOpen ? t.menu.close : t.menu.open}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          "block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300",
          isOpen && "translate-y-2 rotate-45",
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300",
          isOpen && "opacity-0",
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300",
          isOpen && "-translate-y-2 -rotate-45",
        )}
      />
    </button>
  );
}
