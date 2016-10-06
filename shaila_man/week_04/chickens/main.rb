require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end


get '/chickens' do
  @chickens = query_db 'SELECT * FROM chickens'
  erb :chickens_index
end

get '/chickens/new' do
  erb :chickens_new
end

post '/chickens' do
  # Insert the chicken data from the form into the database
  query = "INSERT INTO chickens (name, size, egg_colour, image) VALUES ('#{ params['name'] }', '#{ params['size'] }', '#{ params['egg_colour'] }', '#{ params['image'] }')"
  query_db query
  redirect '/chickens'
end

get '/chickens/:id' do
  @chicken = query_db "SELECT * FROM chickens WHERE id = #{ params['id'] }"
  @chicken = @chicken.first
  erb :chickens_show
end

get '/chickens/:id/delete' do
  # Delete the chicken from the Database
  query_db "DELETE FROM chickens WHERE id = #{ params['id'] }"
  redirect '/chickens'
end

get '/chickens/:id/edit' do
  # Fetch the current chicken data from the DB
  @chicken = query_db "SELECT * FROM chickens WHERE id = #{ params['id'] }"
  @chicken = @chicken.first # Pluck the chicken hash from the array
  erb :chickens_edit
end

post '/chickens/:id' do
  query = "UPDATE chickens SET name='#{ params['name'] }', size='#{ params['size'] }', size='#{ params['egg_colour'] }', image='#{ params['image'] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect "/chickens/#{ params[:id] }"
end




def query_db(sql)
  db = SQLite3::Database.new 'chickens.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close

  result # Implicit return
end
