/*
Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers as arguments
and returns the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of
 them.
Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4])
should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
var maxOfTwoNumbers = function( num1, num2 ) {
  if( num1 < num2 ) {
    return num2;
  }
  else {
    return num1;
  }
};

console.log( maxOfTwoNumbers( 15, 30 ) );

var maxOfThree = function( num1, num2, num3 ) {
  var track = '';
  if( num1 < num2 ) {
    track = num2;
  }
  else {
    track = num1;
  }
  if ( num2 < num3 ) {
    track = num3;
  }
  else {
    track = num2;
  }
  return track;
};

console.log( maxOfThree( 15, 30, 70 ) );

var vowelCheck = function( firstChar ) {
  var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  for( var i = 0; i < vowels.length; i++ ) {
    if( firstChar === vowels[ i ] ) {
      console.log( true );
    }
    else {
      console.log( false );
    }
  }
};
vowelCheck( 'z' );

var sumArray = function( arr ) {
  var sum = 0;
  for( var i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  }
  console.log( sum );
}

sumArray( [ 1, 2, 3, 4 ] );

//Multiply Function
var multiplyArray = function( arr ) {
  var product = 1;
  for( var i = 0; i < arr.length; i++ ) {
    product *= arr[i];
  }
  console.log( product );
}

multiplyArray( [ 1, 2, 3, 4 ] );

//Reverse String function
var reverseString = function ( str ) {
  var newStr = '';
  for( var i = 0; i < str.length; i++ ) {
    newStr += str[ str.length - (i + 1 ) ];
  }

  return str.split('').reverse().join('');
  console.log( newStr );
};

reverseString( "louis" );

//find the longest word in the array
var findLongestWord = function ( arr ) {
  var track = 0;
  for( var i = 0; i < arr.length; i++ ) {
    for( var j = 1; j < arr.length; j++ ) {
      if( arr[ i ].length > arr[ j ].length ) {
        track = arr[ i ].length;
      }
      else {
        track = arr[ j ].length;
      }
    }
  }
  return track;
};

console.log( findLongestWord( [ 'dog', 'kitten', 'food', 'findLongestWord' ] ) );

//filter words that are longer than the provided number
var filterLongWords = function( arr, num ) {
  var newArr = [];
  for( var i = 0; i < arr.length; i++ ) {
    if( arr[i].length > num ) {
      newArr.push( arr[ i ] );
    }
  }
  console.log( newArr );
}

filterLongWords( [ 'dog', 'kitten', 'food', 'findLongestWord' ], 4 );
