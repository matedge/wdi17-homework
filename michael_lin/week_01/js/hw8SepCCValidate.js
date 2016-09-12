var validity = false;

var justNumbers = function(creditCardNum) {
  var strNum = creditCardNum.replace(/\D/g,'');
  return strNum;
};

/*
Number must be 16 digits, all of them must be numbers

You must have at least two different digits represented (all of the digits cannot be the same)

The final digit must be even

The sum of all the digits must be greater than 16
*/

var lengthAndModulus = function(creditCardNum) {
  var x = justNumbers(creditCardNum);

  if (x.length === 16) {
    if (x[15] % 2 === 0) {
      
      return true;
      console.log(true);
    }


  }
};



/*
var validateCreditCard = function(number) {
  if (number.length === 16){
    if (//){
      if (number[18] % 2 === 0) {

//        parseFloat(number)
      }
    }

  }
};
*/
