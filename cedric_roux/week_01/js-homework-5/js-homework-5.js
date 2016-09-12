// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var cashRegister = function (cartForParty) {
  var cashRegister = 0;
  for (var itemPrice in cartForParty) {
    if (cartForParty.hasOwnProperty(itemPrice)) {
      cashRegister += parseFloat(cartForParty[itemPrice]);
    }
  }
  console.log(cashRegister);
}

cashRegister(cartForParty); // 60.55


  // var itemPrice1 = parseFloat(cartForParty.banana);
  // var itemPrice2 = parseFloat(cartForParty.handkerchief);
  // var itemPrice3 = parseFloat(cartForParty.Tshirt);
  // var itemPrice4 = parseFloat(cartForParty.apple);
  // var itemPrice5 = parseFloat(cartForParty.nalgene);
  // var itemPrice6 = parseFloat(cartForParty.proteinShake);
  //
  // var priceTotal = stringNum1 + stringNum2 + stringNum3 + stringNum4 + stringNum5 + stringNum6;
  // console.log(priceTotal);
