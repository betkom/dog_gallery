class LikesController < ApplicationController
  before_action :find_dog

  def create
    if liked?
      redirect_to dog_path(@dog)
      flash[:notice] = "You already liked this dog"
    else
      @dog.likes.create(user_id: current_user.id)
      redirect_to dog_path(@dog)
    end
  end
  
  private
  def find_dog
   @dog = Dog.find(params[:dog_id])
  end

  def liked?
    Like.where(user_id: current_user.id, dog_id:
    params[:dog_id]).exists?
  end
end
