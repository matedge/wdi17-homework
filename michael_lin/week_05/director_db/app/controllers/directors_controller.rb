class DirectorsController < ApplicationController
  def index
    @directors = Director.all
  end

  def new
    @director = Director.new
  end

  def create
    # raise params.inspect
    director = Director.create
    director_params
    redirect_to director
  end

  def destroy
    director = Director.find params[:id]
    director.destroy
    redirect_to directors_path
  end

  def edit
  end

  def update
  end

  def show
    @director = Director.find params[:id]
  end

  private
  def director_params
    params.require(:director).permit(:name, :dob, :nationality, :image)
  end
end
