class LuckyController < ApplicationController

  def show

  end

  def results
    @lucky_num = Random.rand(10)
    @user_num = params[:lucky]
  end

end
