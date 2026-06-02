import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЛДЦ «Новара» — Лечебно-диагностический центр в Худжанде",
  description:
    "Лечебно-диагностический центр «Новара» в Худжанде, 27-й микрорайон. Диагностика, УЗИ, ЭКГ, рентген, лабораторные анализы. Запишитесь на приём онлайн.",
  keywords: [
    "клиника Худжанд",
    "медицина Таджикистан",
    "ЛДЦ Новара",
    "диагностика Худжанд",
    "врачи Худжанд",
    "27 микрорайон",
  ],
  openGraph: {
    title: "ЛДЦ «Новара» — Лечебно-диагностический центр в Худжанде",
    description:
      "Профессиональная медицинская помощь, забота о каждом пациенте и современный подход к здоровью.",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);var l=localStorage.getItem("locale");if(l==="en"||l==="tj"||l==="ru")document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
