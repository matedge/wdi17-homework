/* Array and Functions Bonus Material

1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use
the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the
numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

Bonus

1. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar")
should return the string "ratset gaj".
2. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
3. Write a function filterLongWords that takes an array of words and an number i and returns the array of words
that are longer than i. */


var maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


var maxOfThree = function(a, b, c) {
  var largest = a;
  if (b > a) {
    largest = b;
  } if (c > largest) {
    largest = c;
  }
  return largest;
}


var vowel = function(str) {
  if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
    return true;
  } else {
    return false;
  }
}


var arrayNum = [1, 2, 3, 4];

var sumArray = function(){
  var tempSum = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    tempSum += arrayNum[i]
  }
  return tempSum;
}


var multiplyArray = function(){
  var tempMultiply = 1;
  for (var i = 0; i < arrayNum.length; i++) {
    tempMultiply *= arrayNum[i];
  }
  return tempMultiply;
}


// Bonus


var reverseString = function(str) {
  var stringArray = '';
  for (var i = str.length-1; i >= 0; i--) {
    stringArray += str[i];
  }
  return stringArray;
}


var wordArray = ['filterLongWords', 'reverseString', 'multiplyArray', 'sumArray', 'maxOfThree'];

var findLongestWord = function() {
  var longWord = '';
  for (var i = 0; i < wordArray.length; i++) {
    if (longWord.length > wordArray[i].length) {
      return longWord;
    } else {
      longWord = wordArray[i];
    }
  }
  return longWord;
}


var filterLongWords = function(num) {
  var longWordArray = "";
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > num) {
      longWordArray += wordArray[i] + " ";
    } else {
      return longWordArray;
    }
  }
  return longWordArray;
}
