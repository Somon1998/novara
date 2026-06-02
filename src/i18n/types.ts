export type Locale = "ru" | "en" | "tj";

export type DoctorSpecialtyKey =
  | "therapist"
  | "pediatrician"
  | "cardiologist"
  | "dentist";

export type DoctorFilterValue = "all" | DoctorSpecialtyKey;

export interface NavItemTranslation {
  label: string;
  href: string;
}

export interface ServiceTranslation {
  id: string;
  badge?: string;
  title: string;
  description: string;
}

export interface DoctorTranslation {
  id: string;
  specialty: string;
  experience: string;
}

export interface GalleryItemTranslation {
  id: string;
  alt: string;
  category: string;
}

export interface TestimonialTranslation {
  id: string;
  name: string;
  text: string;
}

export interface CardTranslation {
  id: string;
  title: string;
  description: string;
}

export interface StatTranslation {
  id: string;
  label: string;
}

export interface Messages {
  locale: Locale;
  clinic: {
    tagline: string;
    address: string;
    city: string;
    workingHours: string;
    description: string;
    shortAddress: string;
    mapAddress: string;
  };
  nav: NavItemTranslation[];
  header: {
    homeAria: string;
    navAria: string;
    book: string;
    bookFull: string;
    openMenu: string;
    closeMenu: string;
    mobileNavAria: string;
    menu: string;
    addressLabel: string;
  };
  footer: {
    navigation: string;
    contacts: string;
    workingHours: string;
    rights: string;
    cityLine: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bookConsultation: string;
    viewServices: string;
    imageAlt: string;
  };
  about: {
    badge: string;
    title: string;
    highlight: string;
    addressTitle: string;
    cards: CardTranslation[];
  };
  services: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    items: ServiceTranslation[];
  };
  doctors: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    book: string;
    empty: string;
    photoAlt: string;
    filters: {
      all: string;
      therapist: string;
      pediatrician: string;
      cardiologist: string;
      dentist: string;
    };
    list: DoctorTranslation[];
  };
  advantages: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    contacts: string;
    imageAlt: string;
    stats: StatTranslation[];
    items: CardTranslation[];
  };
  gallery: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    clickToView: string;
    openPhoto: string;
    items: GalleryItemTranslation[];
  };
  testimonials: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    items: TestimonialTranslation[];
  };
  contacts: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    call: string;
    telegram: string;
    mapTitle: string;
    mapNote: string;
    mapLater: string;
  };
  appointment: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    thanksTitle: string;
    thanksText: string;
    sendAnother: string;
    name: string;
    phone: string;
    service: string;
    message: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
  validation: {
    nameRequired: string;
    nameMin: string;
    phoneRequired: string;
    phoneInvalid: string;
    serviceRequired: string;
    messageMax: string;
  };
  modal: {
    close: string;
    closeView: string;
  };
  language: {
    label: string;
    ru: string;
    en: string;
    tj: string;
  };
}
