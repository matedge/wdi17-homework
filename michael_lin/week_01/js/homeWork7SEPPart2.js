var reverseString = function(a) {
  var o = [];
  for (var i = a.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = a[i];
   return o.join('');
};


// And another one!

var reverseStringTwo = function(str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
};



var findLongestWord = function(a) {
  var longest = 0;
  var longestString = '';

  for (var i = 0; i < a.length; i++) {
    if (a[i].length > longest ) {
      longest = a[i].length;
      longestString = a[i];
      }
    }
    return longest;
};
