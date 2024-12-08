import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@primevue/nuxt-module'],
  plugins: [
    { src: '~/plugins/primevue.js', mode: 'client' }
  ],
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MTech',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo-mtech.png' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    'assets/main.css',
    'primeicons/primeicons.css'
  ],
  routeRules: {
    '/': { redirect: '/about' }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primevue',
          }
        }
      }
    },
  },
})