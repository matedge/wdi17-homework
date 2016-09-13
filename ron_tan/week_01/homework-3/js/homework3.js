/* Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple
function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

1- Number must be 16 digits, all of them must be numbers
2- You must have at least two different digits represented (all of the digits cannot be the same)
3- The final digit must be even
4- The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers
that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration. */


var validateCreditCard = function (cardNum) {
  var response = {};                              // creating the option
  response.valid = "";                            // input keys and values
  response.number = cardNum;
  var numString = cardNum.replace(/-/g, "");      //set numString for ruleOne because NaN condition. Split will mess with it.
  var numArray = numString.split("");
  if (ruleOne(numString, response) && ruleTwo(numArray, response) && ruleThree(numArray, response) && ruleFour(numArray, response)) {   //dont need === true cause values are already true.
    response.valid = true;
  } else {
    response.valid = false;
  }
  return response;
}


//1 Number must be 16 digits, all of them must be numbers
var ruleOne = function (cardNum, response) {
  if (cardNum.length === 16 && isNaN(cardNum) === false) {
    return true;
  } else {
    response.error = "wrong_length";
    return false;
  }
};


//2 You must have at least two different digits represented (all of the digits cannot be the same)
var ruleTwo = function (cardNum, response) {
  var firstNum = cardNum[0];
  for(var i = 0; i < cardNum.length; i++){
    if (cardNum[i] !== firstNum) {                  // checks if the firstnumber of the array is different from the rest of the array
      return true;
    }
  }
  response.error = "all_the_same_digits";           // if for loop has ended, all digits are same, hence fails.
  return false;
};


//3 The final digit must be even
var ruleThree = function (cardNum, response) {
  if (cardNum[15] % 2 === 0) {
    return true;
  } else {
    response.error = "final_digit_not_even";
    return false;
  }
};


//4 The sum of all the digits must be greater than 16
var ruleFour = function (cardNum, response) {
  var tempSum = 0;
  for (var i = 0; i < cardNum.length; i++) {
    tempSum += parseInt(cardNum[i]);
  }
  if (tempSum > 16) {
    return true;
  } else {
    response.error = "sum_of_digits_too_small";
    return false;
  }
};
