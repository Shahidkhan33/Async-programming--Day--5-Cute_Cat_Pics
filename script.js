var url = 'https://api.thecatapi.com/v1/images/search'


const nextbutton = document.getElementsByClassName('nextbutton')


// nextbutton.addEventListener('click', generateCatPics)

generateCatPics()

async function generateCatPics() {
    const res = await fetch(url)

    const data = await res.json()
    console.log(data)
       
    const myImg = document.querySelector("img")

    myImg.src = data[0].url

}