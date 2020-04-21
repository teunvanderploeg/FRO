let results = [];
let item,
  coordinates,
  address,
  id,
  email,
  street,
  timezone,
  gender,
  login,
  dob,
  registered,
  phone,
  cell,
  picture,
  nat = {};

function users(items) {
  for (let count = 0; count < items.length; count++) {
    item = new Name(items[count].name);
    coordinates = new Coordinates(items[count].location.coordinates);
    address = new Address(items[count].location);
    email = new Email(items[count].email);
    street = new Street(items[count].location);
    id = new Id(items[count].id);
    login = new Login(items[count].login);
    dob = new Dob(items[count].dob);
    registered = new Registered(items[count].registered);
    phone = new Phone(items[count].phone);
    cell = new Cell(items[count].cell);
    picture = new Picture(items[count].picture);
    nat = new Nat(items[count].nat);
  }
  console.table(item);
  console.table(coordinates);
  console.table(address.street);

  // TODO:    Zorg ervoor dat de volgende statements resultaat gaan opleveren
  //          Hiervoor moet je de functie showAddress() afmaken en de constructors voor de
  //          objecten id, email, street en adrress aanmaken.
  address.showAddress();
  console.table(id);
  console.table(email);
  console.table(street);
  console.table(address);

  console.table(login);
  console.table(dob);
  console.table(phone);
  console.table(nat);
  console.table(registered);
  console.table(cell);
  console.table(picture);
}

function createGetRequest(url, callBack) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      callBack(response);
    }
  };

  request.open("GET", url, true);

  request.send();
}

function randomUser(json) {
  results = json.results.slice();
  users(results);
}

var url = "https://randomuser.me/api/?results=1";
createGetRequest(url, randomUser);
// TODO:    check de xhr tab en waarschuwingen tab
//          De xhr tab heeft subtabs, check deze allemaal
//          In deze subtabs staat veel informatie voor je
//          als je call bijvoorbeeld geen antwoord heeft
