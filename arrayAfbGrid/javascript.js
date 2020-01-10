document.write("<img src='' alt='kerstafbeelding1' id='afb1' />");
document.write("<img src='' alt='kerstafbeelding2' id='afb0' />");
document.write("<img src='' alt='kerstafbeelding3' id='afb3' />");
document.write("<img src='' alt='kerstafbeelding4' id='afb4' />");
document.write("<img src='' alt='kerstafbeelding5' id='afb5' />");
document.write("<img src='' alt='kerstafbeelding6' id='afb6' />");
document.write("<img src='' alt='kerstafbeelding7' id='afb7' />");
document.write("<img src='' alt='kerstafbeelding8' id='afb2' />");
document.write("<img src='' alt='kerstafbeelding9' id='afb9' />");
document.write("<img src='' alt='kerstafbeelding10' id='afb8' />");

let afb_1 = document.getElementById("afb1");
let afb_2 = document.getElementById("afb2");
let afb_3 = document.getElementById("afb3");
let afb_4 = document.getElementById("afb4");
let afb_5 = document.getElementById("afb5");
let afb_6 = document.getElementById("afb6");
let afb_7 = document.getElementById("afb7");
let afb_8 = document.getElementById("afb8");
let afb_9 = document.getElementById("afb9");
let afb_0 = document.getElementById("afb0");
let con = document.getElementById("contener");

let plaatjes = [
  "boom3.jpg",
  "boom1.jpg",
  "boom2.jpg",
  "boom4.jpg",
  "bord.jpg",
  "kaars.jpg",
  "donker.jpg",
  "dorp.jpg",
  "poesje.jpg",
  "boom5.jpg"
];
let vakjes = [
  afb_1,
  afb_2,
  afb_3,
  afb_4,
  afb_5,
  afb_6,
  afb_7,
  afb_8,
  afb_9,
  afb_0
];

for (i = 0; i < plaatjes.length; i++) {
  vakjes[i].src = "plaatjes/" + plaatjes[i];
}
