export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/seo', '@nuxtjs/tailwindcss'],
  site: {
    url: 'https://exchange-rate.justlikeboss.com',
    name: '匯星 新台幣換算外幣最佳網站',
    description: '歡迎來到匯星，我們提供即時更新的匯率資料，讓您輕鬆進行各種貨幣之間的換算。我們的網站簡單易用，支援多種貨幣，無論是旅行、購物還是商業交易，都能幫助您快速獲取準確的匯率資訊，享受便捷的匯率換算體驗！',
    defaultLocale: 'zh-TW'
  },
  tailwindcss: {
    viewer: false
  },
  ogImage: {
    fonts: ['Noto+Sans+TC:400', 'Noto+Sans+TC:700'],
    defaults: {
      emojis: 'emojione'
    }
  },
  app: {
    rootId: 'app',
    head: {
      titleTemplate: '%s %separator %siteName',
      htmlAttrs: {
        lang: 'zh-TW'
      },
      meta: [
        { name: 'description' , content: '歡迎來到匯星，我們提供即時更新的匯率資料，讓您輕鬆進行各種貨幣之間的換算。我們的網站簡單易用，支援多種貨幣，無論是旅行、購物還是商業交易，都能幫助您快速獲取準確的匯率資訊，享受便捷的匯率換算體驗！'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: '匯星' },
        { hid: 'og-description', property: 'og:description', content: '歡迎來到匯星，我們提供即時更新的匯率資料，讓您輕鬆進行各種貨幣之間的換算。我們的網站簡單易用，支援多種貨幣，無論是旅行、購物還是商業交易，都能幫助您快速獲取準確的匯率資訊，享受便捷的匯率換算體驗！' },
        { hid: 'og-image', property: 'og:image', content: '/og-image.png' },
        { name: 'theme-color', content: '#7a6ae1' },
      ],
      link: [
        { rel: 'icon', type: 'image/icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-YCP5DNJGV1', defer: true },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YCP5DNJGV1');`
        }
      ]
    }
  },
  experimental: { payloadExtraction: false },
  runtimeConfig: {
    public: {
      API_URI: process.env.NUXT_API_URI,
      API_VERSION: process.env.NUXT_API_VERSION
    }
  },
  devServer: {
    port: 8080
  }
})