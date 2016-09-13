/* Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without
the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed
letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
- Write a function called guessLetter that will:
- Take one argument, the guessed letter.
- Iterate through the word letters and see if the guessed letter is in there.
- If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
- When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a
new letter.
- It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate
the user for winning the game.
- Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

Bonus: Make it more like Wheel of Fortune:

- Start with a reward amount of $0
- Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying
the reward if multiple letters found), otherwise subtract from their reward.
- When they guess the word, log their final reward amount.

Bonus: Make it like Hangman:

- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a
letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every
time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost
and show a hangman on the log. */



var fox = ['F', 'O', 'X'];
var guess = ["_", "_", "_"];

var rewardArray = ["", "", ""];
var penaltyArray = [0, 0, 0];
var inputArray = [];

var hangMan = 0;
var penalty = 0;

// Math function from hwk1 converted.

var multiplyArray2 = function(){
  var tempMultiply = 1;
  for (var i = 0; i < rewardArray.length; i++) {
    tempMultiply *= rewardArray[i];
  }
  return tempMultiply;
}

// Random Number Generator.

var rng = function() {
  return Math.random() * (100 - 1) + 1;
}

// Checks if same letter has been input more than once.

var multipleLetters = function(str) {
  for (var i = 0; i < inputArray.length; i++) {
    if (str === inputArray[i - 1]) {
      inputArray.pop();
      console.log("You have already input the letter " + str + ", please try a different letter."); // Added console to add clarity.
    }
  }
}

// Main function. Had a problem with my for loop that would pass through the letter into all items of fox[] resulting in the else
// statement to run atleast 2 times, hence messing with my code.

var guessLetter = function(letter) {
  inputArray.push(letter);
  multipleLetters(letter);

  for (var i = 0; i < fox.length; i++) {
    if (letter === fox[i]) {
      guess[i] = letter;
      rewardArray[i] = rng();
      hangMan -= 2;
      console.log("Congrats! You found a letter!");
    } else if (letter === 'F' || letter === 'X' || letter === 'O') {
      penaltyArray = [0, 0, 0]; // Resets penalty for any value of F,O,X been passed.
    } else {
      penaltyArray[i] = rng();
    }
  }

  penalty = penalty + maxOfThree(penaltyArray[0], penaltyArray[1], penaltyArray[2]); // Grabs largest random number from penaltyArray.
  hangMan += 1;
  if (hangMan <= 0) {
    hangMan = 0;
  } else if (hangMan === 6){
    console.log("Sorry! No guesses left! You have lost! O|<~<"); // Supposed image of a dead hangMan.
  }

  if (guess[0] === fox[0] && guess[1] === fox[1] && guess[2] === fox[2]) {
    console.log(guess[0] + " " + guess[1] + " " + guess[2]);
    console.log("Congrats on winning the game! Your reward is $" + (multiplyArray2() - penalty).toFixed(2));
  } else {
    console.log(guess[0] + " " + guess[1] + " " + guess[2]);
  }
}
