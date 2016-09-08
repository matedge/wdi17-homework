var wordLetters = [ 'f','o','x','e','s'];
var currStr = [];
var allLetters = [];
var countToSix = 1;

var countOccur = function( letter, arr ) {
  var count = 0;
  for ( var i = 0; i < arr.length ; i++ ) {
    if( arr[ i ] === letter ) {
      count++;
    }
  }
  return count;
}

for ( var i = 0; i < wordLetters.length; i++ ){
  currStr.push( '_' );
}

var guessLetter = function( letter ) {
  var foundMatch = false;
  allLetters.push( letter );
  for( var i = 0; i < wordLetters.length; i++ ) {
    if( wordLetters[ i ] === letter ) {
      currStr[ i ] = letter;
      foundMatch = true;
    }
  }

  if( countOccur( letter, allLetters )  === 1 ) {
    if( foundMatch ) {
      console.log( 'Congratulations you found a new letter ' + letter );
      if( currStr.includes( '_' ) ) {
        console.log( 'There are more letters to guess ' )
        console.log ( 'Current Guess: ' + currStr.join( ' ' ) );
      }
      else {
        console.log( 'You have won the game!!!' );
        console.log ( 'The word is: ' + currStr.join( ' ' ) );
      }
    }

    else {
      console.log( 'That letter is incorrect. Please try again!' );
      console.log( 'There are more letters to guess ' );
      console.log( 'Current Guess: ' + currStr.join( ' ' ));
      if( countToSix === 6 ) {
        console.log( 'Game Over!' );
      }
      countToSix++;
    }
  }
};
