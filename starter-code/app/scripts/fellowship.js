console.log("Linked.");

// Dramatis Personae
//Does this work

var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middle_earth = document.createElement('section');
  middle_earth.setAttribute('id', 'middle-earth');
  for (var i = 0; i<lands.length; i++){
    var land = document.createElement('article');
    var heading = document.createElement('h1');
    heading.textContent = lands[i];
    land.appendChild(heading);
    middle_earth.appendChild(land);
  }
document.body.appendChild(middle_earth);
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();
  
// Part 2

function makeHobbits() {
var shire = document.querySelector('article');
var hobbitList = document.createElement("ul");
hobbitList.setAttribute('class','hobbit');
  for (var i = 0; i<hobbits.length; i++){
    var smallThings = document.createElement("li");
    smallThings.textContent = hobbits[i];
    hobbitList.appendChild(smallThings);
}
shire.appendChild(hobbitList);
}
makeHobbits();
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit
// Part 3

//var frodo = hobbits[0]; why doesn't this way work?
var frodo = document.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  var ringNoise = document.createElement('div');
  ringNoise.setAttribute('id', 'the-ring');
  ringNoise.setAttribute('class', 'magic-imbued-jewelry');
  ringNoise.addEventListener("click", nazgulScreech);
  frodo.appendChild(ringNoise);
}
keepItSecretKeepItSafe();
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked;
  // add the ring as a child of Frodo


// Part 4

var rivendell = document.querySelectorAll('article')[1];
function makeBuddies() {
  var friends = document.createElement('aside');
  var buddiesList = document.createElement('ul');
  for (var i = 0; i<buddies.length; i++){
    var eachBuddy= document.createElement("li");
     eachBuddy.textContent = buddies[i];
     buddiesList.appendChild(eachBuddy);
}
  friends.appendChild(buddiesList);
  rivendell.appendChild(friends);
}

makeBuddies();
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

// Part 5


function beautifulStranger() {
  var findStrider = document.querySelectorAll('aside ul li');
  
  findStrider[3].textContent = "Aragorn";
  //var addAragorn = buddies.splice(3,1, "aragorn"
  //var addAragorn = buddies.splice(3,1, "aragorn")
   // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
