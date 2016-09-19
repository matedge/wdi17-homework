var accountFactory = function(name, currentBalance) {
  return {
    name: name,
    currentBalance: currentBalance,
    deposit: function(amount) {
       return this.currentBalance += parseInt(amount);
    },
    withdraw: function(amount) {
        return this.currentBalance -= parseInt(amount);
    }
  }
};

var accounts = [
  accountFactory('checking', 0),
  accountFactory('savings', 0)

];

var bank = {
  accountInfo: accounts,
  withdrawBoth: false,
  savingsBalance: function() {
    for(var i = 0; i < this.accountInfo.length; i++) {
      var account = this.accountInfo[i];
      if(account.name === 'savings') {
        return account.currentBalance;
      }
    }
  },
  checkingBalance: function() {
    for(var i = 0; i < this.accountInfo.length; i++) {
      var account = this.accountInfo[i];
      if(account.name === 'checking') {
        return account.currentBalance;
      }
    }
  },
  deposit: function(name, amount) {
    for(var i = 0; i < this.accountInfo.length; i++) {
      var account = this.accountInfo[i];
      if(account.name === name) {
        account.deposit(amount);
      }
    }
  },
  withdraw: function(name, amount) {
    var account1 = this.accountInfo[0];
    var account2 = this.accountInfo[1];
    var remainingAmount = amount;

    if(account1.name === name) {
      if(amount > account1.currentBalance && amount <= this.sumAccounts()) {
        withdrawBoth = true;
        remainingAmount -= account1.currentBalance;
        account1.withdraw(account1.currentBalance);
        console.log(amount);
        account2.withdraw(remainingAmount);
        console.log(remainingAmount)
      }
      else {
        withdrawBoth = false;
        account1.withdraw(amount);
      }
    }
    else if(account2.name === name) {
      if(amount > account2.currentBalance && amount <= this.sumAccounts()) {
        withdrawBoth = true;
        remainingAmount -= account2.currentBalance;
        account2.withdraw(account2.currentBalance);
        console.log(amount);
        account1.withdraw(remainingAmount);
        console.log(remainingAmount)
      }
      else {
        withdrawBoth = false;
        account2.withdraw(amount);
      }
    }
    else {

    }
  },
  transfer: function(account1, account2, amount) {
    for(var i = 0; i < this.accountInfo.length; i++) {
        var account = this.accountInfo[i];
        if(account.name === account1) {
          account.withdraw(amount);
        }
        if(account.name === account2) {
          account.deposit(amount);
        }
    }
  },

  sumAccounts: function() {
    var total = 0;
    for(var i = 0; i < this.accountInfo.length; i++) {
      var account = this.accountInfo[i];
      total += parseInt(account.currentBalance);
    }
    return total;
  }
};

var zeroBalance = function(accountBalance) {
  if(accountBalance === 0){
    return true;
  }
  else {
    return false;
  }
};


var updateUI = function(name) {
  for(var i = 0; i < accounts.length; i++) {
    var account = accounts[i];
    if(bank.withdrawBoth) {
      if(account.name === name) {
        $('#' + account.name).addClass('zero');
        $('#' + account.name + '-balance').text('$'+ account.currentBalance);
      }
      else {
        if(zeroBalance(account.currentBalance)) {
          $('#' + account.name).addClass('zero');
          $('#' + account.name + '-balance').text('$'+ account.currentBalance);
        }
        else {
          $('#' + account.name).removeClass('zero');
          $('#' + account.name +'-balance').text('$'+ account.currentBalance);
        }
      }
    }
    else {
      if(account.name === name) {
        if(zeroBalance(account.currentBalance)) {
          $('#' + account.name).addClass('zero');
          $('#' + account.name + '-balance').text('$'+ account.currentBalance);
        }
        else {
          $('#' + account.name).removeClass('zero');
          $('#' + account.name +'-balance').text('$'+ account.currentBalance);
        }
      }
    }
  }

  // var checkingBalance = bank.checkingBalance();
  //
  // if(bank.withdrawBoth)
  // {
  //   if(checkingBalance === 0){
  //     $('#checking').addClass('zero');
  //     $('#checking-balance').text('$'+ checkingBalance);
  //   }
  //   else {
  //     $('#checking-balance').text('$'+ checkingBalance);
  //   }
  //
  //   var savingsBalance = bank.savingsBalance();
  //   if(savingsBalance === 0){
  //     $('#checking').addClass('zero');
  //     $('#savings-balance').text('$'+ savingsBalance);
  //   }
  //   else {
  //     $('#savings-balance').text('$'+ savingsBalance);
  //   }
  // }
  //

};

$(document).ready(function() {
  $('#checking-deposit').on('click', function() {
    var $amount = parseInt($('#checking-amount').val());
    bank.deposit('checking', $amount);
    updateUI('checking');
  })

  $('#checking-withdraw').on('click', function() {
      var $amount = parseInt($('#checking-amount').val());
      bank.withdraw('checking', $amount);
      updateUI('checking');
    })

    $('#savings-deposit').on('click', function() {
        var $amount = parseInt($('#savings-amount').val());
        bank.deposit('savings', $amount);
        updateUI('savings');
      })

      $('#savings-withdraw').on('click', function() {
          var $amount = parseInt($('#savings-amount').val());
          bank.withdraw('savings', $amount);
          updateUI('savings');
        })


});
