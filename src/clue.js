// ITERATION 1

// Suspects Array

const suspectsArray = [
  { firstName: "Jacob", lastName: "Green", occupation: "Entrepeneur", age: 45, description: "He has a lot of connections", image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", color: "green" },
  { firstName: "Doctor", lastName: "Orchid", occupation: "Scientist", age: 26, description: "Phd in plant toxicology. Adopted daughter of Mr. Boddy", image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "white" },
  { firstName: "Victor", lastName: "Plum", occupation: "Designer", age: 22, description: "Billionaire video game designer", image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", color: "purple" },
  { firstName: "Kasandra", lastName: "Scarlet", occupation: "actor", age: 31, description: "She is an A List movie star with a dark past", image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "red" },
  { firstName: "Eleanor", lastName: "Peacock", occupation: "Socialite", age: 36, description: "She is from a wealthy family and uses her status and money to earn popularity", image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", color: "blue" },
  { firstName: "Jack", lastName: "Mustart", occupation: "Retired football player", age: 62, description: "He is a former football player who tries to get by on his former glory", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", color: "yellow" },
];

// Rooms Array

const roomsArray = [
  {name: "Dining Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "library"},
  {name: "Billiard room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "hall"},
  {name: "Spa"},
  {name: "Living room"},
  {name: "observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"},
];

// Weapons Array

const weaponsArray = [
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell", weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20},
];


// ITERATION 2

function selectRandom(element) {
  let random = element[Math.floor(Math.random() * element.length)];
  return random;
}



/* 

suspectsArray.firstName.forEach(function (song) {
  console.log(Object.values(song));
});
*/


  function pickMystery() {
    let myMystery = {};
    let mysterySuspect = selectRandom(suspectsArray);
    let mysteryWeapon = selectRandom(weaponsArray);
    let mysteryRoom = selectRandom(roomsArray);
    myMystery.suspect = mysterySuspect;
    myMystery.weapon = mysteryWeapon;
    myMystery.room = mysteryRoom;
    return myMystery;
}
  


// ITERATION 3

function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
