
let b = document.querySelector("div")
b.style.display = "flex";
b.style.flexDirection = "column";
b.style.alignItems = "center";

let p = document.querySelector("p");
p.style.fontSize = "20px";
p.style.color = "forestgreen";
p.style.fontFamily = "Arial";
document.body.style.padding = "20px";

p.innerText = () => {
    /*створити об'єкт, який буде називатись bankAccount:

1. accountNumber = "123456789"
2. accountHoldername = "Alice"
3. balance: 0

4. deposit(sum){додає сумму на рахунок} 
5. withdraw(sum){зняття з рахунку}
6. checkBalance(){перегляд балансу рахунку}
*/

let sum = 50;

let bankAccount = {
    accountNumber :"123456789",
    accountHoldername : "Alice",
    balance : 0
}

bankAccount.deposit = function(){
    if(sum < 5 && sum >= 5000 ) console.log("Некоректна сумма поповнення !")
    // sum >= 5 && sum <= 5000 ? this.balance += sum : alert ("console.log(Некоректна сумма поповнення !)")
    else { bankAccount.balance += sum;
    console.log(`Сума ${sum} євро додана до рахунку. Поточний баланс: ${bankAccount.balance} євро.`) }
}

bankAccount.withdraw = function(sum){
    if(bankAccount.balance >= sum && sum > 0){
        bankAccount.balance -= sum;
        console.log(`Сума ${sum} євро знята з рахунку. Поточний баланс: ${bankAccount.balance} євро.`)
    }else console.log("Не достатньо грошей на рахунку !")
}

bankAccount.checkBalance = function(){
    console.log(`Поточний баланс: ${bankAccount.balance} євро.`)
}

bankAccount.checkBalance(); // => Поточний баланс: 0 євро.
bankAccount.deposit(sum);   // => Сума 50 євро додана до рахунку. Поточний баланс: 50 євро.
sum = 150;
bankAccount.withdraw(sum)   // => Не достатньо грошей на рахунку !
sum = 30;
bankAccount.withdraw(sum)   // => Сума 30 євро знята з рахунку. Поточний баланс: 20 євро.
}

// Приклади модальних вікон :
alert("Привіт з модального вікна!"); // повідомлення
let answer = confirm("Закрити сторінку?"); // підтвердження або відмова boolean
answer = prompt("ВВедіть ваше прізвище:"); // підтвердження або відмова string, або null якщо користувач натисне cancel