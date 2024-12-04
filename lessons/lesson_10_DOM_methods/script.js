console.log("hello js!");
console.log("4*100");
console.log(4*100);
// вивели в консоль глобальний обєкт у вигляді html тегів
// console.log(document);
// вивели в консоль глобальний обєкт з усіма вкладеними властивостями (колір, шрифт і т.д.)
// console.dir(document);
// console.log(document.body.h1);
// створили змінну h1  і поклали в неї результат роботи методу-шукача querySelector
const h1 = document.querySelector("h1")
// роздрукували в консолі
console.log(h1);
// змінили властивість кольору для всіх обєктів h1
h1.style.color = "orange"
// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").innerText = "I am Robot";
// знаходимо елемент по id звертаюсь через знак #
const btnChange = document.querySelector("#btn-change")
console.log(btnChange)
// btnChange.style.color = "red";

// застосовуємо функцію слухача подій відносно знайденої кнопки
btnChange.addEventListener("click", () => {
    // як трапиться подія "click", відбудуться описані зміни:
    h1.style.color = "violet"
    h1.innerText = "I am Robot🤖";
})
const btnCreate = document.querySelector("#btn-create")
btnCreate.addEventListener("click", () =>{
    // створили пустий елемент p
 let newElement = document.createElement("p")
//  змінили текст пустого елементу p
 newElement.innerText = "Здається я починаю розуміти цей DOM"
//  змінюємо колір тексту елемента до його додавання на сторінку
  newElement.style.color = "forestgreen"
//  додаємо новий елемент на сторінку, застосовуємо метод append до батьківского елементу body, в дужках можна передати одразу декілька елементів
 document.body.append(newElement)
 
 console.log(newElement)
})
