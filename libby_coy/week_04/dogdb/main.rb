require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/dogs' do
#index page, lists all dogs in DB

  @all_dogs = query_db "SELECT * FROM dogs"

  erb :dogs_index

end

get '/dog/:id' do

  @dog_data = query_db "SELECT * FROM dogs WHERE id = #{ params['id'] }"
  @dog_data = @dog_data.first

  erb :dog_show

end

post '/dog/:id/edit' do

  query = "UPDATE dogs SET name = '#{ params['name']}', breed = '#{ params['breed']}', age = #{ params['age']}, derp_level = #{ params['derp_level']}, enthusiasm = #{ params['enthusiasm']} WHERE id = params['id'] "

  query_db query

  redirect "/dog/#{ params['id'] }"

end

get '/dog/:id/edit' do

  @dog_data = query_db "SELECT * FROM dogs WHERE id = #{ params['id']}"
  @dog_data = @dog_data.first

  erb :dog_edit
end

def query_db(sql)
  db = SQLite3::Database.new 'dogs.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close

  result # Implicit return
end
