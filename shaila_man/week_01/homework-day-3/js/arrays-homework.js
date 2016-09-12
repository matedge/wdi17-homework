/* Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is
a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and
multiplyArray([1,2,3,4]) should return 24.
Bonus

Define a function reverseString that computes the reversal of a string. For example,
reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the
longest one.
Write a function filterLongWords that takes an array of words and an number i and returns the
array of words that are longer than i. */

//method a
var reverseString = function(s){
var r = '';
for (var i = 0; 1 < s.length; i++){
  r += s[s.length - 1 - i];
}
return r;
}

//method b
var reverseString = function(s){
var r = '';
for (var i = s.length - i; i >= 0; i--){
  r += s[i];
}
return r;
}

//method c - takes longer to run that loop above
"foolish".split('').reverse().join('');



// # 1
var maxOfTwoNumbers = function(a,b){
  if (a > b){
    return a;
  } else {
    return b;
  }
}
console.log(maxOfTwoNumbers(4,8));

// #2
var maxOfThree = function(x, y, z){
  if (x > y && x > z){
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(maxOfThree(4,8,15));

// #3

var stringLet = function(i){    // not working - result = undefined!!!
  if (i === 'a' || i === 'b' || i === 'c' || i === 'd' || i === 'e'){
    return true;
  } else {
    return false;
  }
}
console.log(stringLet('e'));

// #4
/*
function arraySum(array){
  var total = 0,
  for (var i = 0; i < array.length; i++);
    total += array[i];
  return total;
};
console.log( arraySum( [1,2,3,4] ) );


// #5


var multiplyArray = function(y){
  var array = y + [y+1];
 for (var y = 0;  y < y.length; y++);
 array.find();
}
console.log(multipleArray[1,2]);
*/

/* Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works. */

var correct = ['b','o','t','s'];
var guessed = ['_','_','_','_'];
var guessLetter = function(letter){
  var correctGuess = false;
  var moreGuess = false;
  for (var i = 0; i < correct.length; i++){
    if (correct[i] === letter) {
      guessed[i] = letter;
      correctGuess = true;
    }
    if (guessed[i] === '_'){
      moreGuess = true;
    }
  }
  if (correctGuess){
    console.log('Well done, good guess!');
    console.log(guessed.join(''));
    if (!moreGuess) {
      console.log('Well done, you won!');
    }
  }
    else {
      console.log('try again!');
    }
   }
   guessLetter('b');


/* Bonus: Make it more like Wheel of Fortune:

Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:

Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/
