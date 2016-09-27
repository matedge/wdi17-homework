$(document).ready(function() {
  var updateUI = function () {
    // update balances
    $('#checking-balance').text('$' + accounts.checking.balance);
    $('#savings-balance').text('$' + accounts.savings.balance);
    // add or remove the zero class
    //clear the inputs for the next data entry

  //Checking desposit and withdrawel UI
  if (accounts.checking.balance === 0) {
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  };

  if (accounts.savings.balance === 0) {
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero');
  };

}; // END of Update UI function

//CHECKING DOM:
  var getCheckingAmount = function() {
    var amount = $('#checking-amount').val();
    $('#checking-amount').val('');
    return amount;
  }

  $('#checking-deposit').on('click', function() {
    var amount = getCheckingAmount();
    accounts.checking.deposit( amount );
    updateUI();
  });

  $('#checking-withdraw').on('click', function() {
    var amount = getCheckingAmount();
    console.log(amount);
    accounts.checking.withdraw( amount );
    updateUI();
  });

// SAVINGS DOM:

  var getSavingsAmount = function() {
    var amount = $('#savings-amount').val();
    $('#savings-amount').val('');
    return amount;
  }

  $('#savings-deposit').on('click', function() {
    var amount = getSavingsAmount();
    accounts.savings.deposit( amount );
    updateUI();
  });

  $('#savings-withdraw').on('click', function() {
    var amount = getSavingsAmount();
    console.log('savings', amount);
    accounts.savings.withdraw( amount );
    updateUI();
  });

updateUI();
});
