// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = { length: 4, width: 4 }

var isSquare = function() {
  if (rectangle['length'] === rectangle['width']) {
    console.log('The rectangle is square');
  } else {
    console.log('The rectangle is not square');
  }
}

var area = function() {
  var calcArea = (rectangle['length'] * rectangle['width']);
  return calcArea;
}

var perimeter = function() {
  var calcPerim = (rectangle['length'] * 2) + (rectangle['width'] * 2);
  return calcPerim;
}




// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


var triangle = { sideA: 3, sideB: 4, sideC: 4 };

var aSide = triangle.sideA;
var bSide = triangle.sideB;
var cSide = triangle.sideC

var isEquilateral = function() {
  if (aSide === bSide && bSide === cSide) {
    console.log('The triangle is equilateral');
  };
}

var isIsosceles = function() {
  if ((aSide === bSide || bSide === cSide) || cSide === aSide) {
    console.log('The triangle is isosceles');
  };
}

var area = function() {
  var p = (aSide + bSide + cSide) / 2;
  // Heron's formula
  var triArea = Math.sqrt( p * (p - aSide) * (p - bSide) * (p - cSide));
  console.log(triArea);
}


var isObtuse = function() {
  // var obj = {a: 1, b: 2, undefined: 1};
  //
  // var greatest = Object.keys(triangle).reduce(function(sideA, sideB){ return triangle[sideA] > triangle[sideB] ? sideA : sideB });
  //
  // var greatest;
  // if (aSide < bSide && aSide < cSide) {
  //   greatest = aSide;
  // } else if (bSide < aSide && bSide < cSide) {
  //   greatest = bSide;
  // } else {
  //   greatest = cSide;
  // }
  //
  // var a;
  // var b;
  // var c = greatest;

  var sorted



  if (((aSide * sSide) + (bSide * bSide)) < (cSide * cSide))) {
    console.log('The triangle is obtuse')
  }
}


// a^2 + b^2  <  c^2 => obtuse-angled (where c is the largest side)



//
