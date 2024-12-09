const arr = [1, 2, 3];

// поверхневе копіювання (робиться для читання)
const arrCopy = arr; // скопіювали лінк у пам'яті на масив, всі зміни що будуть робитись с arrCopy, змінять і масив arr, бо це два ключа від одного об'єкту

// глибоке копіювання (робиться для читання)
//arrCopy = [...arr]; // скопіювали всі елементи масиву arr, і поклали їх у новий масив arrCopy. Ці масиви мають різні лінки на місце в пам'яті


// складний тип даних object, структура даних що складається з пар ключ - значення; синтаксис із фігурними скобками; 

let user = {
    name: "John", 
    age: 33,
    isAdmin: true
}

// точкова нотація
console.log(user.name);

// нотація через квадратні дужки
console.log(user["name"])

console.log(user.salary)

// +'5000' => 5000
// +'5000' => 5000


user.salary = 5000;
console.log(user.salary)

user.age = 31;

delete user.isAdmin;
console.log(user);

for (const key in user) {
    console.log(`Ключ: ${key}, Значение равно: ${user[key]}`)
}

user.greet = function() {
    console.log(`Привіт, мене звуть ${this.name} і мені ${this.age}`);
}
user.greet;

// створити об'єкт, який буде називатись bankAccount:
/*
1. accountNumber = "123456789"
2. accountHoldername = "Alice"
3. balance: 0

4. deposit(sum){
додає сумму на рахунок
} 

5. withdraw(sum){
зняття з рахунку
}

6. checkBalance(){
перегляд балансу рахунку
}

*/