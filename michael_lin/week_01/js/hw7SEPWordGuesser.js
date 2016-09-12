


var guessed = ['_', '_', '_'];
var answer = ['F', 'O', 'X'];


/*
Iterate through the word letters and see if the guessed letter is in there.

If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.

When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.

It should also figure out if there are any more letters that need to be
guessed, and if not, it should congratulate the user for winning the game.

Pretend you don't know the word, and call guessLetter multiple times with
various letters to check that your program works.

'', '', '_'

*/

var guessLetter = function(input) {
  var hit = false;
  var miss = false;



  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === input) {
      guessed[i] = input;
      hit = true;
    }
    if (guessed[i] === '_') {
        miss = true;
    }
  }
  if (var win = true) {
    console.log("YOU WIN!")
  } else {
    if (hit) {
        console.log('One step closer to winning.');
        console.log(guessed.join(''));
        if (!miss) {
          console.log('Chicken Dinner!');
        }
    } else {
        console.log('Wrong, try again.');
    }
  }
};
