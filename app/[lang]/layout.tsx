import type { PropsWithChildren } from "react";

import { Footer } from "@/components/Footer";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-page">{children}</main>
      <Footer />
    </>
  );
}
