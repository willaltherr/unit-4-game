// Pseudo Coding

// Each crystal needs a ranom number between 1-12

// New Random number that we have to target between 19-120

// Any crystal that gets click should add to the total results

// Tally the wins and losses

// If the results equal, win by 1 increment

// If the result goes over the Random target number, lose by 1 increment

// Start over once you either win or lose


var randNumbers;
var wins = 0;
var losses = 0;


for (var i = 0; i < 4; i++) {
  
  var random = Math.floor(Math.random() * 12);
  console.log(random);

  var crystalRocks = $("<div>");
      crystalRocks.attr({
        "class": 'crystalRocks',
        "image-random": random
      });
  $(".crystalImages").append(crystalRocks);

}