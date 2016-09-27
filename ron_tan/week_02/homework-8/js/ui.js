// // go with atm1.js
//
// $(document).ready( function () {
//
//   var updateUI = function () {
//
//     // Updates balances
//     $('#checking-balance').text(accounts.checking.balance);
//     $('#savings-balance').text(accounts.savings.balance);
//
//     if (accounts.checking.balance === 0) {  // Add or remove the 'zero' class
//       $('#checking-balance').addClass('zero');
//     } else {
//       $('#checking-balance').removeClass('zero');
//     }
//
//     if (accounts.savings.balance === 0) {  // Add or remove the 'zero' class
//       $('#savings-balance').addClass('zero');
//     } else {
//       $('#savings-balance').removeClass('zero');
//     }
//   };
//
//   var getCheckingAmount = function () {   // Clear the inputs for the next data input
//     var amount = $('#checking-amount').val();
//     $('#checking-amount').val('');
//     return amount;
//   }
//
//   $('#checking-deposit').on('click', function () {
//     var amount = getCheckingAmount();
//     accounts.checking.deposit(amount);
//     updateUI();
//   });
//
//   $('#checking-withdraw').on('click', function () {
//     var amount = getCheckingAmount();
//     accounts.checking.withdraw(amount);
//     updateUI();
//   });
//
//
//   //savings
//   var getSavingsAmount = function () {
//     return $('#savings-amount').val();
//     return amount;
//   }
//
//   $('#savings-deposit').on('click', function () {
//     var amount = getSavingsAmount();
//     accounts.savings.deposit(amount);
//     updateUI();
//   });
//
//   $('#savings-withdraw').on('click', function () {
//     var amount = getSavingsAmount();
//     accounts.savings.withdraw(amount);
//     updateUI();
//   });
//
//   updateUI();
// });
