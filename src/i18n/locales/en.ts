import type { Messages } from "@/i18n/types";

export const en: Messages = {
  locale: "en",
  clinic: {
    tagline: "Medical and diagnostic center in Khujand",
    address:
      "Tajikistan, Khujand, 27th microdistrict, former store building No. 81",
    city: "Khujand",
    workingHours: "Mon–Sat: 08:00–20:00 · Sun: 09:00–18:00",
    description:
      "Novara Medical and Diagnostic Center is a modern clinic in the heart of Khujand. We combine advanced diagnostic technology, experienced specialists, and genuine care for every patient. Our mission is to make quality healthcare accessible, comfortable, and understandable for every family.",
    shortAddress: "27th microdistrict, Khujand",
    mapAddress: "27th microdistrict, former store building No. 81, Khujand",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#doctors" },
    { label: "Advantages", href: "#advantages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contacts", href: "#contacts" },
  ],
  header: {
    homeAria: "Novara — home",
    navAria: "Main navigation",
    book: "Book now",
    bookFull: "Book an appointment",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNavAria: "Mobile navigation",
    menu: "Menu",
    addressLabel: "Address",
  },
  footer: {
    navigation: "Navigation",
    contacts: "Contacts",
    workingHours: "Working hours",
    rights: "All rights reserved.",
    cityLine: "27th microdistrict",
  },
  hero: {
    titleLine1: "Medical and diagnostic",
    titleLine2: "center «Novara»",
    subtitle:
      "Welcome to the official website of Novara Medical Center! We are glad to welcome you to our clinic, where your health and well-being are our top priority.",
    bookConsultation: "Book a consultation",
    viewServices: "View services",
    imageAlt: "Medical team at Novara diagnostic center",
  },
  about: {
    badge: "About us",
    title: "About our clinic",
    highlight: "clinic",
    addressTitle: "Our address",
    cards: [
      {
        id: "1",
        title: "Personalized approach",
        description:
          "Every patient receives an individual treatment plan tailored to their needs.",
      },
      {
        id: "2",
        title: "Cleanliness and safety",
        description:
          "Sterile rooms, disposable materials, and strict quality control.",
      },
      {
        id: "3",
        title: "Modern treatment methods",
        description: "We follow current protocols and evidence-based medicine.",
      },
      {
        id: "4",
        title: "Patient comfort",
        description:
          "A welcoming atmosphere, clear explanations, and care at every step of your visit.",
      },
    ],
  },
  services: {
    badge: "Services",
    title: "Our services",
    highlight: "services",
    subtitle:
      "Full range of diagnostics and treatment — from lab tests to specialist consultations.",
    items: [
      {
        id: "xray",
        badge: "AI DIAGNOSTICS",
        title: "Chest X-ray",
        description:
          "Chest X-ray imaging with AI support for fast and accurate diagnosis of lung diseases and other conditions.",
      },
      {
        id: "ultrasound",
        badge: "COMPREHENSIVE DIAGNOSTICS",
        title: "Ultrasound and X-ray",
        description:
          "Ultrasound, ECG, and related exams for quick patient assessment and further treatment planning.",
      },
      {
        id: "ecg",
        badge: "CARDIOLOGY",
        title: "Electrocardiography",
        description:
          "High-quality ECG to assess heart condition, detect rhythm disorders, and other cardiovascular changes.",
      },
      {
        id: "lab",
        badge: "LABORATORY",
        title: "Laboratory diagnostics",
        description:
          "Automated blood analysis on modern hematology equipment — accurate results in a short time.",
      },
      {
        id: "glucose",
        badge: "ENDOCRINOLOGY",
        title: "Blood glucose monitoring",
        description:
          "Blood sugar measurement and monitoring for diabetes patients and preventive check-ups.",
      },
    ],
  },
  doctors: {
    badge: "Team",
    title: "Our doctors",
    highlight: "doctors",
    subtitle:
      "Experienced specialists with years of practice and attentive care for every patient.",
    book: "Book now",
    empty: "No doctors in this specialty yet. Please choose another filter.",
    photoAlt: "Doctor photo",
    filters: {
      all: "All",
      therapist: "Therapist",
      pediatrician: "Pediatrician",
      cardiologist: "Cardiologist",
      dentist: "Dentist",
    },
    list: [
      { id: "1", specialty: "Therapist", experience: "12 years of experience" },
      { id: "2", specialty: "Pediatrician", experience: "8 years of experience" },
      { id: "3", specialty: "Cardiologist", experience: "15 years of experience" },
      { id: "4", specialty: "Dentist", experience: "10 years of experience" },
    ],
  },
  advantages: {
    badge: "Advantages",
    title: "Why patients choose us",
    highlight: "us",
    subtitle: "We create a medical experience that inspires trust from the first visit.",
    contacts: "Contacts",
    imageAlt: "Novara doctor vaccinating a child in a comfortable setting",
    stats: [
      { id: "1", label: "years of experience" },
      { id: "2", label: "specialists" },
      { id: "3", label: "satisfied patients" },
      { id: "4", label: "medical specialties" },
    ],
    items: [
      {
        id: "1",
        title: "Modern equipment",
        description: "Latest devices for accurate diagnostics and effective treatment.",
      },
      {
        id: "2",
        title: "Experienced specialists",
        description: "A team of doctors with long practice and ongoing training.",
      },
      {
        id: "3",
        title: "Convenient location",
        description: "Located in the 27th microdistrict — easy to reach from anywhere in the city.",
      },
      {
        id: "4",
        title: "Fast booking",
        description: "Online appointments, minimal waiting, and flexible schedules.",
      },
      {
        id: "5",
        title: "Clean rooms",
        description: "Strict hygiene and sterilization standards at every stage of care.",
      },
      {
        id: "6",
        title: "Patient care",
        description: "Individual approach and support throughout treatment and recovery.",
      },
    ],
  },
  gallery: {
    badge: "Gallery",
    title: "Our clinic",
    highlight: "clinic",
    subtitle: "Modern rooms, clean spaces, and state-of-the-art equipment.",
    clickToView: "Click to view",
    openPhoto: "Open photo",
    items: [
      { id: "1", alt: "Novara medical specialist", category: "Interior" },
      { id: "2", alt: "Doctor's office with modern equipment", category: "Offices" },
      { id: "3", alt: "Clinic diagnostic equipment", category: "Equipment" },
      { id: "4", alt: "Novara medical center building", category: "Our clinic building" },
      { id: "5", alt: "Clinic laboratory", category: "Laboratory" },
      { id: "6", alt: "Procedure room", category: "Offices" },
    ],
  },
  testimonials: {
    badge: "Reviews",
    title: "What patients say",
    highlight: "patients",
    subtitle: "Real stories from people who trusted us with their health.",
    items: [
      {
        id: "1",
        name: "Aziza M.",
        text: "Very clean and modern clinic. Attentive doctors who explained everything clearly. I booked online — everything was quick with no queues.",
      },
      {
        id: "2",
        name: "Djamshed K.",
        text: "I brought my child to the pediatrician. Calm atmosphere and friendly staff. We received lab results the same day.",
      },
      {
        id: "3",
        name: "Nigora S.",
        text: "Convenient location in the 27th microdistrict. I had a full check-up — everything was well organized. Highly recommend!",
      },
      {
        id: "4",
        name: "Rustam A.",
        text: "Professional approach and modern equipment. You can feel that patients are truly cared for here.",
      },
      {
        id: "5",
        name: "Malika H.",
        text: "I booked ultrasound through the website form — they called back in 10 minutes. Everything was clear and smooth.",
      },
      {
        id: "6",
        name: "Sorbon U.",
        text: "The best clinic I've been to in Khujand. Clean rooms, polite staff, and fair prices.",
      },
    ],
  },
  contacts: {
    badge: "Contacts",
    title: "How to find us",
    highlight: "find us",
    subtitle:
      "We are conveniently located in the 27th microdistrict — easy to reach from anywhere in Khujand.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    workingHours: "Working hours",
    call: "Call",
    telegram: "Message on Telegram",
    mapTitle: "Location map",
    mapNote: "27th microdistrict, former store building No. 81, Khujand",
    mapLater: "Interactive map will be added later",
  },
  appointment: {
    badge: "Booking",
    title: "Book an appointment",
    highlight: "appointment",
    subtitle: "Fill out the form — we will contact you to confirm your visit.",
    thanksTitle: "Thank you!",
    thanksText: "Your request has been prepared. The backend will be connected later.",
    sendAnother: "Submit another request",
    name: "Your name",
    phone: "Phone",
    service: "Service",
    message: "Message (optional)",
    namePlaceholder: "Enter your name",
    phonePlaceholder: "+992 XX XXX XX XX",
    servicePlaceholder: "Select a service",
    messagePlaceholder: "Describe your question or preferences...",
    submit: "Submit request",
  },
  validation: {
    nameRequired: "Please enter your name",
    nameMin: "Name must be at least 2 characters",
    phoneRequired: "Please enter your phone number",
    phoneInvalid: "Please enter a valid phone number",
    serviceRequired: "Please select a service",
    messageMax: "Message must not exceed 500 characters",
  },
  modal: {
    close: "Close",
    closeView: "Close preview",
  },
  language: {
    label: "Language",
    ru: "Русский",
    en: "English",
    tj: "Тоҷикӣ",
  },
};
