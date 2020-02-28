const alleInfo = document.querySelectorAll(".info");
const alleBlijvend = document.querySelectorAll(".blijvend");

let alleInhoud = [];

for (let i = 0; i < alleInfo.length; i++) {
  alleInhoud.push(alleInfo[i]);
  alleInfo[i].remove();
}

function maakModaal(num) {
  console.log(alleInhoud[num]);
}

for (let i = 0; i < alleBlijvend.length; i++) {
  alleBlijvend[i].addEventListener("click", function() {
    maakModaal(i);
  });
}
