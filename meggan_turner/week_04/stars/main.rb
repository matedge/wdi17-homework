require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/stars' do
  @stars = query_db "SELECT * FROM stars"
  erb :stars_index
end

get '/stars/new_star' do
  erb :new_star
end

post '/stars' do
  query = "INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('#{params['name']}', '#{params['type']}', '#{params['distance']}', '#{params['constellation']}', '#{params['description']}', '#{params['image']}')"
  query_db query
  redirect '/stars'
end

get '/stars/:id' do
  @star = query_db "SELECT * FROM stars WHERE id=#{params['id']}"
  @star = @star.first
  @star.to_s
  erb :star_show
end

get '/stars/:id/delete' do
  query_db "DELETE FROM stars WHERE id = #{params['id']}"
  redirect "/stars"
end

get '/stars/:id/edit' do
  @star = query_db "SELECT * FROM stars WHERE id = #{ params['id']}"
  @star = @star.first
  erb :edit_star
  # get data from db

end

post '/stars/:id' do
  query = "UPDATE stars SET name='#{params['name']}', constellation='#{params['constellation']}', distance='#{params['distance']}', type='#{params['type']}', image='#{params['image']}', description='#{params['description']}' WHERE id = #{params[:id]}"
  query_db query
  redirect "/stars/#{params[:id]}"
end


def query_db(sql)
  db = SQLite3::Database.new 'stars.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close

  result
end
