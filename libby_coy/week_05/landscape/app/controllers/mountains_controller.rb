class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def edit
    @mountain = Mountain.find params[:id]
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

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  private
  def mountain_params # Strong Parameters
    params.require(:mountain).permit(:name, :image, :height, :hiking_trail, :water, :location)
  end

end
