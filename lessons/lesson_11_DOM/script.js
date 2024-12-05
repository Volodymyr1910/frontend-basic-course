console.log("Hello");
const h = document.querySelector("h1");
h.style.display = "flex";
h.style.flexDirection = "column";
console.log(h)


// * ОГОЛОШЕННЯ ЗМІННИХ

// * LET
// в JS змінна може отримувати нові значення з новими типами (наприклад значенням була буква, а нове значення - число)

//оголошуємо змінну без присвоєння значення
let student;
//тип let дозволяє змінювати значення змінної
//якщо змінній значення не присвоєно, то її значення - undefined (нічого)
//number, string
student = "Jury";
student = "Natalia";

console.log(typeof student);
console.log(student);

// student = 100;

//оператор typeof повертає тип змінної, використовується для перевірки типу змінної
console.log(typeof student)
console.log(student)

student += 100;
console.log(student)


// * CONST
// константа має при створенні отримати значення, і це значення не можна змінювати
const language = "Java Script";
// language = "proxi"; // буде помилка


// ! Примітивні типи даних

// * 1. string
// для string можна використовувати три типи кавичок
// подвійні ""
// одинарні ''
// косі `` (backticks)
let planet = "Earth";
planet = 'Mercury';
planet = `Mercury`;



// * 2. number

let n1 = 42;
let p = 3.14;
let cold = -42;
console.log("-----------------------------------")
console.log(typeof student)

// існує спец. зарезервоване значення NaN - not a number, приходить як відповідь на некоректні математичні операції

console.log(" значення NaN : ", NaN);
console.log(" тип NaN : ", typeof NaN);





// * 3. boolean

let isStudent = true;
let isBackend = false;
let hasPet = true;

// * 4. undefined - невизначений тип даних

let nothing = undefined;
let value;
console.log(nothing)
console.log(value);

// * 5. null - нуль
// спец. значення що означає нічого
// при перевірці типу - показує object, тому слід робити перевірку значення

let nothing1 = null;
console.log(typeof nothing1)

let p1 = document.querySelector("p1");
console.log(p1)


// ! Основні оператори ( арифметичні, порівняння логічні)
// * арифметичні

let v1 = 12 + 42;
let v2 = 62 - 42;
let v3 = 12 * 42;
let v4 = 12 ** 3; // відведення в ступінь
let v5 = 12 % 7; // залишок від ділення
let v6 = 8 / 4; // ділення

// * порівняння 
// > - більше
// < - менше
// >= - більше чи дорівнює
// <= - менше чи дорівнює
// === - строге равенство (рекомендовано до використання) 25 === "25" - false
// == - не строге равенство (равенство з приведенням типів, тобто строка може виявитись рівною числу) 25 == "25" - true

// * приведення типів
let num = 25;
console.log(num === "25") // -> false
let num1 = String (25);
console.log(num1 === "25") // -> true

let string1 = "100";
console.log(string1 === 100) // -> false
console.log("----------------------------------")
let string2 = Number ("25");
console.log(string2 === 25) // -> true

//якщо серед символів буде елемент що не переводиться в число за допомогою  Number - то повернеться NaN
string2 = "200s";
console.log(Number(string2));

// parseInt переводить в число до моменту зустрічі з елементом не-числом, тобто поверне частину значення змінної
console.log(parseInt(string2))
