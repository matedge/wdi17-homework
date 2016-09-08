var wordLetters = [ 'f','o','x','e','s'];
var currStr = []; //wordLetters.length;

for ( var i = 0; i < wordLetters.length; i++ ){
  currStr.push( '_' );
}

var guessLetter = function( letter ) {
  var foundMatch = false;
  for( var i = 0; i < wordLetters.length; i++ ) {
    if( wordLetters[ i ] === letter ) {
      currStr[ i ] = letter;
      foundMatch = true;
    }
  }

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
    }
};
