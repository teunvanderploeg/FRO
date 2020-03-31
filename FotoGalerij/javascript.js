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

let backgroundcolor = "green";

localStorage.setItem("backgroundColor", backgroundcolor);

let achtergrondkleur = localStorage.getItem("backgroundColor");
