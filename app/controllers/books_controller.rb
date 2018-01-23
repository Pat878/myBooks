class BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books.to_json
  end

  def show
    @book = Book.find(params[:id])
    render json: @book.to_json
  end

  def create
    @book = Book.create(book_params)
    render json: @book.to_json
  end

  def update
    @book = Book.find(params["id"])
    @book.update_attributes(book_params)
    render json: @book.to_json
  end

  def edit
  end

  def destroy
    Book.destroy(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :summary)
  end
end
