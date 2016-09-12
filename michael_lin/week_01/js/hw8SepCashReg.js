

var cartForParty = {
  banana: "1.25",
  handkerchief: "0.99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

//Shorter is better

var cashRegister = function(cart) {
  var total = 0;

  for (var key in cart) {
     total += (parseFloat(cart[key]));
  }
  return 'Total cost: $' + total;
};
