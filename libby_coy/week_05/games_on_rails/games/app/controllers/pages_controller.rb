class PagesController < ApplicationController

  def home
    render :home #go and find home.html.erb
  end

  def eightball
  end

  def eightanswer
    @answer = ["It is certain", "Without a doubt", "Most likely", "Signs point to yes", "Ask again later", "Cannot predict now", "Don't count on it",  "My reply is no", "Very doubtful", "Outlook not so good"]
  end

  def secret
  end

  def secretanswer
    @guess = params[:secret_answer]
    @computerguess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample
    @lose = "You lost!"
    @win = "You win!"
  end

  def rock
  end

  def rockthrow
    @userthrow = params[:throw]
    @computerthrow = ["rock", "paper", "scissors"].sample
    @lose = "You lost and the computer won!"
    @win = "You won and the computer lost!"
    @draw = "You picked the same! go again"
  end

end
