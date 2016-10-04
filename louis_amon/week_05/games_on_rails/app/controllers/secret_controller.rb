class SecretController < ApplicationController
  def form
  end

  def answer
    @guess = params[:secret_number].to_i
    @secret_number = rand(0..10)
    @message = ""
    if @guess == @secret_number
      @message = "You have won, the secret number is"
    else
      redirect_to "/secret?guess=#{@guess}"
    end
  end
end
