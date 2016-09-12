/*
Given the following a triangle object like the one below, write the following
 functions:

isEquilateral - Returns whether the triangle is equilateral or not

isIsosceles - Returns whether the triangle is isosceles or not

area - Returns the area of the Triangle

isObtuse - Returns whether the triangle is obtuse or not
*/

var triangle = {
  sideA: 5,
  sideB: 5,
  sideC: 4
};

var eqTriangle = {
  sideA: 3,
  sideB: 3,
  sideC: 3
};

var isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true;
  } else {
    return false;
  }
};

var isIsosceles = function(tri) {
  if ((tri.sideA === tri.sideB) ||
  (tri.sideB === tri.sideC) ||
  (tri.sideA === tri.sideC)) {
    return true;
  } else {
    return false;
  }
};

//Triangle are is found by using Heron's formula
var area = function(tri) {
  var s = ((tri.sideA + tri.sideB + tri.sideC) / 2);
  var calcd = (s * (s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC));
  var area = Math.sqrt(calcd);
  return area.toFixed(3) +'cm²';
};

/*
var isObtuse = function(tri) {
  var d = Math.max(tri.sideA, tri.sideB, tri.sideC);

  if (JSON.stringify(tri.sideB) > JSON.stringify(tri.sideA) ) {
    var a = tri.sideA;
  }
  if (JSON.stringify(tri.sideC) > JSON.stringify(tri.sideA) ){
    var b =
  }

  if ((a * a) + (b * b) < (c * c)) {
    console.log("It's obtuse.")
    return true;
  }
};
*/
console.log(area(triangle));
