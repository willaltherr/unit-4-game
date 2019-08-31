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
var counter = 0;

var startOver = function () {

    $(".crystalImages").empty();

    var images = [
      "https://www.holywellswimmingclub.co.uk/wp-content/uploads/2017/03/crystal-2.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81s0ngKC0AL._SL1500_.jpg",
      "https://ae01.alicdn.com/kf/HTB1qMDtdGQoBKNjSZJnq6yw9VXaS/145g-natural-red-quarzo-cluster-beautiful-red-aura-angelo-di-cristallo-cluster-rivestimento-In-Titanio-cluster.jpg_640x640.jpg",
      "https://thumbs.dreamstime.com/b/purple-ice-crystal-vector-illustration-white-background-111181395.jpg"
    ];

    randNumbers = Math.floor(Math.random() * 101 ) + 19;
    // console.log(randNumbers);

  $("#targetScore").html('Target Score = ' + randNumbers);

  for (var i = 0; i < 4; i++) {
    
    var random = Math.floor(Math.random() * 12) + 1;
    // console.log(random);


    var crystalRocks = $("<div>");
        crystalRocks.attr({
          "class": 'crystalRocks',
          "image-random": random
        });

        crystalRocks.css({
          "background-image":"url('" + images[i] + "')",
          "background-size":"cover"
        });

    $(".crystalImages").append(crystalRocks);

  }
}

startOver();

$(document).on('click', ".crystalRocks", function () {

  var number = parseInt($(this).attr('image-random'));

  counter += number

  $("#counter").html("Your Score = " + counter)

  if (counter > randNumbers) {
    losses ++;

    $("#losses").html("Losses: " + losses);
    counter = 0;
    $("#counter").html("Your Score = " + counter)
    startOver();
  }

  else if (counter === randNumbers) {
    wins ++;

    $("#wins").html("Wins: " + wins);
    counter = 0;
    $("#counter").html("Your Score = " + counter)
    startOver();
  }

  // console.log(counter);
  
});