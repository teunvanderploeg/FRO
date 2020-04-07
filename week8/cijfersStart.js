function Opdracht(vak, beschrijving) {
  let opdrObj = this;

  opdrObj.vak = vak;
  opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
function Cijfer(vak, cijfer) {
  if (cijfer > 0 && cijfer < 10) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.cijfer = cijfer;
  } else {
    console.log(cijfer);
    console.log("is niet tussen de 0 en de 10");
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

let cijfer1 = new Cijfer("bap", 8);
let cijfer2 = new Cijfer("proj", 7);
let cijfer3 = new Cijfer("ned", 6);

console.log(cijfer1);
console.log(cijfer2);
console.log(cijfer3);

console.log(opdracht1);
console.log(opdracht2);
console.log(opdracht3);

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
let cijfers = [];

opdrachten.push(opdracht1);
opdrachten.push(opdracht2);
opdrachten.push(opdracht3);

cijfers.push(cijfer1);
cijfers.push(cijfer2);
cijfers.push(cijfer3);

function Periode(opdrachten, cijfers) {
  let periodeObj = this;

  periodeObj.opdrachten = opdrachten;
  periodeObj.cijfers = cijfers;
}

let periode = new Periode(opdrachten, cijfers);

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
