<template>
  <header class=" sticky top-0">
    <div class=" max-w-6xl mx-auto w-11/12 py-8 flex items-center">
      <router-link to="/">
        <img class=" inline-block align-middle w-10" src="../assets/logo.png" alt="logo">
        <span class="ml-3 font-bold text-xl/loose align-middle">匯率換算</span>
      </router-link>
      <nav>
        <ul>
        </ul>
      </nav>
    </div>
  </header>
  <slot/>
</template>

<script setup>
const links = [
  {
    icon: 'bxl-gmail',
    name: 'gmail'
  }
]
</script>