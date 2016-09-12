/*
Given the following a rectangle object like the one below, write the following
functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

var rectangle = {
  length: 6,
  width: 10
};


var isSquare = function(rectangleInput) {
  if (rectangleInput.length === rectangleInput.width) {
    return true;
  } else {
    return false;
  }
};


var area = function(input) {
  return (input.length * input.width) +'cm²';
};

var perimeter = function(input) {
  return ((input.length * 2) + (input.width * 2))
};

console.log(perimeter(rectangle));
