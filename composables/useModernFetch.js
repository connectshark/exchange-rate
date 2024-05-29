import { ref, unref } from 'vue'

const useFetch = (url) => {
  const loading = ref(false)
  const result = ref(null)
  const error = ref(null)
  /**
   * Fetch data from the API.
   * @param {object} content - Content options for the fetch.
   * @param {string} content.uri - 搜尋幣別，預設TWD
   * @param {string} content.method - 方法，預設是GET
   */
  const doFetch = async ({ method } = { method: 'GET' }) => {
    loading.value = true
    result.value = null
    error.value = null

    const API_URL = unref(url)

    const fetch_response = await fetch(API_URL, {
      method: method
    })
    
    if (fetch_response.ok === false) {
      error.value = fetch_response.statusText
    } else { 
      const res = await fetch_response.json()
      result.value = res
    }

    loading.value = false
  }
  
  return {
    loading,
    result,
    doFetch,
    error
  }
}

export default useFetch