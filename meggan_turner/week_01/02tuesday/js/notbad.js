// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


  var notBad = function(string) {
    var subNot = "not";
    var subBad = "bad";
    var positionSubNot = string.indexOf(subNot);
    var positionSubBad = string.indexOf(subBad);

    if ((string.indexOf(subNot)!= -1) && (positionSubNot < positionSubBad)) { //check if 'not' substring is present & if it precedes 'bad'
      var arr = string.split(''); // convert string to array
      var removed = arr.splice(positionSubNot, positionSubBad, "good"); // replace substring with 'good'
      string = arr.join(''); // convert array back to string

      return string;

    } else {
      return string;
    }
  }
