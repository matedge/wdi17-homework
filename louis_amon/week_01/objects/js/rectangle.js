var rectangle = {
  length: 5,
  width: 5
};
var isSquare = function( rect ) {
  if( rect.length === rect.width ) {
    return true;
  }
  else {
    return false;
  }
}

var area = function ( rect ) {
  return rect.length * rect.width;
}

var perimeter = function( rect ) {
  return 2 * ( rect.length + rect.width );
}

console.log( isSquare( rectangle ) );
console.log( area( rectangle ) );
console.log( perimeter( rectangle ) );
