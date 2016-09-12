// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function () {
  if (rectangle.length === rectangle.width) {
    console.log('This is a square.');
  } else {
    console.log('This is not a square.');
  }
}

var area = function () {
  var calcArea = rectangle.length * rectangle.width;
  console.log('Area: ' + calcArea);
}

var perimeter = function () {
 var calcPeri = 2 * (rectangle.length + rectangle.width);
  console.log('Perimeter: ' + calcPeri);
}

isSquare(rectangle);
area(rectangle);
perimeter(rectangle);


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function () {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    console.log('The triangle is an equilateral.');
  } else {
    console.log('The triangle is not an equilateral.');
  }
}

var isIsosceles = function () {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC ) {
    console.log('The triangle is an isoceles.');
  } else {
    console.log('The triangle is not an isoceles.');
  }
}

var area = function () {
  var perimeter = triangle.sideA + triangle.sideB + triangle.sideC;
  var p = perimeter / 2;

  var calcArea = Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));

  console.log('Area: ' + calcArea);
}

// var isObtuse = function () {
//   var angleCheck = ;
//   console.log(angleCheck);
// }

isEquilateral(triangle);
isIsosceles(triangle);
area(triangle);
// isObtuse(triangle);
