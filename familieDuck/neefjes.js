// alle plaatjes van de duckfamilie in een array
const plaatjes = document.querySelectorAll(".duck img");
const bolletjes = document.getElementById("bolletjes");

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName("info")[0].style.height =
  document.getElementsByClassName("duck")[0].clientHeight + "px";

for (let i = 0; i < plaatjes.length; i++) {
  plaatjes[i].addEventListener("mouseenter", vulKopAan);
  plaatjes[i].addEventListener("mouseleave", resetKop);
  plaatjes[i].addEventListener("click", click);
  plaatjes[i].addEventListener("dblclick", dblclick);
}

function vulKopAan() {
  document.getElementById("duck").innerText = ": " + this.title;
  document.getElementById("kop").style.color = this.dataset.kleur;
}

function resetKop() {
  document.getElementById("duck").innerText = "";
  document.getElementById("kop").style.color = "red";
}

function click() {
  document.getElementById("titel").innerText = this.title;
  document.getElementById("titel").style.color = this.dataset.kleur;

  document.getElementById("informatie").innerText = this.dataset.info;

  document.getElementById("info").style.border =
    "5px solid " + this.dataset.kleur;
  this.style.border = "5px solid " + this.dataset.kleur;
}

function dblclick() {
  this.dataset.clicks++;
  this.nextSibling.nextSibling.innerText = this.dataset.clicks;

  let divbol = document.createElement("DIV");
  divbol.setAttribute("id", "bolletje");
  divbol.style.backgroundColor = this.dataset.kleur;
  document.getElementById("bolletjes").appendChild(divbol);
}

/*  
    Maak een functie, die aangeroepen wordt door een klik op de afbeelding.
    Deze moet om de geklikte afbeelding een rand maken met de kleur, die 
    te vinden is in het data-kleur attribuut.
    Het element.dataset.eigenschap heb je van een element de waarde van 'data-eigenschap'

    Bovendien moet de sectie info gevuld worden: zowel de kop h3#titel als de p#info.
    De inhoud staat in de het alt-attribuut als een ander data-attribuut van de afbeelding.
    
    */

/** 
    Maak noeg een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks, 
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit 
    data-kleur toegevoegd worden aan het element div#bolletjes
*/
