class SprController < ApplicationController

  def show
  end

  def results
    choices = %w[scissors paper rock]
    @server_choice = choices[Random.rand(3)]
    @user_choice = params[:spr].downcase
  end

end
