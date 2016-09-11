/*
Write a function called squareNumber that will take one argument (a number),
square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9."
*/

var squareNumber = function(someNum) {
  var newNum = someNum * someNum;

  console.log("The result of squaring the number " + someNum + " is " + newNum);
  return newNum;
}

squareNumber(10);

/*
Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string like
"Half of 5 is 2.5.".
*/

var halfNumber = function(aNumber) {
  var result = aNumber / 2;

  console.log("Half of " + aNumber + " is " + result);
  return result;
}

halfNumber(10);

/*
Write a function called percentOf that will take two numbers,
figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."
*/

var percentOf = function(x, y) {
  var result = x / y;
  var percentage = result * 100;

  console.log(x + " is " + percentage + "% of " + y);
  return percentage;
}

percentOf(10, 100);

/*
Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a
string like "The area for a circle with radius 2 is 12.566370614359172."
*/

var areaOfCircle = function (radius) {
  var area = Math.PI * radius * radius;

  console.log('The area is ' + area);
  return area;
}

areaOfCircle(10);

/*
Bonus: Round the result so there are only two digits after the decimal.
*/

/*
Part 2

Write a function that will take one argument (a number) and perform the
following operations, using the functions you wrote earlier:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/

var oneArgument = function(x) {
  var resultOne = x / 2;
  var resultTwo = resultOne * resultOne;
  var area = Math.PI * resultTwo * resultTwo;
  var percentage = area / resultTwo * 100;

  console.log("The result is " + percentage + "%");
  return percentage;
  }

  oneArgument(10);
