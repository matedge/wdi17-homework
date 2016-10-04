class RpsController < ApplicationController
  def form
  end

  def answer
    @computer_choice = %w{Rock Paper Scissors}
    @computer_choice = @computer_choice.sample
    @user_choice = params[:user_choice]

  end
end
