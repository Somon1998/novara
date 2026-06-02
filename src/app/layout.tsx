import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Онлайн-магазин полезных товаров в Душанбе",
  description:
    "Каталог полезных товаров для телефона, дома, кухни, красоты, детей и подарков с доставкой по Душанбе.",
  keywords: [
    "магазин Душанбе",
    "онлайн магазин",
    "товары для дома",
    "аксессуары для телефона",
    "доставка Душанбе",
    "полезные товары",
  ],
  openGraph: {
    title: "Онлайн-магазин полезных товаров в Душанбе",
    description:
      "Каталог полезных товаров для телефона, дома, кухни, красоты, детей и подарков с доставкой по Душанбе.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {/* Предотвращает мигание темы при загрузке */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
