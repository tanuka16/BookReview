class BooksController < ApplicationController
  def index
   books = Book.all
   render json: books
 end

 def show
   book = Book.find(params[:id])
   render json: book, include: [:reviews]
 end

 # def create
 #   @book = book.create(book_param)
 #   @book.save
 # end

#  def update
#    @book = Book.find(params[:id])
#    @book.update(book_param)
#  end
#
#  def destroy
#    @book = Book.find(params[:id])
#    @book.destroy
#  end
#
# private
#
#  def book_params
#    params.require(:book).permit(:title, :author, :genre)
#  end
end
