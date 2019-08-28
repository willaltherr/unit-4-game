// Pick a random number between 19-120 and have it show up on screen.

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// New Random Answer
var randAnswer = randNumber(19, 120);

// New Random Numbers for Crystals
var randCrystalOne = randNumber(1, 12);
var randCrystalTwo = randNumber(1, 12);
var randCrystalThree = randNumber(1, 12);
var randCrystalFour = randNumber(1, 12);

console.log("Answer is: " + randAnswer);
console.log("Crystal 1 is: " + randCrystalOne);
console.log("Crystal 2 is: " + randCrystalTwo);
console.log("Crystal 3 is: " + randCrystalThree);
console.log("Crystal 4 is: " + randCrystalFour);

// Get Answer to Appear using JQuery
$( ".answer" ).text(randAnswer);

// Additional Global Variables
var wins = 0;
var loss = 0;
var score = 0;

// Get Wins & Losses to Appear
$( ".wins" ).text(wins);
$( ".loss" ).text(loss);
$( ".score" ).text(score);




