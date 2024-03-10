/** @type {import('astro-i18next').AstroI18nextConfig} */

import { Languages, defaultLanguage } from "./src/languages";

const locales = Object.values(Languages);

export default {
  defaultLocale: defaultLanguage,
  locales,
  i18nextClient: {
    fallbackLng: defaultLanguage,
  }
};