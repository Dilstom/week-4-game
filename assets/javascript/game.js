$(document).ready(function() {
var wins = 0;
var losses = 0;
var newScore = 0;
// generate random number x = 19, y = 120   
function computerChoice(x, y) { 
    return Math.floor(Math.random() * ((y-x)+1) + x);
}
var computerPick = computerChoice(19,120);
$("#computerGuess").text(computerPick);

gem1 = computerChoice(1,12);
gem2 = computerChoice(1,12);
gem3 = computerChoice(1,12);
gem4 = computerChoice(1,12);

//console.log('TESTING crystal choice', crystalChoice(1, 12))

//     $(".scoreBoard").text(crystalPick);
 $("#crystal1").on("click", function(event){
crystalClick(gem1);
})
     $("#crystal2").on("click", function(event){
crystalClick(gem2);
})
$("#crystal3").on("click", function(event){
    crystalClick(gem3);
});
$("#crystal4").on("click", function(event){
    crystalClick(gem4);
});
function reset() {
    computerPick = computerChoice(19,120);
     $("#computerGuess").text(computerPick);
    gem1 = computerChoice(1,12);
    gem2 = computerChoice(1,12);
    gem3 = computerChoice(1,12);
    gem4 = computerChoice(1,12);

  newScore = 0;
  $("#totalScore").text(newScore);
}
    
function crystalClick(gemNumber) {
        console.log(event.target)

//        console.log('C SCORE: ', crystalScore)

    var currentScore = parseInt($("#totalScore").text());
    console.log('Current : ', currentScore);

    var newScore = currentScore + gemNumber;
    console.log('new Score : ', newScore);

    $("#totalScore").text(newScore);

    if(newScore === computerPick) {
        wins++
        $("#wins").text(wins);
        reset();
    } else if(newScore > computerPick) {
        losses++
        $("#losses").text(losses);
        reset();
    }
}


});
