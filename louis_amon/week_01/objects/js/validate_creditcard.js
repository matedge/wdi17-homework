/*
Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
*/
var limit = 16;
var checkOccur = function( str ) {
  var count = 1;
  for( var i = 0; i < (str.length - 1); i++ ) {
    if( str[i] === str[i + 1] ) {
      count++;
    }
    else {
      return count;
    }
  }
  return count;
};

var sumCreditCard = function( str ) {
  total = 0;
  for(var i = 0; i < str.length; i++ ) {
    total += parseInt(str[i]);
  }
  return total;
}

var validateCreditCard = function ( card ) {
  var creditCard = card.replace(RegExp('-', 'g'), '');
  var isNum = /^\d+$/.test(creditCard);
  var error = '';
  var validCard = {};
  var valid = false;
  if( limit !== creditCard.length ) {
    error = 'Number too short or too long.';
    validCard = { valid: valid, number: creditCard, error: error };
    console.log(validCard);
  }
  else if( isNum === false ) {
    error = 'Contains invalid characters';
    validCard = { valid: valid, number: creditCard, error: error };
    console.log(validCard);
  }
  else if( ( creditCard[creditCard.length - 1] ) % 2 !== 0 ) {
    error = 'odd final number';
    validCard = { valid: valid, number: creditCard, error: error };
    console.log(validCard);
  }
  else if( checkOccur( creditCard ) === limit ) {
    error = 'only one type of number';
    validCard = { valid: valid, number: creditCard, error: error };
    console.log(validCard);
  }
  else if( sumCreditCard( creditCard ) < limit ) {
    error = 'sum less than 16';
    validCard = { valid: valid, number: creditCard, error: error };
    console.log(validCard);
  }
  else {
    valid = true;
    validCard = { valid: valid, number: creditCard }
    console.log(validCard);
  }
}

console.log( validateCreditCard ( '9999-9999-8888-0000' ) );
console.log( validateCreditCard ( '6666-6666-6666-1666' ) );
console.log( validateCreditCard ( 'a923-3211-9c01-1112' ) );
console.log( validateCreditCard ( '4444-4444-4444-4444' ) );
console.log( validateCreditCard ( '1111-1111-1111-1110' ) );
console.log( validateCreditCard ( '6666-6666-6666-6661' ) );
