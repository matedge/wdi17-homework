// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called
// validateCreditCard that returns true or false.
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
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
var num = 1111111111111111;

var validateCreditCard = function(num) {
  var cardLength;
  var cardNumbers;
  var differentDigits;
  var finalDigitEven;
  var sumDigits;


  var cardNumber = num.split('');


  var lastDigit = num[num.length() - 1];



  if (num.length === 16) {
    cardLength = true;
    console.log('yay');
  } else  if (num.length < 16){
    console.log('not long enough');
  } else  if (num.length > 16) {
    console.log('too long');
  }

  // if (isNaN(num) === false) {
  //   cardNumbers = true;
  //   console.log('yay');
  // }

  // if () {
  //   differentDigits = true;
  // }

  // http://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
  // if (lastDigit % 2 === 0) {
  //   finalDigitEven = true;
  // }

  // if () {
  //   sumDigits = true;
  // }

  // if (finalDigitEven === true) {
  //   console.log('true');
  // }

  //
  //
  // if ( ((cardLength && cardNumbers) && (differentDigits && finalDigitEven) && sumDigits) ) {
  //   return true;
  // }



}

































// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail?
// Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
