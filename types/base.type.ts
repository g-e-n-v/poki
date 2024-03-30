import type { ConfigType } from "dayjs";

export type StrictDayJsConfigType = Exclude<ConfigType, undefined | null>;

export type Maybe<T> = T | null | undefined;
