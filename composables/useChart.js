import Chart from 'chart.js/auto'

export default (ctx, list) => {
  const chart = ref(null)
  let created = false

  const destroyChart = async () => {
    chart.value.destroy()
  }

  const createChartData = (data) => {
    return {
      labels: data.map(row => row.date),
      datasets: [{
        label: toChinese['cash_buy'],
        data: data.map(row => row.cash_buy)
      }, {
        label: toChinese['cash_sell'],
        data: data.map(row => row.cash_sell)
      }]
    }
  }

  const createChart = async () => {
    const data = list.value.data
    chart.value = new Chart(ctx.value, {
      type: 'line',
      data: createChartData(data),
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          mode: 'index'
        }
      }
    })
    
    window.addEventListener('resize', ()=> {
      chart.value.resize()
    })

    created = true
  }

  return {
    chart,
    createChart,
    destroyChart
  }
}

const toChinese = {
  'cash_buy': '現金買入',
  'cash_sell': '現金賣出'
}