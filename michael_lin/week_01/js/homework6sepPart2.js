/*
DrEvil

Create a function called DrEvil. It should take a single argument, an amount,
 and return ' dollars', except it will add '(pinky)' at the end if the amount
  is 1 million.
*/

var drDevil = function(amount) {
  if (amount === 1000000){
    console.log(amount + ' dollars (pinky)');
  } else {
    console.log(amount + ' dollars');
  }
};



var drDevil2 = function(amount) {
  amount === 1000000 ? console.log(amount + ' dollars (pinky)') : console.log(amount + ' dollars');
}


var drDevil3 = function(amount) {
  console.log(amount === 1000000 ? amount + ' dollars (pinky)' : amount + ' dollars');
}


var drDevil4 = function(amount) {
  console.log(amount + (amount === 1000000 ? ' dollars (pinky)' : ' dollars'));
}


/*
Create a function called mixUp. It should take in two strings, and return the
concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each. You can assume that the strings
are at least 2 characters long.

For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

var mixUp = function(stringOne, stringTwo) {
  var lettersOne = stringOne.slice(0,2);
  var lettersTwo = stringTwo.slice(0,2);

  var cat = lettersTwo + stringOne.slice(2) + ', ' + lettersOne + stringTwo.slice(2);

  console.log(cat);
  return cat
}


/*
Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

var fixStart = function (stringOne) {
  var subbedString = stringOne.substring(1);
  var firstCharacter = new RegExp(stringOne.charAt(0), "g");
  var noFirstLetter = subbedString.replace(firstCharacter, "*");
  var complete = stringOne.slice(0, 1) + noFirstLetter;

  console.log(complete);
  return complete;
};

/*
Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length
is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/

var verbing = function(stringOne) {
  if (stringOne.length >= 3 && stringOne.indexOf("ing") >= 0){
    var twoing = stringOne + "ly";

    console.log(twoing);
    return twoing;

  } else if (stringOne.length >= 3) {
    var addIng = stringOne + 'ing';

    console.log(addIng);

  } else if (stringOne.length < 3) {

    console.log(stringOne);
  }
};

/*
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...
'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
*/

var notBad = function(sentence) {
  if (sentence.includes("not") && sentence.includes("bad")){
    if(sentence.indexOf("not") < sentence.indexOf("bad")) {
      var toBeReplaced = sentence.slice(sentence.indexOf("not"), sentence.indexOf("bad")+3);
      var logged = sentence.replace(toBeReplaced, "good");
      console.log(logged);
    }
  } else {
    console.log(sentence);
  }
}
