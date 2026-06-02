"use client";

import { SHOP } from "@/constants/shop";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useGsapScrollReveal } from "@/hooks/useGsapAnimation";

export function ContactSection() {
  const { t } = useLocale();
  const cardRef = useGsapScrollReveal({ y: 50, duration: 0.9 });

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div ref={cardRef} className="mx-auto mt-14 max-w-2xl">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 to-pink-500/5" />

            <div className="relative space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactItem label={t.contact.city} value={SHOP.city} />
                <ContactItem
                  label={t.contact.phone}
                  value={SHOP.phoneDisplay}
                  href={`tel:${SHOP.phone}`}
                />
                <ContactItem
                  label="Telegram"
                  value={`@${SHOP.telegramUsername}`}
                  href={SHOP.telegramUrl}
                  external
                />
                <ContactItem
                  label="Instagram"
                  value={`@${SHOP.instagramUsername}`}
                  href={SHOP.instagramUrl}
                  external
                />
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:justify-center">
                <Button href={SHOP.telegramUrl} external variant="primary">
                  {t.contact.ctaTelegram}
                </Button>
                <Button
                  href={getWhatsAppUrl(t.contact.whatsAppInquiry)}
                  external
                  variant="secondary"
                >
                  {t.contact.ctaWhatsApp}
                </Button>
                <Button href={SHOP.instagramUrl} external variant="outline">
                  {t.contact.ctaInstagram}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="rounded-2xl bg-purple-500/5 p-4 dark:bg-purple-500/10">
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
        {label}
      </p>
      <p className="mt-1 font-medium text-foreground">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
