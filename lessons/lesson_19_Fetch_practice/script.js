//https://fakestoreapi.com/docs

// ! fetch запит на then
// fetch("https://fakestoreapi.com/products")
//  .then(res => res.json())
//  .then(data => {
//     // всі операції з даними сервера будуть в середині другого then
//     data.map(element => {

//     //    const h3 =  document.createElement("h3");
//     //     h3.innerHTML = element.title
//     //     document.body.append(h3)

//         const item = document.createElement("p");
//         item.textContent = element.title;
//         document.body.append(item)

//     })

//  });

// ! fetch запит на asynk / await

//альтернативний популярний спосіб обробки асинхронних запитів в javaScript
// візуально виглядає інакше, але пряцює так само як і then
// async  (params) => {
//     const res = await fetch("https://fakestoreapi.com/products")
//  const data = await res.json();
//  console.log(data)
// }

//ключове слово async, перед об'явленням функції
// в асинхронних функціях зберігається порядок виконання коду для синхронних і асинхронних дій
async function fetchProducts() {
  // перед будь-якою асинхронною дією пишеться ключове слово await;
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  data.map((product) => {
    // сворюємо картку з даними
    const card = document.createElement("div");
    card.className = "product-card"; // метод .className заміняє всі існуючі класи об'єкту на     вказаний клас
    card.classList.add("primary"); // метод .classList.add додає клас до вже існючих

    // сворюємо заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title;

    // сворюємо картинку
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    //створюємо обгортку для картинки(не обов'язково) і додаємо картинку

    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);

    // сворюємо опис товару
    const desc = document.createElement("p");
    // desc.textContent = product.description;

    //обрізаємо довгий текст до фіксованої кількості символів (не обов'язково)
    let descText = product.description;
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + "...";
    } else {
      desc.textContent = product.description;
    }

    // додаємо ціну товару
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}$`;

    // порядок в дужках - це порядок додавання в контейнер
    //card.append(heading, price, img, desc)
    card.append(heading, price, wrapper, desc);

    const gridProducts = document.getElementById("grid-products");
    gridProducts.append(card);

    console.log(card);
  });
} //end async function fetchProducts()

// не забувати викликати функції

fetchProducts();

// СТРІЛКОВІ ФУНКЦІЇ НЕ МОЖУТЬ БУТИ ВИКОРИСТАНІ ДО ІНІЦІАЛІЗАЦІЇ, тому що ім'я функції кладеться в константу
//приклад іменної стрілкової асинхронної функції
// const fetchProducts = async () => {
//     // перед будь-якою асинхронною дією пишеться ключове слово await;
//  const res = await fetch("https://fakestoreapi.com/products")
//  const data = await res.json();
//  console.log(data)
// }


// ! Ще один запит даних

// fetch ("https://fakestoreapi.com/products?limit=2")
// .then(res => res.json)
// .then(data => {

//     console.log(data)
// })

async function geAsyncProducts(){
    const res = await fetch("https://fakestoreapi.com/products?limit=2")
    const data = await res.json()
    console.log(data)
}

geAsyncProducts();