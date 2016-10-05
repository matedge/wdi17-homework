require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/dogs' do
  # index page, list all dogs in DB
  @all_dogs = query_db "SELECT * FROM dogs"
  erb :dogs_index
end

get '/dogs/new' do
  erb :dogs_new
end

post '/dogs' do
  query = "INSERT INTO dogs (name, breed, age, derp_level, enthusiasm) VALUES ('#{params['name']}', '#{params['breed']}', '#{params['age']}', '#{params['derp_level']}', '#{params['enthusiasm']}')"
  query_db query
  redirect "/dogs"
end

get '/dogs/:id' do
  @dog_data = query_db "SELECT * FROM dogs WHERE id = #{params['id']}"
  @dog_data = @dog_data.first
  erb :dog_show
end

post '/dogs/:id' do
  params.to_s
  query = "UPDATE dogs SET name = '#{params['name']}', breed = '#{params['breed']}', age = '#{params['age']}', derp_level = '#{params['derp_level']}', enthusiasm = '#{params['enthusiasm']}' WHERE id = #{params[:id]}"
  query_db query
  redirect "/dogs/#{params[:id]}"
end

get '/dogs/:id/edit' do
  @dog_data = query_db "SELECT * FROM dogs WHERE id = #{params['id']}"
  @dog_data = @dog_data.first
  erb :dog_edit
end

get '/dogs/:id/delete' do
  # Delete the dog from the Database
  query_db "DELETE FROM dogs WHERE id = #{ params['id'] }"
  redirect '/dogs'
end

def query_db(sql)
  db = SQLite3::Database.new 'dogs.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close

  result # Implicit return
end
