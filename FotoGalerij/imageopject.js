let objectArray = [];

function ImageObject(name, discription) {
  let imgObj = this;
  imgObj.name = name;
  imgObj.discription = discription;
  console.log(name);
}

function createObjects() {
  for (let counter = 0; counter < PlaatsVanFotos.length; counter++) {
    objectArray.push(
      new ImageObject(PlaatsVanFotos[counter], AltsVanFotos[counter])
    );
  }
}

function PlaatsDeFoto(obj) {
  let item = document.createElement("div");
  item.className = "item";
  let plaatje = document.createElement("img");
  plaatje.src = obj.name; //geeft een url of het pat naar de foto aan
  plaatje.alt = obj.discription; //geeft de alt van de foto
  plaatje.title = obj.discription;
  plaatje.className = "plaatje";
  console.log(obj.imgObj);
  item.append(plaatje);
  container.append(item);
}

function showRandomImages() {
  for (let i = objectArray.length; i > 0; i--) {
    let randomgetal = Math.floor(Math.random() * objectArray.length);

    PlaatsDeFoto(objectArray[randomgetal]);

    objectArray.splice(randomgetal, 1);
  }
}
createObjects();
showRandomImages();
