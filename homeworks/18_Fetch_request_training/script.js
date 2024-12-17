


 fetch("https://rickandmortyapi.com/api/character")

 .then(res => res.json())
 

 .then(data => {
console.log(data)
   
   let newArray =  data.results.map( element => {

    console.log(element)

    let place = document.querySelector("#grid-container");


    const gridElement = document.createElement("div");
    gridElement.id = "grid-item";


    const gridElementPicture = document.createElement("div");
    gridElementPicture.id = "grid-item-picture";

    const gridElementPictureImage = document.createElement("img");
    gridElementPictureImage.height = "250";
    gridElementPictureImage.className = "hero";
    gridElementPictureImage.id = "hero";
    gridElementPictureImage.alt = "Hero";

    gridElementPictureImage.src = element.image;
    

    const gridElementText = document.createElement("div");
    gridElementText.id = "grid-item-text";
    
    const hName= document.createElement("h3");
    hName.id = "hero-name";

    const hStatus= document.createElement("h3");
    hStatus.id = "hero-status";

    const hOrigin= document.createElement("h3");
    hOrigin.id = "hero-origin";


    hName.innerHTML =  `Name: ${element.name}`;
    hStatus.innerHTML =   `Status: ${element.status}`
    hOrigin.innerHTML =   `Origin: ${element.origin.name}`;
    
   
    gridElementPicture.append(gridElementPictureImage);
    gridElementText.append(hName, hStatus, hOrigin)
    
    gridElement.append(gridElementPicture, gridElementText)

    place.appendChild(gridElement)
   
   })

})


