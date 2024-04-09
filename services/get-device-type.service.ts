import { headers } from "next/headers";

import type { DeviceType } from "@/types/app.type";

export const getDeviceType = (): DeviceType => {
  const userAgent = headers().get("user-agent");

  const isMobile = !!userAgent && /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);

  return isMobile ? "mobile" : "desktop";
};
