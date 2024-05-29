export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/seo', '@nuxtjs/tailwindcss'],
  site: {
    url: 'https://exchange-rate.justlikeboss.com',
    name: '匯率換算 - 小資族FIRE攻略',
    description: '歡迎來到匯率換算 - 小資族FIRE攻略，我們提供即時更新的匯率資料，讓您輕鬆進行各種貨幣之間的換算。我們的網站簡單易用，支援多種貨幣，無論是旅行、購物還是商業交易，都能幫助您快速獲取準確的匯率資訊，享受便捷的匯率換算體驗！',
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
        { name: 'description' , content: 'Nuxt Content for starter'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Nuxt Content for starter' },
        { hid: 'og-description', property: 'og:description', content: 'Nuxt Content for starter' },
        { hid: 'og-image', property: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap' }
      ],
    }
  },
  experimental: { payloadExtraction: false },
  runtimeConfig: {
    public: {
      API_URI: process.env.NUXT_API_URI,
      API_VERSION: process.env.NUXT_API_VERSION
    }
  }
})