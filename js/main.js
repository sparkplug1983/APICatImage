async function apiCall() {
    const response = await axios.get('https://cataas.com/cat/says/hello%20world!')

    if (response){
        console.log(response.request)
        document.getElementById('myInfo').innerHTML = `
        <img src = '${response.request.responseURL}'> </img>

    `
}
}
document.getElementById('myInfo').innerHTML = '<h1>Loading...</h1>'
apiCall();