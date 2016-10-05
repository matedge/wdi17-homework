require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :form
end

get '/movies' do

  @title = params[:movies]

  url = "http://omdbapi.com/?s=#{ @title }"

  movie_data = HTTParty.get url
  @results = movie_data["Search"]

  # @urls = []
  # (1..movie_data['Search'].length).each do |n|
  #   @urls << movie_data['Search'][n]['Poster']
  # end
  # @poster = movie_data['Poster']

  erb :movies

end
