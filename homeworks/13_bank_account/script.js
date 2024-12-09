
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
    bankAccount.balance += sum;
    console.log(`Сума ${sum} євро додана до рахунку. Поточний баланс: ${bankAccount.balance} євро.`)
}

bankAccount.withdraw = function(sum){
    if(bankAccount.balance >= sum){
        bankAccount.balance -= sum;
        console.log(`Сума ${sum} євро знята з рахунку. Поточний баланс: ${bankAccount.balance} євро.`)
    }else console.log("Не достатньо грошей на рахунку !")
}

bankAccount.checkBalance = function(){
    console.log(`Поточний баланс: ${bankAccount.balance} євро.`)
}

bankAccount.checkBalance();
bankAccount.deposit(sum);
sum = 150;
bankAccount.withdraw(sum)
sum = 30;
bankAccount.withdraw(sum)