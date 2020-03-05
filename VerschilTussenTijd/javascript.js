const tijdeen = document.getElementById("tijd1");
const buttonSS = document.getElementById("buttonSS");
const lijstje = document.getElementById("lijstje");

buttonSS.addEventListener("click", start); //dit zorgt er voor dat je op de knop kan kiliken en er iet gebeurt

buttonSS.removeEventListener("click", stop); //dit zorgt dat je niet op de knop kan kliken

function start() {
  buttonSS.removeEventListener("click", start);
  buttonSS.addEventListener("click", stop); //nu kan je op de stop knop durken
  buttonSS.innerHTML = "stop";
  tijdeen.innerHTML = "";
  let d1 = new Date(); //de datum van nu

  return d1;
}

let tijd = start();
// dit moet anders want nu doet hij dit maar een keer en het moet elke keer geberuen als je op start drukt

function stop() {
  buttonSS.addEventListener("click", start); //dit zorgt er voor dat je op de knop kan kiliken en er iet gebeurt
  buttonSS.removeEventListener("click", stop); //dit zorgt dat je niet op de knop kan kliken
  let d2 = new Date(); //de datum van nu
  const seconde = 1000; // hier door moet je het delen om secondes te krijgen
  tijdeen.innerHTML =
    Math.ceil((d2.getTime() - tijd.getTime()) / seconde) + " seconde";
  buttonSS.innerHTML = "start";
}
