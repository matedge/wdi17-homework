require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'library.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :author
end

class  Author< ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

get '/books' do
  @books = Book.all
  erb :books_index
end

get '/books/new' do
  erb :books_new
end

get '/books/:id' do
  @book = Book.find params[:id]
  # binding.pry
  erb :books_show
end

get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy

  redirect '/books'
end

post '/books' do
  book = Book.new
  book.title = params[:title]
  book.genre = params[:genre]
  book.author_id = params[:author_id]
  book.year_published = params[:year_published]
  book.summary = params[:summary]
  book.image = params[:image]

  book.save
  redirect "/books/#{book.id}"
end

post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.genre = params[:genre]
  book.author_id = params[:author_id]
  book.year_published = params[:year_published]
  book.summary = params[:summary]
  book.image = params[:image]

  book.save
  redirect "/books/#{book.id}"
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
  author.bio = params[:bio]
  author.image = params[:image]
  author.save

  redirect '/authors'
end

get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.bio = params[:bio]
  author.image = params[:image]

  author.save
  redirect "/authors/#{author.id}"
end

get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy

  redirect '/authors'
end

after do
  ActiveRecord::Base.connection.close
end
