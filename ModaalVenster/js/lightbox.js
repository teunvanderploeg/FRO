const alleInfo = document.querySelectorAll(".info");
const alleBlijvend = document.querySelectorAll(".blijvend");

let alleInhoud = [];

for (let i = 0; i < alleInfo.length; i++) {
  alleInhoud.push(alleInfo[i]);
  alleInfo[i].remove();
}

function verwijderModaal() {
  document.getElementById("modaal").remove();
}

function maakModaal(num) {
  console.log(alleInhoud[num]);
  let modaal = document.createElement("div");
  modaal.className = "modaal";
  modaal.id = "modaal";
  modaal.addEventListener("click", verwijderModaal);

  //sluitknop
  let sluitknop = document.createElement("i");
  sluitknop.className = "fas fa-skull-crossbones sluit-knop"; //doodshooft sluitknop
  sluitknop.addEventListener("click", verwijderModaal);

  let modaalInhoud = document.createElement("div");
  modaalInhoud.className = "modaalInhoud";
  modaalInhoud.innerHTML = alleInhoud[num].innerHTML;
  modaalInhoud.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  // gsap.to(modaalInhoud, {
  //   maringTop: 0,
  //   duration: 1,
  //   ease: "elastic.out(1, 0,3)"
  // });

  modaalInhoud.prepend(sluitknop);

  modaal.append(modaalInhoud);

  document.body.append(modaal);
}

for (let i = 0; i < alleBlijvend.length; i++) {
  alleBlijvend[i].addEventListener("click", function() {
    maakModaal(i);
  });
}
