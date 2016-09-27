var accounts = {
  total: function() {
    return this.checking.balance + this.savings.balance;
  },
  checking: {
    balance: 0,

    deposit: function (amount) {
      // FIXME: handle invalid data
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }
      this.balance += amount;
    },

    withdraw: function (amount) {
      amount = parseFloat(amount);
        // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }
      // FIXME: OverDraft
      // Is there enough money in the account?
      if (this.balance < amount) {
        var total = accounts.total();
        console.log(total, amount, total >= amount);
        if (total >= amount) {
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.savings.balance -= overdraft;
        }
        return;
      }
      this.balance -= amount;
    }
  },

  savings: {
    balance: 0,

    deposit: function (amount) {
      // FIXME: handle invalid data
      amount = parseFloat(amount);

      // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }
      this.balance += amount;
    },
    withdraw: function (amount) {
      amount = parseFloat(amount);

        // Handle invalid and negative amounts by returning early.
      if (isNaN(amount) || amount <= 0) {
        return;
      }

      // FIXME: OverDraft
      // Is there enough money in the account?
      if (this.balance < amount) {
        var total = accounts.total();
        if (total >= amount) {
          var overdraft = amount - this.balance;
          this.balance = 0;
          accounts.checking.balance -= overdraft;
        }
        return;
      }

      this.balance -= amount;

    } // end withdraw()
  } //end savings{}
};// End of Object
