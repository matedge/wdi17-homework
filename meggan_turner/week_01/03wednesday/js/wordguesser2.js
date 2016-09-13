var word = ['F', 'O', 'X'];
var lettersGuessed = ['_','_','_'];
var reward = 0;

var guessLetter = function(letter) {
  // This converts the letter to uppercase, so that it will match properly
  var upperLetter = letter.toUpperCase();

  // Checks if the letter is in the string ( 0 index means it has to be > -1)
  if (word.indexOf(upperLetter) > -1) {

    // Checks if the letter has already been guessed
    if (lettersGuessed.indexOf(upperLetter) > -1) {

      // Tells the user they're dumb and prints out '_ _ _', filling in any correctly guessed letters
      console.log('You already guessed this letter! The correct letters you have so far are ' + lettersGuessed.join(' '));
    } else {

      // Finds out the exact position the letter is in
      var arrayPos = word.indexOf(upperLetter);

      // Adds the letter to the lettersGuessed array in its correct position
      lettersGuessed[arrayPos] = upperLetter;

      // Adds random number between 1 and 1000 to rewards
      reward += Math.floor((Math.random() * 1000) + 1);
      console.log('Correct! The correct letters you have so far are ' + lettersGuessed.join(' '));
    }
  } else {
    // Subtracts random number between 1 and 1000 from rewards
    reward -= Math.floor((Math.random() * 1000) + 1);
    console.log('Not this time! Guess again');
  }

  // Declares a boolean flag that assumes they have won
  var victory = true;

  // Loop through both arrays and compare each individual position
  for (var i = 0; i < word.length; i++) {

    // If there is a mismatch anywhere in both arrays, set the boolean to false
    if (lettersGuessed[i] !== word[i]) {
      victory = false;
    }
  }

  // If after the loop is completed, the flag is still true, congratulate them on winning!
  if (victory) {
    console.log('You win! Go pet a doggo to congratulate yourself. You also earned $' + reward + '. Go ask Joel for this.');
  }

}
