const arr = [1, 2, 3];

// поверхневе копіювання (робиться для читання)
const arrCopy = arr; // скопіювали лінк у пам'яті на масив, всі зміни що будуть робитись с arrCopy, змінять і масив arr, бо це два ключа від одного об'єкту

// глибоке копіювання (робиться для читання)
//arrCopy = [...arr]; // скопіювали всі елементи масиву arr, і поклали їх у новий масив arrCopy. Ці масиви мають різні лінки на місце в пам'яті

// складний тип даних object, структура даних що складається з пар ключ - значення; синтаксис із фігурними скобками;

let user = {
  name: "John",
  age: 33,
  isAdmin: true,
};

// точкова нотація
console.log(user.name);

// нотація через квадратні дужки
console.log(user["name"]);

console.log(user.salary);

// +'5000' => 5000
// +'5000' => 5000

user.salary = 5000;
console.log(user.salary);

user.age = 31;

delete user.isAdmin;
console.log(user);

for (const key in user) {
  console.log(`Ключ: ${key}, Значение равно: ${user[key]}`);
}

user.greet = function () {
  console.log(`Привіт, мене звуть ${this.name} і мені ${this.age}`);
};
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

let bankAccount = {
  accountNumber: "123456789",
  accountHoldername: "Alice",
  balance: 0,
};

bankAccount.deposit = function () {
  if (sum < 5 && sum >= 5000) console.log("Некоректна сумма поповнення !");
  /* sum >= 5 && sum <= 5000 ? this.balance += sum : alert ("console.log(Некоректна сумма поповнення !)") */ else {
    this.balance += sum;
    console.log(
      `Сума ${sum} євро додана до рахунку. Поточний баланс: ${this.balance} євро.`
    );
  }
};

bankAccount.withdraw = function (sum) {
  if (bankAccount.balance >= sum && sum > 0) {
    this.balance -= sum;
    console.log(
      `Сума ${sum} євро знята з рахунку. Поточний баланс: ${this.balance} євро.`
    );
  } else console.log("Не достатньо грошей на рахунку !");
};

bankAccount.checkBalance = function () {
  console.log(`Поточний баланс: ${this.balance} євро.`);
};
const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim(); // trim()  видаляє не потрібні пробіли перед і після name
  // falsy null, "", 0, undefined, NaN
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHoldername: name,
    });
    alert("Account created successfully");
  }else {
    alert("Please, enter a valid name")
  }
  nameInput.value = "";
  console.log(bank)
}

function showAccounts() {
 let btn = document.querySelector("#show")
 let newLi;
 let place = document.getElementById("accountList")
    btn.addEventListener("click", () => {
        place.innerText = "";
        for (let i = 0; i < bank.length; i++) {
            newLi = document.createElement("li")
          newLi.innerText = `Account number: ${bank[i].accountNumber}; Account owner: ${bank[i].accountHoldername}; Current Ballance: ${bank[i].balance}`
         place.append(newLi)
          } 
    })

}
