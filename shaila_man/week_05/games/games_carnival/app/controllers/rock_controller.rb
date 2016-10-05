class RockController < ApplicationController
  def form
  end
  def result
    @player_choice = params[:choice].to_i
    @computer_choice = [1,2,3].sample

  end
end
