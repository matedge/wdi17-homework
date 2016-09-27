
var ticTacToe = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var turn = 0;
var token = ['X', 'O'];
var moves = 0;

var winCounter = [0,0];

var playerOneToken = function (player1) {
  token[0] = player1;
}

var playerTwoToken = function (player2) {
  token[1] = player2;
}

var win = function (player) {
  // rows
  for (var i = 0; i < ticTacToe.length; i++) {
    if (ticTacToe[i][0] === player && ticTacToe[i][1] === player && ticTacToe[i][2] === player) {
      return true;
    } else if (ticTacToe[0][i] === player && ticTacToe[1][i] === player && ticTacToe[2][i] === player) {
      return true;
    }
  }
  if (ticTacToe[0][0] === player && ticTacToe[1][1] === player && ticTacToe[2][2] === player) {
    return true;
  } else if (ticTacToe[0][2] === player && ticTacToe[1][1] === player && ticTacToe[2][0] === player) {
    return true;
  }
};

var inputMark = function (x, y) {
  // console.log(turn);
  if (ticTacToe[y][x] === "") {
    ticTacToe[y][x] = token[turn];
    for (var i = 0; i < ticTacToe.length; i++) {
      console.log(ticTacToe[i]);
    }
    if (win(token[turn])) {
      winCounter[turn] += 1;
      var messageOne  = 'Player ' + token[turn] + ' Wins';
      var messageTwo = 'Player ' + token[0] + "'s score: " + winCounter[0];
      var messageThree = 'Player ' + token[1] + "'s score: " + winCounter[1];

      messageOutput(messageOne);
      messageOutputTwo(messageTwo);
      messageOutputThree(messageThree);
      endGame();

      // if (token[turn] === token[0]) {
      //   winX();
      // } else  {
      //   winO();
      // }

    } else {
      turn = 1 - turn;
      moves += 1;
      console.log(token[turn] + "'s turn");
      if (moves === 9) {
        var messageOne  = "It's a DRAW!";
        var messageTwo = 'Player ' + token[0] + "'s score: " + winCounter[0];
        var messageThree = 'Player ' + token[1] + "'s score: " + winCounter[1];

        messageOutput(messageOne);
        messageOutputTwo(messageTwo);
        messageOutputThree(messageThree);
        endGame();
      }
    }
    return true;
  } else {
    turn;
    moves;
  }
};


/* ===== AI ===== *

button = switch between multiplayer vs AI

if turn === 1; // then AI move // player 2 move;

aiMove = function (player) {

// test for empty squares
// always place in middle square (1,1) first if empty.
// if (ticTacToe[1][1] === "") { inputMark(ai) === (ticTacToe[1][1])}
// else if ( check corners, if all corners are free ) { then place in random corner }
// else if ( a corner is taken,) { inputMark into random adjacent corner }
// now for rest of steps follow logic.

  for (var i = 0; i < ticTacToe.length; i++) {

  if (    //test for horizontal win. test for both player and AI.
  (ticTacToe[i][0] === player && ticTacToe[i][1] === player && ticTacToe[i][2] === "") ||
  (ticTacToe[i][0] === player && ticTacToe[i][1] === "" && ticTacToe[i][2] === player) ||
  (ticTacToe[i][0] === "" && ticTacToe[i][1] === player && ticTacToe[i][2] === player) ) {
  }
    inputMark in "" . can use this to test for player X and O
    // both ways AI would want to inputMark into empty square.


  if (    // test for vertical win.
  (ticTacToe[0][i] === player && ticTacToe[1][i] === player && ticTacToe[2][i] === "") ||
  (ticTacToe[0][i] === player && ticTacToe[1][i] === "" && ticTacToe[2][i] === player) ||
  (ticTacToe[0][i] === "" && ticTacToe[1][i] === player && ticTacToe[2][i] === player) ) {

  }

  // diagonals
  (ticTacToe[0][0] === player && ticTacToe[1][1] === player && ticTacToe[2][2] === "") ||
  (ticTacToe[0][0] === player && ticTacToe[1][1] === "" && ticTacToe[2][2] === player) ||
  (ticTacToe[0][0] === "" && ticTacToe[1][1] === player && ticTacToe[2][2] === player)


  (ticTacToe[0][2] === player && ticTacToe[1][1] === player && ticTacToe[2][0] === "") ||
  (ticTacToe[0][2] === player && ticTacToe[1][1] === "" && ticTacToe[2][0] === player) ||
  (ticTacToe[0][2] === "" && ticTacToe[1][1] === player && ticTacToe[2][0] === player)

} else {
  inputMark into an empty corner.
}



to test for where shouldnt put it // test which box wont allow for AI to win. use this as an else if at bottom.

(ticTacToe[i][0] === !player && ticTacToe[i][1] === player && ticTacToe[i][2] === "") ||
(ticTacToe[i][0] === player && ticTacToe[i][1] === !player && ticTacToe[i][2] === "") ||

(ticTacToe[i][0] === !player && ticTacToe[i][1] === "" && ticTacToe[i][2] === player) ||
(ticTacToe[i][0] === player && ticTacToe[i][1] === "" && ticTacToe[i][2] === !player) ||

(ticTacToe[i][0] === "" && ticTacToe[i][1] === !player && ticTacToe[i][2] === player) ||
(ticTacToe[i][0] === "" && ticTacToe[i][1] === player && ticTacToe[i][2] === !player) {

 inputMark in another square besides "".
}


*/
