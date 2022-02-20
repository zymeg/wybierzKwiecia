let photos = [
    {
        src: "./src/beatles.jpg",
        desc: "kwieciu the beatle",
        points: 1
    },{
        src: "./src/bezglowy.jpg",
        desc: "Bezgłowy kwieciu",
        points: 0
    },{
        src: "./src/model.jpg",
        desc: "Kwieciu model",
        points: 0
    },{
        src: "./src/rano.jpg",
        desc: "Kwieciu z rana jak smietana",
        points: 1
    },{
        src: "./src/slodki.jpg",
        desc: "Kwieciu słodziaczek",
        points: 0
    },{
        src: "./src/wietrzny.jpg",
        desc: "Kwieciu na wietrze",
        points: 1
    }]

let kwieciuSlideshow = 1 
let points = 0;

let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")

let photo1 = document.querySelector("#photo1")
let photo2 = document.querySelector("#photo2")

let desc1 = document.querySelector("#desc1")
let desc2 = document.querySelector("#desc2")

let colors = ["#0e5ec7", "#bf0254", "#02bf05", "#d60000", "#7600d6"]

function start(){
    document.querySelector("#podsumowanie").style.display = 'none'
    document.querySelector("#zaproszenie").style.display = 'none'
    document.querySelector("#gra").style.display = 'flex'
    kwieciuSlideshow = 1 
    points = 0;
    photo1.innerHTML = `<img src="${photos[0].src}">`
    photo2.innerHTML = `<img src="${photos[1].src}">`

    desc1.innerHTML = `<span>${photos[0].desc}</span>`
    desc2.innerHTML = `<span>${photos[1].desc}</span>`
    
}

function podsumowanie(){
    if(points >= 2){
        document.querySelector("#gra").style.display = 'none'
        document.querySelector("#zaproszenie").style.display = 'flex'
        let i = 0 
        setInterval(() => {
            document.querySelector("#zaproszenie").style.backgroundColor = colors[i]
            i++
            if(i == colors.length) i = 0
        }, 500)
    }else {
        document.querySelector("#gra").style.display = 'none'
        document.querySelector("#podsumowanie").style.display = 'flex'

    }
}

start()

option1.addEventListener("click", ()=>{
    if(kwieciuSlideshow == 1){
        kwieciuSlideshow += 1

        photo1.innerHTML = `<img src="${photos[2].src}">`
        photo2.innerHTML = `<img src="${photos[3].src}">`

        desc1.innerHTML = `<span>${photos[2].desc}</span>`
        desc2.innerHTML = `<span>${photos[3].desc}</span>`

        points += 1
    }else if(kwieciuSlideshow == 2){
        kwieciuSlideshow += 1

        photo1.innerHTML = `<img src="${photos[4].src}">`
        photo2.innerHTML = `<img src="${photos[5].src}">`

        desc1.innerHTML = `<span>${photos[4].desc}</span>`
        desc2.innerHTML = `<span>${photos[5].desc}</span>`

        points += 0
    }else if(kwieciuSlideshow == 3){
        points += 0
        podsumowanie()
    }
})

option2.addEventListener("click", ()=>{
    if(kwieciuSlideshow == 1){
        kwieciuSlideshow += 1

        photo1.innerHTML = `<img src="${photos[2].src}">`
        photo2.innerHTML = `<img src="${photos[3].src}">`

        desc1.innerHTML = `<span>${photos[2].desc}</span>`
        desc2.innerHTML = `<span>${photos[3].desc}</span>`
        
        points += 0
    }else if(kwieciuSlideshow == 2){
        kwieciuSlideshow += 1

        photo1.innerHTML = `<img src="${photos[4].src}">`
        photo2.innerHTML = `<img src="${photos[5].src}">`

        desc1.innerHTML = `<span>${photos[4].desc}</span>`
        desc2.innerHTML = `<span>${photos[5].desc}</span>`
        
        points += 1
    }else if(kwieciuSlideshow == 3){
        points += 1
        podsumowanie()
    }
})

document.querySelector("#przegranaBtn").addEventListener("click", () => start())

