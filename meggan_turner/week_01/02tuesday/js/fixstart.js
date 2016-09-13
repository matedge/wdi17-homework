//
// FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been
// replaced with '*', except for the first character itself. You can assume that
// the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'



var fixStart = function (string) {
  var firstLetter = string.charAt(0);
  var newString = string.replace(RegExp(firstLetter, "g"), "*"); // "g" or /g makes the regex global & applies it to multiple strings/substrings
  var finalString = newString.replace(newString.charAt(0), firstLetter);

  return finalString;
}
