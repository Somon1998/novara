"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import {
  DOCTOR_FILTER_ALL,
  doctors,
  filterDoctorsBySpecialty,
} from "@/data/doctors";
import type { DoctorFilterValue } from "@/i18n/types";
import { DoctorFilters } from "@/components/sections/DoctorFilters";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function DoctorsSection() {
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.1 });
  const { messages } = useTranslation();
  const t = messages.doctors;
  const [activeFilter, setActiveFilter] =
    useState<DoctorFilterValue>(DOCTOR_FILTER_ALL);

  const filteredDoctors = useMemo(
    () => filterDoctorsBySpecialty(doctors, activeFilter),
    [activeFilter]
  );

  const doctorTextById = useMemo(
    () => new Map(t.list.map((item) => [item.id, item])),
    [t.list]
  );

  return (
    <section id="doctors" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          align="center"
          subtitle={t.subtitle}
        />

        <DoctorFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {filteredDoctors.length === 0 ? (
          <p className="text-center text-foreground/70 dark:text-white/70">
            {t.empty}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {filteredDoctors.map((doctor) => {
              const text = doctorTextById.get(doctor.id);
              return (
                <Card
                  key={doctor.id}
                  variant="premium"
                  data-reveal
                  className="group overflow-hidden !p-0"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={`${t.photoAlt} ${doctor.name}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929]/95 via-[#0c1929]/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
                      <h3 className="text-lg font-semibold text-white">
                        {doctor.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-primary">
                        {text?.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-foreground/80 dark:text-white/75">
                      {text?.experience}
                    </p>
                    <Button
                      href="#appointment"
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                    >
                      {t.book}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
