/*
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

var triangle = {
  sideA: 4,
  sideB: 8,
  sideC: 10
};
var isEquilateral = function ( tri ) {
  if ( tri.sideA === tri.sideB && tri.sideB === tri.sideC ) {
    return true;
  }
  else {
    return false;
  }
}

console.log( 'isEquilateral: ' + isEquilateral( triangle ) );

var isIsosceles = function( tri ) {
  if( isEquilateral( tri ) ) {
    return false;
  }
  else if ( tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC ) {
    return true;
  }
  else {
    return false;
  }
}
console.log( 'isIsosceles: ' + isIsosceles ( triangle ) );

var area = function( tri ) {
  var p = ( tri.sideA + tri.sideB + tri.sideC ) / 2;
  var calc = p * (p - tri.sideA ) * ( p - tri.sideB ) * (p - tri.sideC ) ;
  return Math.sqrt( calc );
}

console.log( area (triangle) );

var isObtuse = function( tri ) {
  var calc = Math.pow(tri.sideA, 2) + Math.pow(tri.sideB, 2) - Math.pow(tri.sideC, 2);
  var cos =  calc / (2 * tri.sideA * tri.sideB);
  if( cos < 0 ) {
    console.log(cos);
    return true;
  }
  else {
    console.log(cos);
    return false;
  }
}

console.log('isObtuse: ' + isObtuse( triangle ) );
