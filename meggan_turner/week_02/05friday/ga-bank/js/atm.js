// BANK LOGIC

var checkingBalance = 0;
var savingsBalance = 0;
var overdraft = 0;
var total;

var getTotal = function() {
  return checkingBalance + savingsBalance;
}

var depositChecking = function(dollars) {
  if (isNaN(dollars) === true) {
    alert('Please enter a valid number');
  } else if (dollars < 0) {
    alert('You can\'t deposit a negative number, dumb dumb')
  } else {
    checkingBalance += dollars;
  }
};

var withdrawChecking = function(dollars) {
  total = getTotal();

  if (isNaN(dollars) === true) {
    alert('Please enter a valid number');
  } else if (dollars < 0) {
    alert('You can\'t withdraw a negative number, dumb dumb')
  } else if (dollars <= checkingBalance) {
    checkingBalance -= dollars;
  } else if (dollars <= total) {
    overdraft = dollars - checkingBalance;
    savingsBalance -= overdraft;
    checkingBalance = 0;
  } else {
    alert('You don\'t have enough money to do that');
  }
}

var depositSavings = function(dollars) {
  if (isNaN(dollars) === true) {
    alert('Please enter a valid number');
  }  else if (dollars < 0) {
    alert('You can\'t deposit a negative number, dumb dumb')
  } else {
    savingsBalance += dollars;
  }
};

var withdrawSavings = function(dollars) {
  total = getTotal();

  if (isNaN(dollars) === true) {
    alert('Please enter a valid number');
  } else if (dollars < 0) {
    alert('You can\'t withdraw a negative number, dumb dumb')
  } else if (dollars <= savingsBalance) {
    savingsBalance -= dollars;
  } else if (dollars <= total) {
    overdraft = dollars - savingsBalance;
    checkingBalance -= overdraft;
    savingsBalance = 0;
  } else {
    alert('you don\'t have enough money to do that');
  }
};

// when 'deposit' is clicked, take value from #checking-amount and store it in checkingBalance - UI THING,  COME BACK TO IT LATER
// when 'withdraw' is clicked, take value from #checking-amount and subtract it from checkingBalance - UI THING, COME BACK TO IT LATER

// take value and store it in checkingBalance - done, working
// if withdrawal & (checkingBalance is $0), do nothing - done, working
// if withdrawal & (#checking-amount > totalBalance) do nothing - done, working
// if withdrawal & (#checking-amount > checkingBalance) then savingsBalance = checking-amount - checking balance - done, working

// UI
$(document).ready(function() {
  var dollars;

  // Deposit Checking, adds to balance + display
  $('#checking-deposit').on('click', function() {
    $('#checking .balance').removeClass('zero');
    dollars = parseFloat($('#checking-amount').val());
    depositChecking(dollars);
    $('#checking-balance').html('$' + checkingBalance);
  });

  // Withdraw checking, subtracts from balance + display
  $('#checking-withdraw').on('click', function() {
    dollars = parseFloat($('#checking-amount').val());
    withdrawChecking(dollars);
    $('#checking-balance').html('$' + checkingBalance);
    $('#savings-balance').html('$' + savingsBalance);
    if (checkingBalance === 0) {
      $('#checking .balance').addClass('zero');
    }
    if (savingsBalance === 0) {
      $('#savings .balance').addClass('zero');
    }
  });

  // Deposit Savings, adds to balance + display
  $('#savings-deposit').on('click', function() {
    $('#savings .balance').removeClass('zero');
    dollars = parseFloat($('#savings-amount').val());
    depositSavings(dollars);
    $('#savings-balance').html('$' + savingsBalance);
  });

  // Withdraw savings, subtract from balance + display
  $('#savings-withdraw').on('click', function() {
    dollars = parseFloat($('#savings-amount').val());
    withdrawSavings(dollars);
    $('#savings-balance').html('$' + savingsBalance);
    $('#checking-balance').html('$' + checkingBalance);
    if (savingsBalance === 0) {
      $('#savings .balance').addClass('zero');
    }
    if (checkingBalance === 0) {
      $('#checking .balance').addClass('zero');
    }
  });

});
