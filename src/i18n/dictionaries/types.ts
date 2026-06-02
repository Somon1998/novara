export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    categories: string;
    products: string;
    howToOrder: string;
    contact: string;
    homeAria: string;
    mainNavAria: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaProducts: string;
    ctaWhatsApp: string;
    priceFrom: string;
    currency: string;
    whatsAppGreeting: string;
  };
  categories: {
    label: string;
    title: string;
    subtitle: string;
    itemsCount: string;
  };
  featured: {
    label: string;
    title: string;
    subtitle: string;
  };
  products: {
    label: string;
    title: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    filterAll: string;
    empty: string;
    found: string;
  };
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  howToOrder: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    city: string;
    phone: string;
    ctaTelegram: string;
    ctaWhatsApp: string;
    ctaInstagram: string;
    whatsAppInquiry: string;
  };
  footer: {
    description: string;
    categoriesTitle: string;
    contactsTitle: string;
    rights: string;
  };
  order: {
    button: string;
    modalTitle: string;
    modalSubtitle: string;
    productLabel: string;
    messageLabel: string;
    messageWithProduct: string;
    messageDefault: string;
    channels: {
      whatsapp: { label: string; description: string };
      telegram: { label: string; description: string };
      instagram: { label: string; description: string };
    };
    close: string;
    closeDialog: string;
  };
  badges: {
    hit: string;
    new: string;
    popular: string;
  };
  theme: {
    toDark: string;
    toLight: string;
  };
  menu: {
    mobileAria: string;
    open: string;
    close: string;
  };
  language: {
    label: string;
    switchAria: string;
  };
}
