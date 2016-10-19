class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      redirect_to root_path # Sign up was successful
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  private
  def user_params
    params.require(:user).permit(:email, :image, :name, :password, :password_confirmation)
  end

end
