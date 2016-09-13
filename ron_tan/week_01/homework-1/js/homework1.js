/*
The Calculator

Part 1

-Write a function called squareNumber that will take one argument (a number), square that number, and return the
result. It should also log a string like "The result of squaring the number 3 is 9."
-Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It
should also log a string like "Half of 5 is 2.5.".
-Write a function called percentOf that will take two numbers, figure out what percent the first number represents
of the second number, and return the result. It should also log a string like "2 is 50% of 4."
-Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that,
and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
-Bonus: Round the result so there are only two digits after the decimal.

Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

-Take half of the number and store the result.
-Square the result of #1 and store that result.
-Calculate the area of a circle with the result of #2 as the radius.
-Calculate what percentage that area is of the squared result (#3). */

var squareNumber = function(number){
  var square = number * number;
  return square;
  var squareMessage = "The result of squaring the number" + number + " is " + square;
  console.log(squareMessage);
}

var halfNumber = function(number){
  var half = number / 2;
  return half;
  var halfMessage = "Half of " + number + " is " + half;
  console.log(halfMessage);
}

var percentOf = function(num1, num2){
  var percent = num1 / num2 * 100;
  var percent2 = percent.toFixed(2);
  var percentMessage = num1 + " is " + percent2 + " % of " + num2 + ".";
  return percent2;
  console.log(percentMessage);
}

var areaOfCircle = function(radius){
  var area = Math.PI * radius * radius;
  var area2 = area.toFixed(2);
  var areaMesssage = "The area for a circle with radius " + radius + " is " + area + ".";
  return area2;
  console.log(areaMesssage);
}

var calculator = function(number){
  var result1 = halfNumber(number);
  var result2 = squareNumber(result1);
  var result3 = areaOfCircle(result2);
  var result4 = percentOf(result3, result2);

  console.log(result3+ ", " + result4 + "%");
}
