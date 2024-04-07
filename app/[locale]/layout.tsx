import "@/styles/global.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/Footer";
import { locales } from "@/translate/i18n";

const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      weight: "100",
      style: "normal",
      path: "../../assets/fonts/TorusThin.otf",
    },
    {
      weight: "300",
      style: "normal",
      path: "../../assets/fonts/TorusLight.otf",
    },
    {
      weight: "400",
      style: "normal",
      path: "../../assets/fonts/TorusRegular.otf",
    },
    {
      weight: "600",
      style: "normal",
      path: "../../assets/fonts/TorusSemiBold.otf",
    },
    {
      weight: "700",
      style: "normal",
      path: "../../assets/fonts/TorusBold.otf",
    },
    {
      weight: "800",
      style: "normal",
      path: "../../assets/fonts/TorusHeavy.otf",
    },
  ],
});

type MainLayoutProps = PropsWithChildren<{
  params: { locale: string };
}>;

export default function MainLayout({ children, params }: MainLayoutProps) {
  return (
    <html lang={params.locale} className={fontSans.variable}>
      <body>
        <main className="mx-auto min-h-screen max-w-page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Free Online Games - Play Now!",
  description: "Free Online Games - Play Now!",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
