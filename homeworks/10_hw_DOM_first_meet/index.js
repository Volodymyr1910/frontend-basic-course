// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.className = "second-btn"
btn.addEventListener('click', () => {
    // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.style.backgroundColor = " #a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.innerText = "Я изменю тебя";
  document.body.append(clonedBtn);
})

/* По клику на кнопку Нажми на меня, добавьте новую кнопку с id="magic-btn-2" и с текстом "Я изменю тебя" со стилями:
 background-color:  #a78b71; ( * в js будет backgroundСolor * )
color: white;
 Поменяйте стили кнопки magic-btn по клику на кнопку "Я изменю тебя" на:
 цвет фона на #9c4a1a;
 цвет текста на черный;*/

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener("click", () => {
    btn.style.backgroundColor = "#9c4a1a";
btn.style.color = "black";
clonedBtn.innerText = "I have changed you ! 😁"
clonedBtn.id = "text";
})