/*Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль.

Создайте переменную myString и присвойте ей значение, которое является результатом сложения следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.

Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.

Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль. */

 const h = document.querySelector("h1");
 h.style.color = "purple";

let btn = document.querySelector("body")
btn.style.display = "flex";
btn.style.flexDirection = "column";
btn.style.alignItems = "center";

btn = document.querySelector("button")
btn.className = "button-class"

let btnNew = btn.cloneNode(true);
const btnFinish = btn.cloneNode(true);

btn.addEventListener("click", () => {
     btn.className = "empty"
     btn.innerText = ""
    
    
    btnNew.style.backgroundColor = "black";
    btnNew.style.color = "white";
    btnNew.innerText = " Press one more time ! Don't be afraid 🙈"
   
    document.body.append(btnNew)



});
btnNew.addEventListener("click", () => {
   btnNew.className = "empty"
    btnNew.innerText = ""
    btnFinish.innerText = "Бог любить трійню ! Клацни в-останнє !!!"
    btnFinish.id = "new";
    document.body.append(btnFinish)
});

btnFinish.addEventListener("click", () => {
    btnFinish.className = "empty"
    btnFinish.innerText = ""
   document.body.style.backgroundImage = "url('море.jpg')" 
   document.body.style.backgroundSize= "cover";
   document.body.style.backgroundRepeat = "no-repeat";
    document.querySelector("h1").style.color = "white";
    document.querySelector("title").innerText = "⚡⚡⚡    D-O-N-E !   ⚡⚡⚡";
    document.querySelector("p").style.fontSize = " 30px "
      document.querySelector("p").style.color = "purple"
    document.querySelector("p").innerText = () => {










        console.log("------------------------ home work starts here ---------------------------")

                                        let myNumber = 100 / (25 % 3);
                                        console.log(myNumber); // => 100
        console.log("-------------------------------------------------------------------------------")
                                        let str1 = "Hello, ";
                                        const str2 = "world";
                                        const str3 = "!";
                                        const year = " 2024";
        
                                        const myString = str1 + str2 + str3 + year;
                                        console.log(myString); // => Hello, world! 2024
        
        console.log("-------------------------------------------------------------------------------")
        
                                        const isHuman = 42 == "42";
                                        console.log(isHuman); // => true
         
        console.log("-------------------------------------------------------------------------------")
                                        tr1 = "123smth"
                                        myNumber = parseInt(str1);
                                        console.log(myNumber) // => 123

    }})

    
console.log("------------------------ home work starts here ---------------------------")

let myNumber = 100 / (25 % 3);
 console.log(myNumber);
console.log("--------------------------------------------------------------------------")
let str1 = "Hello, ";
const str2 = "world";
const str3 = "!";
const year = " 2024";

 const myString = str1 + str2 + str3 + year;
console.log(myString);

console.log("--------------------------------------------------------------------------")

const isHuman = 42 == "42";
console.log(isHuman);

console.log("--------------------------------------------------------------------------")
str1 = "123smth"
myNumber = parseInt(str1);
// console.log(myNumber)

