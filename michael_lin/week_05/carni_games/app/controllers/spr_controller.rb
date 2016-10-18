class SprController < ApplicationController
  def move
  end

  def play
    computer_moves = ['rock', 'paper', 'scissors']
    computer_play = computer_moves.sample

    draw = "Same choice. It's a draw!"
    win1 = "Scissors You win. So cool. "
    win2 = "Paper! You win, yay."
    win3 = "Rock! You win, no prize, because we are cheap. "
    lose = "Fuck you, you lose."

    if params['play'] == computer_play
      @result = draw
    elsif params['play'] == "rock" && computer_play == "scissors"
      @result = win1
    elsif params['play'] == "scissors" && computer_play == "paper"
      @result = win2
    elsif params['play'] == "paper" && computer_play == "rock"
      @result = win3
    else
      @result = lose
    end
  end # end of def play
end #end of sprController
