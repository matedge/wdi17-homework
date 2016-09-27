
// when #checking-deposit is clicked, add the current value in #checking-amount to #checking-balance

$(document).ready(function() {

  $('#checking #checking-deposit').on('click', function() {
    var deposit = +$('.account #checking-amount').val();
    var currentDeposit = +$('.account #checking-balance').text();
    $('.account #checking-balance').text(deposit + currentDeposit);

  });

  $('#checking #checking-withdraw').on('click', function() {
    var withdraw = +$('.account #checking-amount').val();
    var currentWithdraw = +$('.account #checking-balance').text();
    $('.account #checking-balance').text(currentWithdraw - withdraw);
  });


  $('#savings #savings-deposit').on('click', function() {
    var savDeposit = +$('.account #savings-amount').val();
    var currentSav = +$('.account #savings-balance').text();
    $('.account #savings-balance').text(savDeposit + currentSav);
  });


  $('#savings #savings-withdraw').on('click', function() {
    var savWithdraw = +$('.account #savings-amount').val();
    var currentSav = +$('.account #savings-balance').text();
    $('.account #savings-balance').text(currentSav - savWithdraw);
  });

// When the balance of the bank account is $0 the background of that bank account should be red;

  $('#checking').on('click', function() {
  if (+$('.account #checking-balance').text() === 0) {
      $("#checking-balance").css("background-color", "red");
    } else {
      $("#checking-balance").css("background-color", "#E3E3E3");
    }
  });

  $('#savings').on('click', function() {
    if (+$('.account #savings-balance').text() === 0) {
      $("#savings-balance").css("background-color", "red");
    } else {
      $("#savings-balance").css("background-color", "#E3E3E3");
    }
  });


});
