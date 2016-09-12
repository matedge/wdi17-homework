/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in
Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.

Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.

Write a function that takes a character (i.e. a string of length 1) and returns
true if it is a vowel, false otherwise.

Define a function sumArray and a function multiplyArray that sums and
multiplies (respectively) all the numbers in an array of numbers.

For example,
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should
return 24.
*/


var maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};


var maxOfThree = function(a, b, c) {
  if (a > b && a > c){
    return a;
  } else if ( b > c && b > a) {
    return b;
  } else {
    return c;
  }
};


var vowelCheck = function(a) {
  var result = a === "a" || a === "e" || a === "i" || a === "o" || a === "u";
  return result;
};


var numArray = [1, 2, 3, 4]

var sumArray = function(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
};


var multiplyArray = function(array) {
  var total = 1;

  for (var i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};
