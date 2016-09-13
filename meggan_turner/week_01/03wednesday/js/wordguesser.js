// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to
// hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, change the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F_ _') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should
// congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var lettersFinal = ['F','O','X'];
var lettersGuessed = ['_', '_', '_'];

var guessLetter = function(letter) {
  // This makes sure the letter that gets passed in is always upper case.
  var upperLetter = letter.toUpperCase();
  // var arrayIndex = indexOf(letter);
  // var stringIndex =

  // This checks if the letter is in the string ( 0 index means it has to be > -1)
  if (lettersFinal.indexOf(upperLetter) > -1) {

    // This checks if they have already guessed this letter
    if (lettersGuessed.indexOf(upperLetter) > -1) {
      console.log('Hey dumb dumb, you already did that');
      console.log('The correct letters you have guessed so far are ' + lettersGuessed.join(''));
    } else {
      console.log('Yay! The letter ' + letter + ' is in the word');
      // Find which exact position the letter is in.
      var arrayPos = lettersFinal.indexOf(upperLetter);
      console.log('arrayPos is', arrayPos);
      // This adds the letter to the lettersGuessed array in it's correct position.
      lettersGuessed[arrayPos] = upperLetter;
      console.log("Congratulations, you found a letter! So far you've got " + lettersGuessed.join(''));
    }
  } else {
    console.log("You're terrible, guess again");
  }

  if (lettersGuessed.length === lettersFinal.length) {
    console.log('you win! congrats pal');
  }

  // Start with a boolean flag that assumes they win
  var victory = true;

  // Loop through both arrays and compare each individual position.
  for (var i = 0; i < lettersFinal.length; i++) {
    // If there is a mismatch anywhere in both arrays, set the boolean to false
    if (lettersGuessed[i] !== lettersFinal[i]) {
      victory = false;
    }
  }

  // If after the loop is completed, the flag is still true, send them a nice doggo related message.
  if (victory) {
    console.log('HOLY SHIT YOU DID IT! GO PET A DOGGO FOR GOOD FORTUNES');
  }

}
