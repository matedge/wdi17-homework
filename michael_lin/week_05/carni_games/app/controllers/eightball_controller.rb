class EightballController < ApplicationController
  def move
  end

  def answer
    eightball_answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ]
    if params['question'] == ""
      @answer = "You did not ask a question"
    elsif params['question'].last == "?"
      @answer = eightball_answers.sample
    else
      @answer = "Try asking a proper question"
    end
  end # end of def answer
end #end of class
