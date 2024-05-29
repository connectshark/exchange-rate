<script setup>
import countries from '../assets/country.json'
const { ogImage } = useAppConfig()

defineOgImageComponent(
  'NuxtSeo',
  {
    ...ogImage,
    siteLogo: '/logo.png'
  }
)

definePageMeta({
  title: '歷史匯率'
})

const canvas = ref(undefined)
const currency = ref('JPY')

const timeFormat = (date) => {
  return new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

const {
  data: exchangeList,
  pending,
  execute: doFetch
} = await useFetch('https://api.finmindtrade.com/api/v4/data', {
  query: {
    dataset: 'TaiwanExchangeRate',
    end_date: timeFormat(new Date()),
    start_date: timeFormat(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)),
    data_id: currency
  },
  watch: false,
  immediate: false
})


const {
  destroyChart,
  createChart
} = useChart(canvas, exchangeList)

watch(currency, async () => {
  await destroyChart()
  await doFetch()
  await createChart()
})

onMounted(async () => {
  await doFetch()
  createChart()
})
</script>

<template>
<NuxtLayout>
  <div class="w-11/12 mx-auto">
    <div>
      <h1 class="font-bold text-center text-xl/loose mb-6">歷史匯率</h1>
    </div>
    <div class=" text-center mb-10 space-x-6">
      <p class="relative inline-block">
        <select v-model="currency" aria-label="select target currency code" id="targetCurrency-code" class=" relative z-10 focus:border-primary border-b text-sm border-gray-300 min-w-0 outline-none appearance-none bg-transparent">
          <option v-for="country in countries" id="country.code" :value="country.code">{{ country.code }}{{ country.name }}</option>
        </select>
        <label class=" absolute right-0" for="targetCurrency-code"><i class='bx bx-chevron-down'></i></label>
      </p>
      <span>
        <i class='bx bx-transfer-alt align-middle' ></i>
      </span>
      <p class="text-sm inline-block">TWD 新台幣</p>
    </div>
    <p v-show="pending" class=" text-center">
      <i class='bx bx-loader bx-spin' ></i>
    </p>
    <div class="mb-10">
      <canvas v-show="!pending" ref="canvas" class="w-full max-h-96"/>
    </div>
  </div>
</NuxtLayout>
</template>