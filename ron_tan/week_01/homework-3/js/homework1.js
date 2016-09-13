/* Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
}; */

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function () {
  if (rectangle.length === rectangle.width) {
    return "This rectangle is a square."
  } else {
    return "This rectangle is not a square."
  }
}
console.log(isSquare());

var area = function () {
  return rectangle.length * rectangle.width;
}
console.log(area());


var perimeter = function () {
  return (rectangle.length + rectangle.width) * 2;
}
console.log(perimeter());





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

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function () {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return "This triangle is equilateral."
  } else {
    return "This triangle is not equilateral."
  }
}
console.log(isEquilateral());


var isIsosceles = function () {
  if (triangle.sideA !== triangle.sideB && triangle.sideB === triangle.sideC) {
    return "This triangle is isosceles."
  } else {
    return "This triangle is not isosceles."
  }
}
console.log(isIsosceles());


var triArea = function () {     //herons formula
  var perimeter = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  var area =  Math.sqrt(perimeter * ((perimeter - triangle.sideA) * (perimeter - triangle.sideB) * (perimeter - triangle.sideC)));
  return area;
}
console.log(triArea().toFixed(2));


var isObtuse = function () {
  if ((triangle.sideC*triangle.sideC) > (triangle.sideA*triangle.sideA) + (triangle.sideB*triangle.sideB)) {
    return "This triangle is obtuse."
  } else {
    return "This triangle is not obtuse."
  }
}
console.log(isObtuse());
