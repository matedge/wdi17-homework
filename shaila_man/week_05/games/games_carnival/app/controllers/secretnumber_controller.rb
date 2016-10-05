class SecretnumberController < ApplicationController
  def form
  end
  def result
    @result = params[:guess].to_i

    @random_number = [1,2,3,4,5,6,7,8,9,10].sample

  end
end
