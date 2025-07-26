// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'pl', name: 'Polski', language: 'pl-PL', dir: 'ltr' },
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
  }
})