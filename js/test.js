function delay (ms) {
    console.log(`Waiting for ${ms}ms ...`)
    return new Promise (resolve => setTimeout(resolve, ms));
}
async function resolveInSecuence() {
    const response = await axios.get('https://animechan.vercel.app/api/random')
    if (response) console.log(response.data)
    
}
resolveInSecuence();