// Onderstaande functies zijn de callBack functies voor de
// createGetRequest functie

function cityOfChicago(json) {
  console.log(json);
}

function covid19(json) {
  console.log(json);
  let covidconfirmed = json.confirmed;
  document.getElementById("covid").innerHTML = covidconfirmed;

  let coviddate = json.date;
  document.getElementById("covid1").innerHTML = coviddate;

  let coviddeaths = json.deaths;
  document.getElementById("covid2").innerHTML = coviddeaths;

  let covidrecovered = json.recovered;
  document.getElementById("covid3").innerHTML = covidrecovered;
}

var url = "https://data.cityofchicago.org/resource/f7f2-ggz5.json?";
createGetRequest(url, cityOfChicago);

// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft

var url = "https://covid-19api.com/api/all-today";
createGetRequest(url, covid19);

// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft
