document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const series = document.querySelector('input').value
    try{
        const response = await fetch(`https://best-tv-showss-api.herokuapp.com/api/${series}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.Description
    }catch(error){
        console.log(error)
    }
}