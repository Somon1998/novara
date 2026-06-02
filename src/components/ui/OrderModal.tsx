"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { SHOP } from "@/constants/shop";
import { ORDER_CHANNEL_IDS, getOrderChannelUrl } from "@/utils/orderLinks";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  const { t, format } = useLocale();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const message = useMemo(() => {
    if (productName) {
      return format(t.order.messageWithProduct, { product: productName });
    }
    return t.order.messageDefault;
  }, [format, productName, t]);

  const channels = useMemo(
    () =>
      ORDER_CHANNEL_IDS.map((id) => ({
        id,
        label: t.order.channels[id].label,
        description: t.order.channels[id].description,
        color:
          id === "whatsapp"
            ? "from-green-500 to-emerald-600"
            : id === "telegram"
              ? "from-sky-500 to-blue-600"
              : "from-pink-500 to-purple-600",
      })),
    [t],
  );

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const scrollY = window.scrollY;
      const useFixedLock = window.matchMedia("(max-width: 767px)").matches;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      if (useFixedLock) {
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
      }

      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }

    const timer = window.setTimeout(() => setVisible(false), 300);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || (!isOpen && !visible)) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[70]",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <button
        type="button"
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-label={t.order.close}
      />

      {/* grid + min-h: центр на телефоне/планшете; прокрутка, если карточка выше экрана */}
      <div className="order-modal-scroll fixed inset-0 z-[1] overflow-y-auto overscroll-contain">
        <div className="grid min-h-dvh w-full place-items-center px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6 md:px-10 md:py-10">
          <div
            className={cn(
              "relative w-full max-w-md rounded-3xl p-4 shadow-2xl transition-all duration-300 sm:max-w-lg sm:p-6 md:max-w-xl",
              "max-h-[calc(100dvh-2rem)] max-h-[calc(100svh-2rem)] overflow-y-auto overscroll-contain",
              "glass-card bg-white/95 dark:bg-gray-950/95",
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0",
            )}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-purple-500/10 hover:text-foreground"
              aria-label={t.order.closeDialog}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <h2
              id="order-modal-title"
              className="pr-8 text-xl font-bold text-foreground sm:text-2xl"
            >
              {t.order.modalTitle}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              {format(t.order.modalSubtitle, { shopName: SHOP.name })}
            </p>

            {productName && (
              <div className="mt-3 rounded-2xl bg-purple-500/5 p-3 dark:bg-purple-500/10 sm:mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {t.order.productLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {productName}
                </p>
              </div>
            )}

            <p className="mt-3 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 text-xs leading-relaxed text-muted sm:text-sm">
              {t.order.messageLabel}: «{message}»
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:gap-2.5">
              {channels.map((channel) => {
                const url = getOrderChannelUrl(channel.id, message);
                return (
                  <a
                    key={channel.id}
                    href={url}
                    rel="noopener noreferrer"
                    className={cn(
                      "flex shrink-0 items-center gap-3 rounded-2xl p-3 text-left text-white transition-transform duration-300 active:scale-[0.98] sm:gap-4 sm:p-3.5",
                      "touch-manipulation bg-gradient-to-r shadow-lg hover:scale-[1.02] hover:shadow-xl",
                      channel.color,
                    )}
                    onClick={() => onClose()}
                  >
                    <ChannelIcon channel={channel.id} />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold">{channel.label}</p>
                      <p className="text-sm text-white/80">
                        {channel.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ChannelIcon({ channel }: { channel: string }) {
  const className = "h-6 w-6 shrink-0";

  if (channel === "whatsapp") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  if (channel === "telegram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
