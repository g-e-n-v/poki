import createMiddleware from "next-intl/middleware";

import { locales } from "@/translate/i18n";

export default createMiddleware({
  locales,
  defaultLocale: "vi",
});

export const config = {
  matcher: ["/", "/(en|vi)/:path*"],
};
