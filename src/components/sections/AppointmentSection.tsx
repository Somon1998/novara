"use client";

import { useState, type FormEvent } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { validateAppointmentForm, hasErrors } from "@/lib/validation";
import type { AppointmentFormData, AppointmentFormErrors } from "@/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const initialForm: AppointmentFormData = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

export function AppointmentSection() {
  const sectionRef = useGsapReveal<HTMLElement>();
  const { messages } = useTranslation();
  const t = messages.appointment;
  const [form, setForm] = useState<AppointmentFormData>(initialForm);
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAppointmentForm(form, messages.validation);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    setIsSubmitted(true);
    setForm(initialForm);
  };

  const updateField = (field: keyof AppointmentFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-foreground/[0.015]"
    >
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div className="mx-auto max-w-xl">
          {isSubmitted ? (
            <div
              data-reveal
              className="glass-card-premium rounded-[1.5rem] p-8 text-center sm:p-10"
              role="status"
            >
              <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-2xl">
                ✓
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {t.thanksTitle}
              </h3>
              <p className="mt-2 text-foreground/80 dark:text-white/75">
                {t.thanksText}
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                {t.sendAnother}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card-premium space-y-5 rounded-[1.5rem] p-6 sm:space-y-6 sm:p-8"
              noValidate
            >
              <Field label={t.name} id="name" error={errors.name}>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass(!!errors.name)}
                  placeholder={t.namePlaceholder}
                  autoComplete="name"
                />
              </Field>

              <Field label={t.phone} id="phone" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClass(!!errors.phone)}
                  placeholder={t.phonePlaceholder}
                  autoComplete="tel"
                />
              </Field>

              <Field label={t.service} id="service" error={errors.service}>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className={inputClass(!!errors.service)}
                >
                  <option value="">{t.servicePlaceholder}</option>
                  {messages.services.items.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={t.message} id="message" error={errors.message}>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={4}
                  className={cn(inputClass(!!errors.message), "resize-none")}
                  placeholder={t.messagePlaceholder}
                />
              </Field>

              <Button type="submit" size="lg" className="w-full">
                {t.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-background/50 px-4 py-3 text-sm text-foreground dark:text-white transition-colors placeholder:text-primary/40 focus-ring",
    hasError
      ? "border-red-400 focus-visible:ring-red-400"
      : "border-card-border hover:border-primary/30 focus:border-primary"
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground dark:text-white"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
