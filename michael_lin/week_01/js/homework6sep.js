var squareNumber = function(number) {
  var squared = number * number;
  console.log('The result of your squared number is; ' + squared);
  return squared;
};

var halfNumber = function (number) {
  var halved = number / 2;
  console.log('Half of ' + number + ' is ' + halved);
  return halved;
};

var percentOf = function (num1, num2) {
  var result = (num1 / num2) * 100;
  console.log('First number; ' + num1 + ' is ' + result + '% of ' + num2 + '.');
  return result;
};

var areaOfCircle = function (radius){
  var circleArea = Math.PI * radius * radius;
  var message = 'The area of a circle with the radius ' + radius + ' is ' + Number(circleArea).toFixed(2) + '.';
  console.log(message);
  return circleArea;
};

var halfSquareCirclePercent = function(number) {
  var equals = halfNumber(number);
  var equals2 = squareNumber(equals);
  var equals3 = areaOfCircle(equals2);
  console.log(percentOf(equals3, squareNumber(equals3)));
}
