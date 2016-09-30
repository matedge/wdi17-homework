require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pry'

get '/' do
  erb :search
end

get '/details' do
  @movie = params[:title]
  url = "http://omdbapi.com?s=#{@movie}"
  movie_data = HTTParty.get url
  @movies_list = movie_data['Search'].each 

  # @poster = movie_data['Poster']
  # @movie_title = movie_data['Title']
  # @date = movie_data['Released']
  # @plot = movie_data['Plot']

  erb :details

end
