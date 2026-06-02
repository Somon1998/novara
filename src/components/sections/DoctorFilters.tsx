"use client";

import { cn } from "@/lib/cn";
import { doctorFilterOptions } from "@/data/doctors";
import type { DoctorFilterValue } from "@/i18n/types";
import { useTranslation } from "@/hooks/useTranslation";

interface DoctorFiltersProps {
  activeFilter: DoctorFilterValue;
  onFilterChange: (value: DoctorFilterValue) => void;
}

export function DoctorFilters({
  activeFilter,
  onFilterChange,
}: DoctorFiltersProps) {
  const { messages } = useTranslation();
  const { filters } = messages.doctors;

  const filterLabels: Record<DoctorFilterValue, string> = {
    all: filters.all,
    therapist: filters.therapist,
    pediatrician: filters.pediatrician,
    cardiologist: filters.cardiologist,
    dentist: filters.dentist,
  };

  return (
    <div
      className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3"
      role="tablist"
      aria-label={messages.doctors.title}
    >
      {doctorFilterOptions.map((value) => {
        const isActive = activeFilter === value;

        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus-ring sm:px-5 sm:py-2.5",
              isActive
                ? "border-primary bg-primary text-white shadow-[0_4px_16px_rgba(53,187,245,0.3)]"
                : "border-card-border bg-card/80 text-foreground/80 hover:border-primary/40 hover:text-primary dark:text-white/80 dark:hover:text-primary"
            )}
          >
            {filterLabels[value]}
          </button>
        );
      })}
    </div>
  );
}
