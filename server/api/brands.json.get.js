export default eventHandler(async () => {
  const fetch_response = await fetch('https://cdn.jsdelivr.net/gh/connectshark/studio-portfolio@latest/brands.json')
  const data = await fetch_response.json()
  return data.filter(item => item.name !== '匯星')
})