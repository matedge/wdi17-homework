// TODO:
// Refactor the code to use some kind of account factory to create our savings and checking accounts
// Create helper functions to simplify the ??

var accounts = {

  total: function () {
    return this.checking.balance + this.savings.balance;
  },

  checking: {
    balance: 0
    deposit: function (amount) {
      // FIXME: handle ivalid data
      amount = parseFloat(amount) //convert to number in logic
      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }
      this.balance += amount;
    },

    // FIXME: Overdraft | Is there enough money in the account?
    withdraw: function (amount) {
      amount = parseFloat(amount)
      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      if (this.balance < amount) {
        // Try to withdraw with overdraft;
        var total = account.total();
        if (total >= amount) {  //Sufficient funds
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.savings.balance -= overdraft;   // withdraw overdraft amount from the other account
        }
      } else {
          this.balance -= amount;
      }
    }
  },

  savings: {
    balance: 0
    deposit: function (amount) {
      // FIXME: handle ivalid data
      amount = parseFloat(amount) //convert to number in logic
      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }
      this.balance += amount;
    },

    // FIXME: Overdraft | Is there enough money in the account?
    withdraw: function (amount) {
      amount = parseFloat(amount)
      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return ;
      }

      if (this.balance < amount) {
        if (this.balance < amount) {
        // Try to withdraw with overdraft;
        var total = account.total();
        if (total >= amount) {  //Sufficient funds
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.checking.balance -= overdraft;   // withdraw overdraft amount from the other account
        }
      } else {
          this.balance -= amount;
      }
    }
  }
};
