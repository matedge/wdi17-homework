// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user
//  if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var reward = 0;
var lettersFinal = ['F','O','X'];
var lettersGuessed = [];

var guessLetter = function(letter) {
  // This makes sure the letter that gets passed in is always upper case.
  var upperLetter = letter.toUpperCase();

  // This checks if the letter is in the string ( 0 index means it has to be > -1)
  if (lettersFinal.indexOf(upperLetter) > -1) {

    // This checks if they have already guessed this letter
    if (lettersGuessed.indexOf(upperLetter) > -1) {
      console.log('Hey dumb dumb, you already did that');
    } else {

      // This adds the letter to the lettersGuessed array
      lettersGuessed.push(upperLetter);

      // Adds random number between 1 & 100 to rewards
      reward += Math.floor((Math.random() * 100) + 1);
      console.log('Yay! The letter ' + letter + ' is in the word');
    }
    console.log('The correct letters you have guessed so far are ' + lettersGuessed);
  } else {

    // Subtracts random number between 1 & 100 from rewards
    reward -= Math.floor((Math.random() * 100) + 1);
    console.log("You're terrible, guess again");
  }

  if (lettersGuessed.length === lettersFinal.length) {
    console.log('you win! congrats pal. you earned $' + reward);
  }

}
