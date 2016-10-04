require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'books.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :author
end

class Author < ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

# Index
get '/books' do
  @books = Book.all
  erb :books_index
end

get '/books/new' do
  erb :books_new
end

post '/books' do
  book = Book.new
  book.name = params[:name]
  book.genre = params[:genre]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect "/books/#{ book.id }"
end

get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect '/books'
end

get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.genre = params[:genre]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect "/books/#{ book.id }"
end

get '/authors' do
  @authors = Author.all
  erb :authors_index
end

get '/authors/new' do
  erb :authors_new
end

post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect "/authors/#{ author.id }"
end

get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect '/authors'
end

get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect "/authors/#{ author.id }"
end

after do
  ActiveRecord::Base.connection.close
end
