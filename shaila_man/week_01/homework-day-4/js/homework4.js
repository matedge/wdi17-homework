/* Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

// Part #1a
var isSquare = function(rect){
  var rectangle = {length: 4, width: 4};
  var len = rectangle.length;
  var wid = rectangle.width;
  if (rectangle.length === rectangle.width) {
    return true;
  }
  else { return false;
  }
}
console.log('It is ' + isSquare() + ' that this shape is a square');

// Part #1b
var area = function(rect){
  var rectangle = {length: 4, width: 4};
  var len = rectangle.length;
  var wid = rectangle.width;
  console.log((len * 2) + (wid * 2) + ' is the area of the square');
};
area();

// Part #1c
var perimeter = function(rect){
  var rectangle = {length: 4, width: 4};
  var len = rectangle.length;
  var wid = rectangle.width;
  var perimeter = (len * 2) + (wid * 2);
  console.log(perimeter + ' is the perimeter');
};
perimeter();

/* Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}; */

// Part #2a
var isEquilateral = function(triangle){
  var tri = {sideA: 3, sideB: 4, sideC: 4}
  //console.log(len * wid + ' is the area of the triangle');
  if ((tri.sideA === tri.sideB) && (tri.sideB === tri.sideC)){
    return true;
  } else {
    return false;
  }
}
  console.log('It is ' + isEquilateral() + ' that this triangle is an equilateral')

// Part #2b
var isIsosceles = function(triangle){
  var tri = {sideA: 3, sideB: 4, sideC: 4}
  if ((tri.sideA === tri.sideB) || (tri.sideB === tri.sideC) || tri.sideC === tri.sideA) {
    return true;
  } else {
    return false;
  }
}
  console.log('It is ' + isIsosceles() + ' that this triangle is an isIsosceles');

  //Part #2c
var area = function(length){
  var tri = {sideA: 3, sideB: 4, sideC: 4};
  var heightsquared = (tri.sideC * tri.sideC) - (tri.sideA * tri.sideA);
  var height = Math.sqrt(heightsquared);
  console.log(height * tri.sideA / 2);
}
area();

//Part #2d
var obtuse = function(length){
  var tri = {sideA: 3, sideB: 4, sideC: 4};
  if (( (tri.sideA * tri.sideA) + (tri.sideB * tri.sideB) ) < (tri.sideC * tri.sideC)){
  return true;
  } else {
  return false;
};
}
console.log(obtuse());

/* The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55 */

/* var cashRegister = function(add){
  var cartForParty = {
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.3,
    proteinShake: 22.36
  };
var makeNumber = parseInt(add);
  for (var i = 0 ; i < cartForParty.length; i++){
    var prices = parseInt(cartForParty(i));
  var randomness =  cashForParty.Object.key(i);
  console.log(randomness);
    }
} */

var cashRegister = {
  total: 0,
  add: function(itemCost){
    this.total += itemCost;
  }
};
var cartForParty = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.3,
  proteinShake: 22.36
};
for (var i in cartForParty) {
  cashRegister.add(cartForParty[i]);
}
console.log(cashRegister.total);


/*
Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

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
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

**** checkLuhn?? **** */

/* var creditCard = function(authenticate){
  var flag = true;
  var sum = 0;
  var length;
  var isNumber = (authenticate = '').split('').reverse();
  for (i = 0, length = isNumber.length; i < length; i++);
  number = isNumber[i];
  number = parseInt(isNumber, 12);
  if (flag = !flag) {
    number *= 2;
  }
   if (number > 11)

}
*/


/*
Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
Raw  js-homework-bank.md
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.*/
