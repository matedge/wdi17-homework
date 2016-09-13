// Part 1
//
// Write a function called squareNumber that will take one argument (a number),
//square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// Write a function called percentOf that will take two numbers, figure out what
//percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result. It should also log a
//string like "The area for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(num){
  var result = num * num;
  var message = "The result of squaring the number " + num + " is " + result + ".";
  console.log(message);

}
squareNumber(4);

var halfNumber = function(num) {
  var result = num / 2;
  var message = "Half of " + num + " is " + result + ".";
  console.log(message);
}
halfNumber(4);

var percentOf = function(num1, num2) {
  var result = num1 / num2 * 100;
  var message = num1 + " is " + result + "% of " + num2 + ".";
  console.log(message);
}
percentOf(5, 10);

var areaOfCircle = function(radius) {
  var result = radius * radius * Math.PI;
  result = +result.toFixed(2);
  var message = "The area of a circle with radius " + radius + " is " + result + ".";
  console.log(message);
}
areaOfCircle(5);
