//dit zijn verschilende url/pat's voor de fotos
const PlaatsVanFotos = [
  "fotos/BlouweVlinderInHetBos.jpg",
  "fotos/BoomenVanOnder.jpg",
  "fotos/BoomStamMetVeelMos.jpg",
  "fotos/BosMetLuchtGroen.jpg",
  "fotos/BosMetOverHangendeTak.jpg",
  "fotos/BosMetPatMetVeelSteenen.jpg",
  "fotos/DonkerBosMetMeer.jpg",
  "fotos/GoudBosMetMist.jpg",
  "fotos/GroenBosMetLicht.jpg",
  "fotos/GrootBosPatMetLicht.jpg",
  "fotos/GrooteBoomInHetGroen.jpg",
  "fotos/HerfstBosMetPat.jpg",
  "fotos/HutjeAanHetWaterInHetBos.jpg",
  "fotos/MeerMetGroenBos.jpg",
  "fotos/PatMetVeelBlad.jpg",
  "fotos/StroomWaterMetBoom.jpg",
  "fotos/TrapMetMos.jpg",
  "fotos/VlamentBosMetSteen.jpg",
  "fotos/WegMetBomenAanDeZijkant.jpg",
  "fotos/WegMetHogenBomenEnMist.jpg"
];

//dit zijn de verschilende alts voor de fotos
const AltsVanFotos = [
  "BlouweVlinderInHetBos",
  "BoomenVanOnder",
  "BoomStamMetVeelMos",
  "BosMetLuchtGroen",
  "BosMetOverHangendeTak",
  "BosMetPatMetVeelSteenen",
  "DonkerBosMetMeer",
  "GoudBosMetMist",
  "GroenBosMetLicht",
  "GrootBosPatMetLicht",
  "GrooteBoomInHetGroen",
  "HerfstBosMetPat",
  "HutjeAanHetWaterInHetBos",
  "MeerMetGroenBos",
  "PatMetVeelBlad",
  "StroomWaterMetBoom",
  "TrapMetMos",
  "VlamentBosMetSteen",
  "WegMetBomenAanDeZijkant",
  "WegMetHogenBomenEnMist"
];

const container = document.getElementById("container");

function PlaatsDeFoto(url, alt) {
  let item = document.createElement("div");
  item.className = "item";
  let plaatje = document.createElement("img");
  plaatje.src = url; //geeft een url of het pat naar de foto aan
  plaatje.alt = alt; //geeft de alt van de foto
  plaatje.className = "plaatje";
  item.append(plaatje);
  container.append(item);
}

for (let i = PlaatsVanFotos.length; i > 0; i--) {
  let randomgetal = Math.floor(Math.random() * PlaatsVanFotos.length);

  PlaatsDeFoto(PlaatsVanFotos[randomgetal], AltsVanFotos[randomgetal]);
  PlaatsVanFotos.splice(randomgetal, 1);
  AltsVanFotos.splice(randomgetal, 1);
}
