
/*
Part 1, Rectangle

Given the following a rectangle object like the one below,
write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/
var myRectangle = {
  length: 4,
  width: 4,
}

function isSquare( rectangle ) {
  if (rectangle.length === rectangle.width) {
    console.log('The rectangle is a square.');
  } else {
    console.log('This is not a square.');
  }
}
isSquare( myRectangle );

var area = function( rectangle ) {
  console.log(rectangle.length * rectangle.width);
}
area( myRectangle );

var perimeter = function( rectangle ) {
  var thePerimeter = rectangle.length * 2 + rectangle.width * 2;
  console.log(thePerimeter);
}
perimeter( myRectangle );


/*
Part 2, Triangle

Given the following a triangle object like the one below,
write the following functions:

isEquilateral - Returns whether the triangle is equilateral
or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var myTriangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

function isEquilateral(triangle) {
  if (triangle.sideA == triangle.sideB == triangle.sideC){
    console.log('The triangle is equilateral.');
  } else {
    console.log('The triangle is not equilateral.');
  }
}

isEquilateral(myTriangle)


function isIsosceles(triangle) {
  if ((triangle.sideA == triangle.sideB) || (triangle.sideA == triangle.sideC) ||
  (triangle.sideB == triangle.sideC)) {
    console.log('The triangle is isosceles.');
  } else {
    console.log('The triangle is not isosceles.');
  }
}
Math.pow
Math.sqrt

isIsosceles(myTriangle);

function area(triangle) {
  var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  var area = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
  console.log(area);
}

area(myTriangle);

// Need to make this one more concise

function isObtuse(triangle) {
  if (Math.sqrt(Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) > Math.pow(triangle.sideC, 2)))
  {
    console.log('the triangle is obtuse');
  } else if (Math.sqrt(Math.pow(triangle.sideB, 2) + Math.pow(triangle.sideC, 2) > Math.pow(triangle.sideA, 2)))
  {
    console.log('the triangle is obtuse');
  } else if (Math.sqrt(Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideC, 2) > Math.pow(triangle.sideB, 2)))
  {
    console.log('the triangle is obtuse');
  }
}
isObtuse(myTriangle);


/*
The Cash Register

Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice). The function
should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

// need to convert all values to number and then add them together

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// 1) convert object into array
//i needs to be 'bannana' > need to convert banana etc into values i.e. 0, 1, 2, 3

function cashRegister(cart) {
    var arr = Object.keys(cart).map(function(key) {return cart[key]});
    var sum = 0
      for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    } console.log(sum);
}
cashRegister(cartForParty);

/*
Credit Card Validation

You're starting your own credit card business. You've come up with a new way to
validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented
(all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number

&& (myCreditCard[1] % 1 === 1)
*/

var myCreditCard = [
  "9999999988880000",
  "9999999988880000"
]

function validateCreditCard( myCreditCard ) {
  if ((myCreditCard[1].length === 16) && (Number(myCreditCard) % 1 === 1)) {
    console.log('You have a valid card.');
  }
} validateCreditCard( myCreditCard[0] );

//    if (card[card.length - 1] % 2 == 0){
  //    console.log('You have a valid card.');
  //  }
//  } validateCreditCard(myCreditCard);
