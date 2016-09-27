// Global variables ////////////////////
bankAccounts = {
  checkingBalance: 0,
  savingsBalance: 0
};

$(document).ready(function() { // BEGIN DOCUMENT READY/////

// Put DOM from here down /////////////////////
// Checking UI/DOM ////////////////////////

// Check whether someone is poor or not:
  var poorCheckingChecker = function() {
    if ($('#checking-balance').text() === "$0") {
      $('#checking').css("background-color", "#f00")
    } else {
      $('#checking').css("background-color", "#6C9A74")
    }
  };

  var poorSavingsChecker = function() {
    if ($('#savings-balance').text() === "$0") {
      $('#savings').css("background-color", "#f00")
    } else {
      $('#savings').css("background-color", "#6C9A74")
    }
  };

// Call both functions:
  var checkIfPoor = function() {
    poorCheckingChecker();
    poorSavingsChecker();
  };

// The red hurt my eyes, so I made variables ///
  var checkingBal = bankAccounts.checkingBalance;
  var savingsBal = bankAccounts.savingsBalance;

// Checking Deposit UI/DOM ///
  $('#checking-deposit').on('click', function(){
    var getCheckingInput = +$('#checking-amount').val();

    checkDepositMoney(getCheckingInput);

    $('#checking-balance').text('$' + checkingBal);
    console.log('Current Checking Balance: ' + checkingBal);

    checkIfPoor();
  });

// Checking Withdraw UI/DOM ///
  $('#checking-withdraw').on('click', function() {
    var getCheckingInput = +$('#checking-amount').val();

    checkWithdrawMoney(getCheckingInput);

    $('#checking-balance').text('$' + checkingBal);
    $('#savings-balance').text('$'+ savingsBal);

    console.log('Current Checking Balance: ' + checkingBal);

    checkIfPoor();
  });


// Checking internal functions //////////////////////

// Checking Deposit Function ///
  var checkDepositMoney = function(amount) {
    checkingBal = checkingBal + amount;

    return checkingBal;
  };

// Checking Withdraw function ///
  var checkWithdrawMoney = function(amount) {
    if (amount > (checkingBal + savingsBal)) {

      alert("No. We're a bank, not a charity");
      console.log("No. We're a bank, not a charity");

    } else if (amount > checkingBal && amount <= (savingsBal + checkingBal)) {
      amount = amount - checkingBal;
      var saveBal = savingsWithdrawMoney(amount);
      checkingBal = 0;

      return bankAccounts = {
        checkingBalance: 0,
        savingsBalance: saveBal
      };

    } else {
      checkingBal = checkingBal - amount;
      return checkingBal;
    }
  };

// Savings UI/DOM ////////////////////////////////

// Savings Deposit UI/DOM ///
  $('#savings-deposit').on('click', function(){
    var getSavingsInput = +$('#savings-amount').val();

    savingsDepositMoney(getSavingsInput);

    $('#savings-balance').text('$' + savingsBal);
    console.log("current Savings Balance: " + savingsBal);

    checkIfPoor();
  });

// Savings Withdraw UI/DOM ///
  $('#savings-withdraw').on('click', function(){
    var getSavingsInput = +$('#savings-amount').val();

    savingsWithdrawMoney(getSavingsInput);

    $('#savings-balance').text('$'+ savingsBal);
    $('#checking-balance').text('$' + checkingBal);

    console.log("current Savings Balance: " + savingsBal)

    checkIfPoor();
  });


// Savings internal functions /////////////////////

// Savings Deposit Function ///
  var savingsDepositMoney = function(amount) {
    savingsBal = savingsBal + amount;

    return savingsBal;
  };

// Savings Withdraw Function ///
  var savingsWithdrawMoney = function(amount) {
    if (amount > (savingsBal + checkingBal)) {
      alert("No. We're a bank, not a charity")
      console.log("No. We're a bank, not a charity")
    } else if (amount > savingsBal && amount <= (savingsBal + checkingBal)){
      amount = amount - savingsBal;
      var checkBal = checkWithdrawMoney(amount);
      savingsBal = 0;

      return bankAccounts = {
        checkingBalance: checkBal,
        savingsBalance: 0
      };

    } else {
      savingsBal = savingsBal - amount;

    return savingsBal;
    }
  };

// Initialised color changer ///////////////////////////
checkIfPoor();

}); // END OF (DOCUMENT) READ ////////////////
