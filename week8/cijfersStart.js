function Opdracht(vak, beschrijving) {
  let opdrObj = this;

  opdrObj.vak = vak;
  opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
function Cijfer(vak, cijfer) {
  if (cijfer >= 0 && cijfer <= 10) {
    let opdrObj = this;

    opdrObj.cijfer = cijfer;
    opdrObj.vak = vak;
  } else {
    console.log(cijfer);
    console.log("is niet tussen de 0 en de 10");
    opdrObj.cijfer = 0;
  }
}

// function Cijfer(opdracht, cijfer) {}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
// Minimaal 3 opdrachten voor 3 verschillende vakken.
// Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

let opdracht1 = new Opdracht("bap", "Back and programing");
let opdracht2 = new Opdracht("proj", "Project");
let opdracht3 = new Opdracht("ned", "Nederlands");
let opdracht4 = new Opdracht("fro", "Front and programing");
let opdracht5 = new Opdracht("slb", "SLB");
let opdracht6 = new Opdracht("k-id", "K-ID");
let opdracht7 = new Opdracht("eng", "Engels");
let opdracht8 = new Opdracht("rek", "Rekenen");
let opdracht9 = new Opdracht("bur", "Burger schap");

let cijfer1 = new Cijfer("bap", 8);
let cijfer2 = new Cijfer("proj", 7);
let cijfer3 = new Cijfer("ned", 6);
let cijfer4 = new Cijfer("fro", 7);
let cijfer5 = new Cijfer("slb", 8);
let cijfer6 = new Cijfer("k-id", 8);
let cijfer7 = new Cijfer("eng", 7);
let cijfer8 = new Cijfer("rek", 6);
let cijfer9 = new Cijfer("bur", 7);
// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!

let opdrachten = [];
let cijfers = [];

opdrachten.push(opdracht1);
opdrachten.push(opdracht2);
opdrachten.push(opdracht3);
opdrachten.push(opdracht4);
opdrachten.push(opdracht5);
opdrachten.push(opdracht6);
opdrachten.push(opdracht7);
opdrachten.push(opdracht8);
opdrachten.push(opdracht9);
cijfers.push(cijfer1);
cijfers.push(cijfer2);
cijfers.push(cijfer3);
cijfers.push(cijfer4);
cijfers.push(cijfer5);
cijfers.push(cijfer6);
cijfers.push(cijfer7);
cijfers.push(cijfer8);
cijfers.push(cijfer9);

function Periode(opdrachten, cijfers) {
  let periodeObj = this;

  periodeObj.opdrachten = opdrachten;
  periodeObj.cijfers = cijfers;
}

let periode = new Periode(opdrachten, cijfers);
console.log(periode);

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

function createJSON() {
  let id = document.getElementById("json");
  let applicationData =
    "application/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(periode));

  let json = document.createElement("a");
  json.href = "data:" + applicationData;
  json.download = "json.json";
  json.innerHTML = "Ready to download your json file";

  id.appendChild(json);
}

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
