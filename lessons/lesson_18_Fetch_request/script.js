//HTTP - HyperText Transfer Protocol - протокол передачі гіпертексту
// API - Application Programming Interface - інтерфейс для спілкування програм одна з одною

// ! робимо fetch-запит за даними до API (приватний випадок роботи з стороннім сервером)
// * у відповідь на fetch-запит приходить об'єкт Promis у стані очікування (<pending>); його не можна обробити синхронно, треба використовувати методи роботи з асинхронними данними
//const data = fetch("https://dog.ceo/api/breeds/image/random")
//console.log(data)

// ! така конструкція отримує сирі дані з сервера а не ті які ми очікуємо
//fetch("https://dog.ceo/api/breeds/image/random").then(res => console.log(res))

// ? робимо запит
const img = document.querySelector("#dog-img")

// знайшли кнопку для апдейту
const btnUpd = document.querySelector("#btn-update")


// створили функцію для повторного використання
function getDog (){

// ! правильна конструкція
fetch("https://dog.ceo/api/breeds/image/random")
//отримуємо в res сирі дані і опрацьовуємо їх методом json
// відповідь сервера отримуємо в форматі json - JavaScript Object Notation
.then(res => res.json())
//отримуємо в data оброблені дані, готові до використання
.then(data => {

    // перезаписуємо атрибут src значенням із data
    img.src = data.message
})

}// end function getDog ()


getDog();

// прикріпляємо слухача, передаємо тип події click і вже готову функцію getDog
btnUpd.addEventListener("click", getDog)


function getHero (){

   
    }// end function getHero ()
     

    let picture = document.getElementById("hero")
    let nameIn = document.getElementById("hero-name")
    let statusIn = document.getElementById("hero-status")
    let originIn = document.getElementById("hero-origin")




    // ! правильна конструкція
     fetch("https://rickandmortyapi.com/api/character")
    
     .then(res => res.json())
     
     //.then(res => res.json())



     .then(data => {
         console.log(data)
        
         let name1 = data.results[1].name
         let status1 = data.results[1].status
         let origin1 = data.results[1].origin.name
         let picture1 = data.results[1].image

        picture.src = data.results[1].image
       nameIn.innerText = `Name: ${data.results[1].name}`
       statusIn.innerText = `Status: ${data.results[1].status}`
       originIn.innerText = `Origin: ${data.results[1].origin.name}`
      

    })
     