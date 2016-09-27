
// UI
$(document).ready( function () {

  $('#checking-deposit').on('click', function() {

     var newAmount = checkingDeposit( parseInt($('#checking-amount').val()) );
     $('#checking-balance').html('$' + newAmount);
    //  console.log(newAmount);
     if (newAmount > 0) {
       $('#checking').removeClass('zero');
     }
  });

  $('#checking-withdraw').on('click', function() {
     var newAmount = checkingWithdraw( parseInt($('#checking-amount').val()) );
     $('#checking-balance').html('$' + newAmount);
    //  console.log(newAmount);
     if (newAmount === 0) {
       $('#checking').addClass('zero');
       $('#savings-balance').text("$"+savingsBalance);
     }
  });

  $('#savings-deposit').on('click', function() {
     var newAmount = savingsDeposit( parseInt($('#savings-amount').val()) );
     $('#savings-balance').html('$' + newAmount);
    //  console.log(newAmount);
     if (newAmount > 0) {
       $('#savings').removeClass('zero');
     }
  });

  $('#savings-withdraw').on('click', function() {
     var newAmount = savingsWithdraw( parseInt($('#savings-amount').val()) );
     $('#savings-balance').html('$' + newAmount);
    //  console.log(newAmount);
     if (newAmount === 0) {
       $('#savings').addClass('zero');
       $('#checking-balance').text("$"+checkingBalance);
     }
  });

});


// BANK logic

var checkingBalance = 0;
var savingsBalance = 0;

var checkingDeposit = function (amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  checkingBalance = checkingBalance + amount;
  return checkingBalance;
}

var checkingWithdraw = function (amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  checkingBalance = checkingBalance - amount;
  if (checkingBalance < 0) {
    if (savingsBalance > Math.abs(checkingBalance)) {
      savingsBalance = savingsBalance - Math.abs(checkingBalance);
      checkingBalance = 0;
      return checkingBalance;
    } else {
      checkingBalance = checkingBalance + amount;
      return checkingBalance
      console.log("You don't have enough money");
    }
  } else {
    return checkingBalance;
  }
};


var savingsDeposit = function (amount) {
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  savingsBalance = savingsBalance + amount;
  return savingsBalance;
}

var savingsWithdraw = function (amount) {
  if (isNaN(amount)){
    amount = 0;
  }
  if (amount < 0) {
    amount = 0;
  }
  savingsBalance = savingsBalance - amount;
  if (savingsBalance < 0) {
    if (checkingBalance > Math.abs(savingsBalance)) {
      checkingBalance = checkingBalance - Math.abs(savingsBalance);
      savingsBalance = 0;
      return savingsBalance;
    } else {
      savingsBalance = savingsBalance + amount;
      return savingsBalance;
      console.log("You don't have enough money");
    }
  } else {
    return savingsBalance;
  }
};
