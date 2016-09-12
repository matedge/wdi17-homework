// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666

// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

var validateCreditCard = function String(str) {
  var removeDash = str.split('-').join('');
//  var isNum = /^\d+$/.test(removeDash);
  var sixteenNum = removeDash.length;

  if ((sixteenNum === 16) && (isNum = /^\d+$/.test(removeDash))) {
  console.log('Valid credit card.')
  } else {
  console.log('Not a valid credit card number.')
}

//console.log(sixteenNum);
// var validation = false
//
//   console.log('Credit card validation: ' + validation);
//   console.log('Credit card validation: ' + validation);
}

validateCreditCard('0000-3342-3422-423'); // Returns: false
validateCreditCard('9999-9999-8888-0000'); // Returns: true
validateCreditCard('1111-1111-1111-1111'); // Returns: false
validateCreditCard('9999-9a99-8b88-0000'); // Returns: false
