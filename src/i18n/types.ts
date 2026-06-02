export type Locale = "ru" | "tj" | "en";

export interface LocaleOption {
  code: Locale;
  label: string;
  shortLabel: string;
}

export type ProductText = {
  name: string;
  description: string;
};

export type CategoryText = {
  name: string;
  description: string;
};
