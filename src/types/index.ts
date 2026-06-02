export type Theme = "light" | "dark";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  badge?: string;
}

import type { DoctorSpecialtyKey } from "@/i18n/types";

export interface Doctor {
  id: string;
  name: string;
  specialtyKey: DoctorSpecialtyKey;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HeroFeature {
  id: string;
  title: string;
  icon: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  workingHours: string;
  telegram: string;
  description: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export interface AppointmentFormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}
