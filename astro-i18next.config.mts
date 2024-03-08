/** @type {import('astro-i18next').AstroI18nextConfig} */

enum Languages {
  ENGLISH = 'en',
  SPANISH = 'es',
};

const locales = Object.values(Languages);

export default {
  defaultLocale: Languages.ENGLISH,
  locales,
};