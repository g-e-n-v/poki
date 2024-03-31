import type { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto min-h-screen max-w-page">{children}</div>;
}
