import type { Doctor } from "@/types";
import type { DoctorFilterValue, DoctorSpecialtyKey } from "@/i18n/types";

export const DOCTOR_FILTER_ALL = "all" as const;

export type { DoctorFilterValue, DoctorSpecialtyKey };

export const doctorFilterOptions: DoctorFilterValue[] = [
  DOCTOR_FILTER_ALL,
  "therapist",
  "pediatrician",
  "cardiologist",
  "dentist",
];

export function filterDoctorsBySpecialty(
  list: Doctor[],
  filter: DoctorFilterValue
): Doctor[] {
  if (filter === DOCTOR_FILTER_ALL) return list;
  return list.filter((doctor) => doctor.specialtyKey === filter);
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Др. Рахимов Фарход",
    specialtyKey: "therapist",
    image: "/images/doctors/doctor-01.png",
  },
  {
    id: "2",
    name: "Др. Саидова Мадина",
    specialtyKey: "pediatrician",
    image: "/images/doctors/doctor-03.png",
  },
  {
    id: "3",
    name: "Др. Назаров Илхом",
    specialtyKey: "cardiologist",
    image: "/images/doctors/doctor-05.png",
  },
  {
    id: "4",
    name: "Др. Хасанова Лола",
    specialtyKey: "dentist",
    image: "/images/doctors/doctor-04.png",
  },
];
