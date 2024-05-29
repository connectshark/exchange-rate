<template>
  <header class="sticky top-0 mb-4 bg-gradient-to-b from-primary/5 to-primary/0 backdrop-blur-3xl z-20">
    <div class=" max-w-6xl mx-auto w-11/12 py-4 flex items-center justify-between">
      <router-link to="/">
        <img class=" inline-block align-middle w-8" src="../assets/logo.png" alt="logo">
        <span class="ml-3 text-md align-middle">{{ appConfig.title }}</span>
      </router-link>
      <nav>
        <ul>
          <li v-for="item in navs">
            <NuxtLink class="text-sm" :to="item.url">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="mb-20">
    <slot/>
  </main>
  <footer>
    <div class=" max-w-6xl mx-auto w-11/12 py-8 grid gap-10 md:grid-cols-3">
      <div>
        <p>
          <NuxtLink to="/">2024<i class='bx bx-copyright align-middle'></i>小資族FIRE攻略</NuxtLink>
        </p>
      </div>
      <div class="md:col-start-3">
        <p class="mb-3 last:mb-0" v-for="link in links">
          <a class="hover:underline" :href="link.url" target="_blank">{{ link.name }}<i class='bx bx-link-external'></i></a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const appConfig = useAppConfig()
const navs = [
  {
    url: '/history',
    name: '歷史匯率'
  }
]
const links = [
  {
    url: 'https://blog.justlikeboss.com/',
    name: '小資族FIRE攻略'
  },
  {
    url: 'https://kfc.justlikeboss.com/',
    name: '酷碰獅'
  },
  {
    url: 'https://blog.justlikeboss.com/shopee-coupon/',
    name: '蝦皮折扣碼'
  }
]
</script>