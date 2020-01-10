let text = document.getElementById("text");
let pasta = [
  " Spaghetti met ham en kaas ",
  " Macaroni met ham en kaas ",
  " Tagliatelli met ham en kaas ",
  " Spaghetti met spinazie en room ",
  " Macaroni met spinazie en room ",
  " Tagliatelli met spinazie en room ",
  " Spaghetti met gehakt-tomatensaus en kaas ",
  " Macaroni met gehakt-tomatensaus en kaas ",
  " Tagliatelli met gehakt-tomatensaus en kaas ",
  " Spaghetti met spekjes, spinazie en room ",
  " Macaroni met spekjes, spinazie en room ",
  " Tagliatelli met spekjes, spinazie en room ",
  " Spaghetti met courgette en tomatensaus ",
  " Macaroni met courgette en tomatensaus ",
  " Tagliatelli met courgette en tomatensaus ",
  " Lasagne met courgette en tomatensaus ",
  " Lasagne met room, doperwten en tomatensaus ",
  " Lasagne met spinazie en tomatensaus en kaas "
];

showPasta(17);

meerderePastas(0, 18);

function showPasta(num) {
  text.innerHTML += pasta[num] + "<br>" + "<br>";

  for (i = 0; i < pasta.length; i++) {
    text.innerHTML += pasta[i] + "<br>";
  }
}

let jougerecht = eenPasta(5);
text.innerHTML += "<br>" + "<br>" + jougerecht;

function eenPasta(nummer) {
  return "dit is jou gerecht: " + pasta[nummer];
}

function meerderePastas(begen, tot) {
  text.innerHTML += "<br>";

  for (i = begen; i < tot; i++) {
    text.innerHTML += pasta[i] + "<br>";
  }
}
