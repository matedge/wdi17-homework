class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    Mountain.create mountain_params
    redirect_to mountains_path
  end

  def edit
    @mountain = Mountain.find params[:id]
    # redirect_to mountain_path(@mountain.id)
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params

    redirect_to mountain_path(mountain.id)
  end

  def delete
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end

  def delete_all
    Mountain.all.each do | m |
      m.destroy
    end

    redirect_to mountains_path
  end

  private
  def mountain_params
    params.require(:mountain).permit(:name, :image, :height, :country, :mountain_type, :facts)
  end
end
