class ReviewsController < ApplicationController
  def index
   review = Review.all
   render json: review
 end
 def show
   review = Review.find(params[:id])
   render json: review
 end
 def create
   # byebug
    review = Review.create(review_params)
    review.save
    render json: review
  end
  def destroy
     review = Review.find(params[:id])
     review.destroy
     render json: review
   end

  private

   def review_params
     params.permit(:book_id, :content)
   end
end
