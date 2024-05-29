<script setup>
const props = defineProps({
  error: Object
})
</script>

<template>
  <div class=" bg-primary min-h-svh flex items-center flex-col justify-center">
    <h1 class=" font-bold text-7xl mb-4">{{ props.error.statusCode }}</h1>
    <p>
      <NuxtLink class=" underline" to="/"><i class='bx bx-arrow-back'></i>Go back home</NuxtLink>
    </p>
  </div>
</template>