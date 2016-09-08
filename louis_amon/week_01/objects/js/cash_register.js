/*
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example
*/
// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var total = 0;
for( var item in cartForParty ) {
  total += parseFloat(cartForParty[item]);
}

/*
var temp = 0;
for(var i = 0; i < values(cartForParty).length; i++) {
  temp += values(cartForParty)[i];
}
*/

console.log( total );
