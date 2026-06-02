"use client";

import Link from "next/link";
import { clinicInfo } from "@/data/clinic";
import { useTranslation } from "@/hooks/useTranslation";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { messages } = useTranslation();
  const f = messages.footer;
  const clinic = messages.clinic;

  const descriptionPreview =
    clinic.description.length > 120
      ? `${clinic.description.slice(0, 120)}...`
      : clinic.description;

  return (
    <footer className="border-t border-card-border bg-foreground/[0.02] dark:bg-[#080e1a]">
      <div className="container-custom section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-teal to-primary text-white">
                <Icon name="cross" className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold text-foreground dark:text-white">
                {clinicInfo.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80 dark:text-white/75">
              {descriptionPreview}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground dark:text-white">
              {f.navigation}
            </h3>
            <ul className="space-y-2">
              {messages.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary focus-ring rounded dark:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground dark:text-white">
              {f.contacts}
            </h3>
            <ul className="space-y-3 text-sm text-foreground/80 dark:text-white/75">
              <li className="flex gap-2">
                <Icon
                  name="location"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                <span>{clinic.address}</span>
              </li>
              <li className="flex gap-2">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary focus-ring rounded"
                >
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="hover:text-primary focus-ring rounded"
                >
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground dark:text-white">
              {f.workingHours}
            </h3>
            <p className="text-sm text-foreground/80 dark:text-white/75">
              {clinic.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-8 sm:flex-row">
          <p className="text-sm text-foreground/70 dark:text-white/70">
            © {currentYear} {clinicInfo.name}. {f.rights}
          </p>
          <p className="text-sm text-foreground/70 dark:text-white/70">
            {clinic.city} · {f.cityLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
