import "server-only";

import en from "@/translate/en.json";
import vi from "@/translate/vi.json";

export const translator = { en, vi };

export type Locale = keyof typeof translator;
