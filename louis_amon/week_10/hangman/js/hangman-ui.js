var reset = function(){
  hangman.guessCount = 0;
  $('.blank').empty();
  $('.results').empty().hide();
  $('#hangman').children().hide();
  $('.letter').removeClass('clicked');
  $('.letter').css({opacity: 1});
  $('.show-lives').text("You have " + hangman.GUESSLIMIT + " chances remaining");
}

$(document).ready(function(){
  var letters = hangman.alphabets();
  var word = hangman.sampleWord();
  console.log("WORD FROM UI",word);

  var $guessedWord;

  var $results = $('.results');
  var $letters_div = $('.letter-options');
  var $blanks_div = $('.blanks');

  var $lives_div = $('.show-lives');
  $lives_div.text("You have " + hangman.GUESSLIMIT + " chances remaining");

  // Draw Alphabets
  _.each(letters, function(l){
    var $alpha_div = $('<div>')
                      .attr({class: 'letter ' + l})
                      .text(l);
    $alpha_div.appendTo($letters_div);
  });

  // Draw Blanks
  _.each(word, function(){
    var $blank_div = $('<div>').attr({class: 'blank'});
    $blank_div.appendTo($blanks_div);
  });

  // letter click function
  $('.letter').on('click',function(e){

    if($(e.currentTarget).hasClass('clicked')){ return }
    if(hangman.guessCount >= hangman.GUESSLIMIT) { return }

    $(e.currentTarget).addClass('clicked');
    $(e.currentTarget).css({
      opacity: 0.5
    });

    var clicked = e.currentTarget.innerHTML;

    if(hangman.letterMatch(word, clicked)){
      console.log(clicked);
      _.each(hangman.indicesMatch(word, clicked), function(i){
        $('.blank:eq('+ i +')').text(clicked);
      });
      $guessedWord = $('.blank').text();

      if(hangman.win(word, $guessedWord)){
        console.log("WE GOT HERE ---",word);
        $results.text("You Won!!");
        $results.show();
      }
    }
    else {
      hangman.guessCount++;
      $('#line_' + hangman.guessCount).show();
      $lives_div.text("You have " + (hangman.GUESSLIMIT - hangman.guessCount) + " chances remaining");
      if(hangman.lose(word, $guessedWord)){
        $results.text("You lost " + hangman.guessCount);
        $results.show();
      }
    }
  });

  $('button').click(function(){
    reset();
  });
});
