let bankAccount = {
  accountNumber: "123456789",
  accountHoldername: "Alice",
  balance: 0,
};

const bank = [];

bankAccount.deposit = function (sum) {
  if (sum >= 5 && sum < 5000) {
    this.balance += sum;
    alert(
      `Сума ${sum} євро додана до рахунку. Поточний баланс: ${this.balance} євро.`
    );
  } else alert("Некоректна сумма поповнення !");
};

bankAccount.withdraw = function (sum) {
  if (sum <= this.balance && sum > 0) {
    this.balance -= sum;
    alert(
      `Сума ${sum} євро знята з рахунку. Поточний баланс: ${this.balance} євро.`
    );
  } else alert("Не достатньо грошей на рахунку !");
};

bankAccount.checkBalance = function () {
  alert(`Поточний баланс: ${this.balance} євро.`);
};

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim(); // trim()  видаляє не потрібні пробіли перед і після name
  // falsy null, "", 0, undefined, NaN
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1, // в даному випадку номер акаунта буде зберігатись в форматі числа
      // accountNumber: (bank.length + 1).toString(), // в даному випадку номер акаунта буде зберігатись в форматі string

      accountHoldername: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }
  nameInput.value = "";
} //function createAccount()

function showAccounts() {
  let place = document.getElementById("accountList");
  place.innerHTML = "";

  bank.forEach((element, index) => {
    //cтворення елементу span
    let span = document.createElement("span");

    //створюємо елемент li з інформацією про акаунт і кладемо в елемент span
    span.innerHTML += `<li>${index + 1}. Account number: ${
      element.accountNumber
    }; Account owner: ${element.accountHoldername}; Current Ballance: ${
      element.balance
    }</li>`;

    //створюємо кнопку для видалення акаунта і наділяємо її властивостями з css
    const btn = document.createElement("button");
    btn.className = "removeLi";
    btn.title = "Видалити акаунт";
    btn.innerText = "X";

    // кнопка видалення і елемент, що містить інформацію про акаунт зв'язані спільним id
    span.id = element.accountNumber;
    btn.id = element.accountNumber;

    //додаємо кнопку в елемент span
    span.append(btn);

    //додаємо зформований span в елемент ol
    place.append(span);
  });
} //end function showAccounts()

// //Знаходимо кнопку видалення акаунта по імені класу
// const btns_ForRemove = document.querySelectorAll(".removeLi");
// console.log("кнопки", btns_ForRemove)
// //додаємо слухача
// btns_ForRemove.forEach((btnForRemove) => {
//   btnForRemove.addEventListener("click", () => {
//     //знаходимо елемент span, в якому лежить кнопка і відповідний акаунт
//     const spanForRemove = btnForRemove.closest("span");
//     console.log("найближчий спан", spanForRemove)
//     //перевіряємо чи існує span, перевіряємо співпадіння ID, видаляємо елемент з усім змістом
//     if (spanForRemove) {
//       if (spanForRemove.id === btnForRemove.id) {
//         alert(`Дані по клієнту з ID ${btnForRemove.id} видалено !`);
//         spanForRemove.remove();
//       } //end if(spanForRemove.id === btnForRemove.id)
//     } //end if(spanForRemove)
//   }); //end btnForRemove.addEventListener("click"
// }); //end btns_ForRemove.forEach (btnForRemove

//включаємо слухача на event - клік на об'єкт, що з'явиться на сторінці html (тобто одразу його на сторінці немає)
document.body.addEventListener("click", (event) => {
  //перевіряємо наявність на сторінці елементу з атрибутом removeLi
  if (event.target.classList.contains("removeLi")) {
    //елемент з'явився, на нього клікнули, шукаємо span в якому лежить кнопка, яку натиснули
    const spanForRemove = event.target.closest("span");
    //перевіряємо чи існує span, перевіряємо співпадіння ID
    if (spanForRemove) {
      //додатковий запит у користувача
      let answer = confirm(
        `Ви дійсно хочете видалити аккаунт з ID ${event.target.id}`
      );
      if (answer) {
        alert(`Дані по клієнту з ID ${event.target.id} видалено!`);

        //видаляємо елемент з усім змістом і відповідний еплемент масиву
        console.log(bank[spanForRemove.id - 1]);
        bank.splice(spanForRemove.id - 1, 1);
        spanForRemove.remove();
      } //end if (spanForRemove)
    }
  } //end if (event.target.classList.contains("removeLi"))
}); //end document.body.addEventListener("click", event =>

function removeAccount() {
  let place = document.getElementById("numberForRemove");
  let removeId = place.value.trim() * 1; // множення на 1 - це парсинг з string  в number
  // let removeId = +place.value.trim(); // знак + - це парсинг з string  в number
  let check = false;

  bank.forEach((element, index) => {
    if (element.accountNumber === removeId) {
      console.log("check");
      bank.splice(index, 1);
      alert(`Дані по клієнту з ID ${removeId} видалено !`);
      check = true;
    } //end if
  });
  place.value = "";
  if (!check) alert("Немає клієнта з вказаним ID");
} //end removeAccount

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  operation("deposit");
}; // end deposit.onclick = function

withdraw.onclick = function () {
  operation("withdraw");
}; // end withdraw.onclick = function

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim(); //строка
  const amount = +amountInput.value.trim(); //number (число або NaN)

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  ); // шукає і повертає елемент в форматі строки  або undefined

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else alert("Немає клієнта з вказаним ID");

  accountIdInput.value = "";
  amountInput.value = "";
} // end withdraw.onclick = function
