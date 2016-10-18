class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    Mountain.create mountain_params
    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params
    redirect_to mountain_path(mountain.id)
  end

  private
  def mountain_params
    params.require(:mountain).permit(:name, :location, :height, :first_ascent, :image)
  end

end # end of class MountainsController
