/** @type {import('astro-i18next').AstroI18nextConfig} */

import { Languages, defaultLanguage } from "./src/languages";

const locales = Object.values(Languages);
const routes = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: { mainPage: 'index' }
}), {});

export default {
  locales,
  routes,
  i18nextClient: {
    fallbackLng: defaultLanguage,
  }
};