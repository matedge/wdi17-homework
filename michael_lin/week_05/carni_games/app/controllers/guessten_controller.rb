class GuesstenController < ApplicationController
  def guess
  end

  def result
    @secret_num = Random.rand(1..10)
    if params['result'].to_i == @secret_num
      @result = "You Guessed correct!"
    else
      @result = "WRONG YOU LOSE."
    end
  end # end of Def play
end # end of guessten contrlller
