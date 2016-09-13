/* The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices
(itemName: itemPrice). The function should return the total price of the shopping cart. Example

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
cashRegister(cartForParty)); // 60.55 */


var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

var cashRegister = function (cartForParty) {
  var total = 0;                             //
  for (x in cartForParty) {                  // loop through each property of the cart and assign it to x.
    if (cartForParty.hasOwnProperty(x)) {    // make sure x is a property of the cart.
      total += parseFloat(cartForParty[x])       // adds value of the current property to total.
    }
  }
  console.log(total);
};

console.log(cashRegister(cartForParty));
