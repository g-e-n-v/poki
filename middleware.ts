import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { locales } from "@/translate/i18n";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|vi)/:path*"],
};

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  return response;
}
