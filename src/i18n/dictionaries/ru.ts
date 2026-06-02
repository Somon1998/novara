import type { Dictionary } from "./types";

export const ru: Dictionary = {
  meta: {
    title: "Онлайн-магазин полезных товаров в Душанбе",
    description:
      "Каталог полезных товаров для телефона, дома, кухни, красоты, детей и подарков с доставкой по Душанбе.",
  },
  nav: {
    home: "Главная",
    categories: "Категории",
    products: "Товары",
    howToOrder: "Как заказать",
    contact: "Контакты",
    homeAria: "— на главную",
    mainNavAria: "Основная навигация",
  },
  hero: {
    badge: "Доставка по Душанбе",
    titleStart: "Полезные товары для",
    titleHighlight: "дома, телефона, красоты",
    titleEnd: "и подарков",
    subtitle:
      "Современный онлайн-магазин с доставкой по Душанбе. Выбирайте товары, пишите нам в Telegram или WhatsApp и оформляйте заказ за пару минут.",
    ctaProducts: "Смотреть товары",
    ctaWhatsApp: "Написать в WhatsApp",
    priceFrom: "от",
    currency: "сомони",
    whatsAppGreeting: "Здравствуйте! Хочу сделать заказ.",
  },
  categories: {
    label: "Категории",
    title: "Выберите категорию",
    subtitle:
      "Шесть направлений с полезными товарами на каждый день — от аксессуаров для телефона до подарков близким.",
    itemsCount: "{count} товаров",
  },
  featured: {
    label: "Хиты продаж",
    title: "Популярные товары",
    subtitle:
      "Самые востребованные позиции — проверенные покупателями и всегда в наличии.",
  },
  products: {
    label: "Каталог",
    title: "Все товары",
    subtitle: "Найдите нужный товар по категории или воспользуйтесь поиском по названию.",
    searchLabel: "Поиск товаров",
    searchPlaceholder: "Поиск по названию, например «кабель»...",
    filterAll: "Все",
    empty: "Товары не найдены. Попробуйте изменить фильтр или запрос.",
    found: "Найдено: {count} из {total}",
  },
  whyUs: {
    label: "Преимущества",
    title: "Почему выбирают нас",
    subtitle: "Мы делаем покупки простыми, быстрыми и приятными для каждого клиента в Душанбе.",
    items: [
      {
        title: "Быстрая доставка",
        description: "Доставка по Душанбе в удобное время.",
      },
      {
        title: "Полезные товары",
        description: "Только товары, которые реально нужны каждый день.",
      },
      {
        title: "Удобный заказ",
        description: "Пишите в Telegram или WhatsApp — всё быстро и просто.",
      },
      {
        title: "Доступные цены",
        description: "Хороший выбор товаров по приятной цене.",
      },
    ],
  },
  howToOrder: {
    label: "Как заказать",
    title: "Три простых шага",
    subtitle: "Оформление заказа занимает пару минут — без регистрации и сложных форм.",
    steps: [
      {
        title: "Выберите товар",
        description: "Просмотрите каталог и найдите то, что вам нужно.",
      },
      {
        title: "Нажмите «Заказать»",
        description: "Кнопка откроет WhatsApp с готовым текстом заказа.",
      },
      {
        title: "Напишите нам",
        description: "Подтвердите заказ в WhatsApp или Telegram — мы ответим быстро.",
      },
    ],
  },
  contact: {
    label: "Связь",
    title: "Контакты",
    subtitle: "Напишите нам удобным способом — ответим быстро и поможем с заказом.",
    city: "Город",
    phone: "Телефон",
    ctaTelegram: "Написать в Telegram",
    ctaWhatsApp: "Написать в WhatsApp",
    ctaInstagram: "Открыть Instagram",
    whatsAppInquiry: "Здравствуйте! Хочу узнать о товарах.",
  },
  footer: {
    description:
      "Выбирайте полезные товары для дома, телефона, кухни, красоты и подарков — заказывайте через WhatsApp или Telegram.",
    categoriesTitle: "Категории",
    contactsTitle: "Контакты",
    rights: "Все права защищены.",
  },
  order: {
    button: "Заказать",
    modalTitle: "Куда написать?",
    modalSubtitle: "Выберите удобный мессенджер — откроется чат с {shopName}.",
    productLabel: "Товар",
    messageLabel: "Сообщение",
    messageWithProduct: "Здравствуйте! Я хочу заказать: {product}",
    messageDefault: "Здравствуйте! Хочу сделать заказ.",
    channels: {
      whatsapp: { label: "WhatsApp", description: "Написать в WhatsApp" },
      telegram: { label: "Telegram", description: "Написать в Telegram" },
      instagram: { label: "Instagram", description: "Открыть Direct" },
    },
    close: "Закрыть",
    closeDialog: "Закрыть окно",
  },
  badges: {
    hit: "Хит",
    new: "Новинка",
    popular: "Популярное",
  },
  theme: {
    toDark: "Включить тёмную тему",
    toLight: "Включить светлую тему",
  },
  menu: {
    mobileAria: "Мобильное меню",
    open: "Открыть меню",
    close: "Закрыть меню",
  },
  language: {
    label: "Язык",
    switchAria: "Выбор языка сайта",
  },
};
