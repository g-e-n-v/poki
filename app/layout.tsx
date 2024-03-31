import "@/styles/global.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

// INFO: Can remove fonts if it not using.
const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      weight: "100",
      style: "normal",
      path: "../assets/fonts/TorusThin.otf",
    },
    {
      weight: "300",
      style: "normal",
      path: "../assets/fonts/TorusLight.otf",
    },
    {
      weight: "400",
      style: "normal",
      path: "../assets/fonts/TorusRegular.otf",
    },
    {
      weight: "600",
      style: "normal",
      path: "../assets/fonts/TorusSemiBold.otf",
    },
    {
      weight: "700",
      style: "normal",
      path: "../assets/fonts/TorusBold.otf",
    },
    {
      weight: "800",
      style: "normal",
      path: "../assets/fonts/TorusHeavy.otf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Poki - Free Online Games - Play Now!",
  description: "Poki - Free Online Games - Play Now!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body>{children}</body>
    </html>
  );
}
