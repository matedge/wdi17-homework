require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :form
end

get '/posterpage' do
  @title = params[:movie_title]

  url = "http://omdbapi.com/?t=#{ @title }"
  movie_data = HTTParty.get url

  @plot = movie_data["Plot"]
  @poster = movie_data["Poster"]
  @genre = movie_data["Genre"]
  @imdbID = movie_data["imdbID"]

  similar_movies_url = "http://omdbapi.com/?s=#{ @title }"
  @similar_movies_data = HTTParty.get similar_movies_url

  erb :posterpage
end

get '/about' do
  erb :about
end
