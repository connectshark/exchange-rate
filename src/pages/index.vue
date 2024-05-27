<script setup>
import useFetch from '../composables/useFetch'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import countries from '../assets/country.json'
import { computed, ref, watchEffect } from 'vue'

const currency = ref('TWD')
const currencyInfo = computed(() => countries.find(country => country.code === currency.value))
const currencyAmount = ref(1)

const targetCurrency = ref('KRW')
const targetCurrencyInfo = computed(() => countries.find(country => country.code === targetCurrency.value))

const changeCurrency = () => {
  const newCurrency = targetCurrency.value
  const newTargetCurrency = currency.value
  currency.value = newCurrency
  targetCurrency.value = newTargetCurrency
}

const targetCurrencyAmount = computed(() => {
  if (loading.value) {
    return 0
  } else {
    return (currencyAmount.value * result.value.rates[targetCurrency.value]).toLocaleString()
  }
})

const {
  doFetch: getRate,
  loading,
  result
} = useFetch()

watchEffect(() => {
  getRate({
    currency: currency.value.toUpperCase()
  })
})
</script>

<template>
<DefaultLayout>
<section>
  <div class=" max-w-4xl mx-auto w-4/5">
    <div class=" rounded-md shadow-md bg-white p-10">
      <div class=" flex items-center justify-between mb-10">
        <p>{{ targetCurrencyInfo.name }}</p>
        <input class=" focus:border-primary border-b border-gray-300 min-w-0 w-16 outline-none appearance-none bg-transparent" list="country-code" type="text" v-model.trim.lazy="targetCurrency">
      </div>
      <div class=" relative">
        <label for="currency" class="absolute bottom-2">
          <i class='bx bx-dollar bx-sm align-middle' ></i>
        </label>
        <p class="border-b border-gray-300 text-4xl pl-6">{{ targetCurrencyAmount }}</p>
      </div>
    </div>
    <div class=" text-center">
      <button @click="changeCurrency" class=" bg-primary text-white p-1 rounded-full" type="button">
        <i class='bx bx-transfer-alt bx-rotate-90 bx-sm align-middle' ></i>
      </button>
    </div>
    <div class=" rounded-md shadow-md bg-white p-10 mb-10">
      <div class=" flex items-center justify-between mb-10">
        <p>{{ currencyInfo.name }}</p>
        <input class=" focus:border-primary border-b border-gray-300 min-w-0 w-16 outline-none appearance-none bg-transparent" list="country-code" type="text" v-model.trim.lazy="currency">
      </div>
      <div class=" relative">
        <label for="currency" class="absolute bottom-2">
          <i class='bx bx-dollar bx-sm align-middle' ></i>
        </label>
        <input v-model.number="currencyAmount" type="tel" id="currency" class="text-4xl w-full pl-6 focus:border-primary border-b border-gray-300 min-w-0 outline-none appearance-none bg-transparent">
      </div>
    </div>
    <div class=" text-center">
      <p class="text-stone-600" v-if="loading"><i class='bx bx-loader bx-spin' ></i></p>
      <p class="text-stone-600" v-else>1 {{ currency }} = {{ result.rates[targetCurrency].toLocaleString() }} {{ targetCurrency }}</p>
    </div>
    <datalist id="country-code">
      <option v-for="country in countries" id="country.code" :value="country.code">{{ country.name }}</option>
    </datalist>
  </div>
</section>
</DefaultLayout>
</template>
