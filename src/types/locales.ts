import { createValidationObject } from "./core";

export type LocaleName =
  | "de-DE"
  | "en-GB"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "ru-RU";

export const LocaleNameVO = createValidationObject<LocaleName>({
  "de-DE": "de-DE",
  "en-GB": "en-GB",
  "en-US": "en-US",
  "es-ES": "es-ES",
  "fr-FR": "fr-FR",
  "ru-RU": "ru-RU"
});
