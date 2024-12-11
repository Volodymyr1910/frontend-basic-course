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

// function showAccounts() {
//  let btn = document.querySelector("#show")
//  let newLi;
//  let place = document.getElementById("accountList")
//     btn.addEventListener("click", () => {
//         place.innerText = "";
//         for (let i = 0; i < bank.length; i++) {
//             newLi = document.createElement("li")
//           newLi.innerText = `Account number: ${bank[i].accountNumber}; Account owner: ${bank[i].accountHoldername}; Current Ballance: ${bank[i].balance}`
//          place.append(newLi)
//           } 
//     })

// }

function showAccounts() {

  const place = document.getElementById("accountList")
  place.innerHTML = "";

  // for (const element of bank) {
  //   // const li = document.createElement("li")
  //   // li.textContent = `Account number: ${element.accountNumber}; Account owner: ${element.accountHoldername}; Current Ballance: ${element.balance}`
  //   // place.appendChild(li);

  //     place.innerHTML += `<li> Account number: ${element.accountNumber}; Account owner: ${element.accountHoldername}; Current Ballance: ${element.balance}</li>`;

  // }
 
  
  // For Loop використовувати можна завжди
  //ForEach використовується тільки для масивів
  //forin і forof використовується тільки для об'єктів (forin перебирає ключі або індекси, forof перебирає елементи)
  //варіант з forEach(e, i) - e - елемент, i - індекс
  //варіант з forEach(_, i) - в цьому випадку елемент не буде братись до уваги, буде використовуватись тільки індекс

  bank.forEach((element, index) => {
    place.innerHTML += `<li>${index + 1}. Account number: ${element.accountNumber}; Account owner: ${element.accountHoldername}; Current Ballance: ${element.balance}</li>`;
  })
 }

const withdraw = document.getElementById("withdraw")
const deposit = document.getElementById("deposit")

deposit.onclick = function (){
  const accountId = document.getElementById("accountId");
  const accountIdValue = accountId.value.trim();
  console.log(accountIdValue)
  const amount = document.getElementById("amount");
  const amountValue = amount.value.trim();
  if (amountValue < 5 && amountValue >= 5000){ alert("Некоректна сумма поповнення !")}
    
  accountId.value = "";
  amount.value = "";

  let check = false;
  bank.forEach(element => {
    console.log(element.accountNumber)
    if(element.accountNumber == accountIdValue){
      check = true;
      element.balance = amountValue;
      alert(
        `Сума ${amountValue} євро додана до рахунку. Поточний баланс: ${element.balance} євро.`
      );
    }
   
  });
    if(!check) alert("Немає клієнта з вказаним ID")
     
}

withdraw.onclick = function (){
  //  TODO
  const accountId = document.getElementById("accountId");
  const accountIdValue = accountId.value.trim();
  const amount = document.getElementById("amount");
  const amountValue = amount.value.trim();

  accountId.value = "";
  amount.value = "";

    let check = false;
  bank.forEach(element => {
    if(element.accountNumber == accountIdValue){
      if (element.balance >= amountValue && amountValue > 0) {
        element.balance -= amountValue;
        alert(
          `Сума ${amountValue} євро знята з рахунку. Поточний баланс: ${element.balance} євро.`
        );
      } else alert("Не достатньо грошей на рахунку !");
      check = true;
    }
   
  });
    if(!check) alert("Немає клієнта з вказаним ID")
     
}

function removeAccount(){

let place = document.getElementById("numberForRemove")
let removeId = place.value.trim() * 1; // множення на 1 - це парсинг з string  в number
// let removeId = +place.value.trim(); // знак + - це парсинг з string  в number
let check = false;

bank.forEach((element, index) => {
  if(element.accountNumber === removeId){
    console.log("check")
    bank.splice(index, 1)
    alert(`Дані по клієнту з ID ${removeId} видалено !`)
    check = true;
  }//end if
});
place.value = "";
  if(!check) alert("Немає клієнта з вказаним ID")
}//end removeAccount