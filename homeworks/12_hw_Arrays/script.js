console.log("Hallo")
// ! arrays
let numbers = [1, 2, 3, 4, 5];
// можна створювати масиви, що мають в собі різні типи даних, але, як правило, це не зручно і робити не потрібно
let arr1 = ["apple", "orange", "banana", "grape", 8, true, undefined];
let fruits = ["apple", "orange", "banana", "grape"];
console.log(arr1);
// cкладний тип даних, масиви у квадратних дужках, індекс починається з нуля
let itemFirst = arr1[0];
let itemLast = arr1[arr1.lenght - 1]

let secret = arr1[10];
// при зверненні до не існуючого індекса - отримуємо undefined
console.log(secret);

//виводимо значення довжини масиву
let lenght = arr1.length;
console.log("довжина масиву arr1 ==> ", lenght)

// ! arrays methods - push(), pop() - мутуючі, працюють з кінцем масиву
// всі методи в JS ділять на 2 групи :
// 1. мутуючі - змінюють первинне джерело -> push(), pop()
// 2. не мутуючі - не зміннюють первинне джерело, повертають новий об'єкт із зміненими даними
  
// видаляє останній  елемент масиву
let lastFruit = fruits.pop();
// додає новий елемент в кінець масиву
fruits.push("pineapple")
console.log(fruits)

let arr = fruits.push("pineapple");
console.log("в arr попадає довжина масиву після додавання елементу => ", arr)

arr = fruits.pop();
console.log("в arr попадає видалений елемент => ", arr)
arr = fruits;
console.log(arr)
arr.pop();
console.log( "після видалення останнього елементу", arr)
arr.push("watermelone")
console.log("після додавання нового елементу в кінець масиву ",arr)

console.log("---------------------unshift(), shift()--------------------------")
// ! arrays methods - unshift(), shift() -  - мутуючі, працюють з початком масиву
let planets = ["Mars", "Venus", "Earth", "Saturn"]


// видаляє перший  елемент масиву, і повертає видалений елемент
planets.shift();
console.log(planets)
// додає новий елемент в початок масиву і повертає довжину масиву після додавання

planets.unshift("Mercury");
console.log(planets)

// ! for loop - цикл for
for (let i = 0; i < fruits.length; i++) {

console.log(i, fruits[i])
console.log(fruits[i])
};

// ! while - цикл
let count = 0;
while(count++ < 5) console.log(count);
let ccc = (fruits.length > 2) ? 9 : 5
console.log(ccc)

// ! методи роботи зі строками

// знайти довжину строки - властивість lenght
let planet = "Planet Earth";
let planetLenght = planet.length;
console.log("довжина змінної planet :", planetLenght)

// приведення строки до нижнього регістру методом toLowerCase()
let lowerCase = planet.toLowerCase();
console.log("планета в нижньому регістрі",lowerCase)

// приведення строки до верчнього регістру методом toLowerCase()
lowerCase = planet.toUpperCase();
console.log("планета в верхньому регістрі",lowerCase)


// отримання підстроки методом substring() - не мутуючий

let sss = planet.substring(0, 6); // лівий ундекс входить, правий індекс не входить
console.log(sss)

// пошук індекса підстроки

let indexOfPlanet = planet.indexOf("Earth") // если в строке елемента нет - будет -1
console.log("індекс початку підстроки Earth",indexOfPlanet)
console.log("символ під індексом 3 => ", planet[3])

// ! операції з числами за допомогою об'єкту Math

let random = Math.random(); // за замовчуванням число від 0 до 1; (дробне !!!!)
console.log(random)

//випадкове число выд 0 до 1
let randomFloor = Math.random() * 100; // число буде від 0 до 99 включно;
console.log("без округлення: ",randomFloor)
randomFloor = Math.random() * 100 + 1; // число буде від 1 до 100 включно;
randomFloor = Math.floor(Math.random() * 100) + 1; // округлення вниз
randomFloor = Math.ceil(Math.random() * 100) + 1; // округлення вверх
console.log("з округленням: ", randomFloor)