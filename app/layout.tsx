import { Encode_Sans_Expanded } from "next/font/google";
import type { PropsWithChildren } from "react";

import "@/styles/global.css";

const fontSans = Encode_Sans_Expanded({
  subsets: ["latin-ext", "vietnamese"],
  preload: true,
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body>{children}</body>
    </html>
  );
}
