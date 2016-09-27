/* ===== UI ===== */

$('.reset').on('click', function () {
  $('.board').fadeOut();
  reset();
  $('.board').fadeIn();
  $('.mOne').fadeOut();
  $('.reset').fadeOut();
});

var endGame = function () {
  $('.mOne').fadeIn();
  $('.reset').fadeIn();
}


var messageOutput = function (message) {
  $('.mOne').html(message)
};
var messageOutputTwo = function (message) {
  $('.mTwo').html(message)
};
var messageOutputThree = function (message) {
  $('.mThree').html(message)
};

var reset = function () {
  ticTacToe = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  moves = 0;

  $('#ticOne').html('');
  $('#ticTwo').html('');
  $('#ticThree').html('');

  $('#tacOne').html('');
  $('#tacTwo').html('');
  $('#tacThree').html('');

  $('#toeOne').html('');
  $('#toeTwo').html('');
  $('#toeThree').html('');
}

/* ===== PLAYER NAMES ===== */

$('#playerOneEnter').on('click', function () {
  var playerOne = $('#playerOneName').val();
  playerOneToken(playerOne);
});

$('#playerTwoEnter').on('click', function () {
  var playerTwo = $('#playerTwoName').val();
  playerTwoToken(playerTwo);
});


/* ===== SQUARE BUTTONS =====*/

$('#ticOne').on('click', function () {
  inputMark(0,0);
  $('#ticOne').html(ticTacToe[0][0])
});
$('#ticTwo').on('click', function () {
  inputMark(1,0);
  $('#ticTwo').html(ticTacToe[0][1])
});
$('#ticThree').on('click', function () {
  inputMark(2,0);
  $('#ticThree').html(ticTacToe[0][2])
});


$('#tacOne').on('click', function () {
  inputMark(0,1);
  $('#tacOne').html(ticTacToe[1][0]);
});
$('#tacTwo').on('click', function () {
  inputMark(1,1);
  $('#tacTwo').html(ticTacToe[1][1]);
});
$('#tacThree').on('click', function () {
  inputMark(2,1);
  $('#tacThree').html(ticTacToe[1][2]);
});

$('#toeOne').on('click', function () {
  inputMark(0,2);
  $('#toeOne').html(ticTacToe[2][0]);
});
$('#toeTwo').on('click', function () {
  inputMark(1,2);
  $('#toeTwo').html(ticTacToe[2][1]);
});
$('#toeThree').on('click', function () {
  inputMark(2,2);
  $('#toeThree').html(ticTacToe[2][2]);
});


/* ===== Bonus stuff ===== */

// var winX = function () {     // need to find a better way to clear squares if to implement
//   $('#ticOne').css('box-shadow', '0 0 20px red');
//   $('#ticTwo').css('background-color', 'darkred');
//   $('#ticThree').css('box-shadow', '0 0 20px red');
//   $('#tacOne').css('background-color', 'darkred');
//   $('#tacTwo').css('box-shadow', '0 0 20px red');
//   $('#tacThree').css('background-color', 'darkred');
//   $('#toeOne').css('box-shadow', '0 0 20px red');
//   $('#toeTwo').css('background-color', 'darkred');
//   $('#toeThree').css('box-shadow', '0 0 20px red');
// };
//
// var winO = function () {
//   $('#ticOne').css('box-shadow', '0 0 20px blue');
//   $('#ticTwo').css('box-shadow', '0 0 20px blue');
//   $('#ticThree').css('box-shadow', '0 0 20px blue');
//   $('#tacOne').css('box-shadow', '0 0 20px blue');
//   $('#tacTwo').css('background-color', 'darkblue');
//   $('#tacThree').css('box-shadow', '0 0 20px blue');
//   $('#toeOne').css('box-shadow', '0 0 20px blue');
//   $('#toeTwo').css('box-shadow', '0 0 20px blue');
//   $('#toeThree').css('box-shadow', '0 0 20px blue');
// };
