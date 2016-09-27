// Keep track of the checking and savings balances somewhere

    var checkBalance = 0;
    var savBalance = 0;

    // write functions for checking deposit and savings deposit

    var valueChecking = function() { $("#checking-amount").text('$' + checkBalance); // need to parseInt
    }

    var valueSav = function() {
    $("#savings-amount").text($ + checkingBalance);
    };

    var onButtonClick = function() {
      console.log('clicked!');
    };

    $('#checking-deposit').on('click', onButtonClick);

    $('checking-deposit').on('click', function () {
      console.log('clicked!');
    });

    $('checking-deposit').click(onButtonClick);


    // write functions for checking deposit and savings deposit


    // Add functionality so that a user can deposit money into one of the bank accounts.

    // when a user adds money to valueChecking, parseInt(that value) + whatever the current value of #checking-balance is, then update #checking-balance using .replace

    // $("#checking-deposit").on("click", function() {
    // //   // on click, replace current value of checking-amount to curVal + inputVal
    // parseInt("#checking-amount").val +
