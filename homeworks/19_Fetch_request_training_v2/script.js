


fetch('//dummyjson.com/products')
.then(res => res.json())

.then(data => {
    console.log(data)

    console.log(data.products)
    data.products.map ( element => {

    // console.log(element.title)
    let productName = element.title;
    // console.log(element.description)
    let productDescription = element.description;
    // console.log(element.price)
    let productPrice = `${element.price}$`
    // console.log(element.images[0]);
    let image = element.images[0];


    let place = document.querySelector("#grid-container");


        const gridElement = document.createElement("div");
        gridElement.id = "grid-item";
    
    
        const gridElementPicture = document.createElement("div");
        gridElementPicture.id = "grid-item-picture";
    
        const gridElementPictureImage = document.createElement("img");
        gridElementPictureImage.height = "250";
        gridElementPictureImage.className = "product";
        gridElementPictureImage.id = "product";
        gridElementPictureImage.alt = element.title;
    
        gridElementPictureImage.src = image;
        
    
        const gridElementText = document.createElement("div");
        gridElementText.id = "grid-item-text";
        gridElementText.style.height = "320px"
        
        const hName = document.createElement("h3");
        hName.id = "product-name";
    
        const hDescription = document.createElement("h3");
        hDescription.id = "product-description";
    
        const hPrice = document.createElement("h3");
        hPrice.id = "product-price";
    
    
        hName.innerHTML =  productName;
        hDescription.innerHTML =   productDescription;
        hPrice.innerHTML =  productPrice;
        

        const wrapper = document.createElement("div");
        wrapper.className = "img-wrapper";
         wrapper.append(gridElementPictureImage);
         gridElementPicture.append(wrapper);
       
        
        // gridElementPicture.append(gridElementPictureImage);
        gridElementText.append(hName, hDescription, hPrice)
        
        gridElement.append(gridElementText, gridElementPicture)
    
        place.appendChild(gridElement)


    })
    
    
    
    
    


});








// fetch("https://dummyjson.com/products")

//  .then(res => res.json())
// //  console.log(res)

//  .then(data => {

   
//    let newArray =  data.results.map( element => {

//     console.log(element)

//     let place = document.querySelector("#grid-container");


//     const gridElement = document.createElement("div");
//     gridElement.id = "grid-item";


//     const gridElementPicture = document.createElement("div");
//     gridElementPicture.id = "grid-item-picture";

//     const gridElementPictureImage = document.createElement("img");
//     gridElementPictureImage.height = "250";
//     gridElementPictureImage.className = "hero";
//     gridElementPictureImage.id = "hero";
//     gridElementPictureImage.alt = "Hero";

//     gridElementPictureImage.src = element.image;
    

//     const gridElementText = document.createElement("div");
//     gridElementText.id = "grid-item-text";
    
//     const hName= document.createElement("h3");
//     hName.id = "hero-name";

//     const hStatus= document.createElement("h3");
//     hStatus.id = "hero-status";

//     const hOrigin= document.createElement("h3");
//     hOrigin.id = "hero-origin";


//     hName.innerHTML =  `Name: ${element.name}`;
//     hStatus.innerHTML =   `Status: ${element.status}`
//     hOrigin.innerHTML =   `Origin: ${element.origin.name}`;
    
   
//     gridElementPicture.append(gridElementPictureImage);
//     gridElementText.append(hName, hStatus, hOrigin)
    
//     gridElement.append(gridElementPicture, gridElementText)

//     place.appendChild(gridElement)
   
//    })

// })
