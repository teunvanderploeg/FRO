let fruit1 = document.getElementById("fruit1");
let fruit2 = document.getElementById("fruit2");
let fruit3 = document.getElementById("fruit3");
let punt = document.getElementById("punt");
let probeerd = document.getElementById("probeerd");

var punten = 0;
var aantalkeergespeeld = 0;

let fruit = ["&#127822", "&#127820", "&#127827", "&#127817"];

random_fruit();

function random_fruit() {
  var random1 = fruit[Math.floor(Math.random() * fruit.length)];
  fruit1.innerHTML = random1;

  var random2 = fruit[Math.floor(Math.random() * fruit.length)];
  fruit2.innerHTML = random2;

  var random3 = fruit[Math.floor(Math.random() * fruit.length)];
  fruit3.innerHTML = random3;

  aantalkeergespeeld++;
  probeerd.innerHTML = "Probeerd: " + aantalkeergespeeld;

  if (aantalkeergespeeld == 50) {
    fruit.push("&#127826");
  } else if (aantalkeergespeeld == 100) {
    fruit.push("&#127821");
  }

  if (aantalkeergespeeld == 200 && punten < 5) {
    fruit.pop();
  } else if (aantalkeergespeeld == 400 && punten < 10) {
    fruit.pop();
  }
  if (fruit.length == 4 && aantalkeergespeeld == 500) {
    fruit.push("&#127821");
    fruit.push("&#127826");
  }

  if (random1 == random2 && random1 == random3) {
    punten++;
    punt.innerHTML = "Punten: " + punten;
    if (punten > 10000) {
      punt.innerHTML = "Punten: " + punten + ". Jij cheater";
    }
  }
}
