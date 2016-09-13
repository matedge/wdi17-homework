// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



var calculate = function(num) {
  var result1 = num / 2;
  var result2 = result1 * result1;
  var result3 = result2 * result2 * Math.PI;
  result3 = +result3.toFixed(2);
  var result4 = result3 / result2 * 100;

  var message = num + " halved equals " + result1 + ", and " + result1 + " squared equals " + result2 + ", and a circle with radius " + result2 + " has an area of " + result3 + ", which is " + result4 + "% of " + result2 + ".";
  console.log(message);
}
calculate(10);
