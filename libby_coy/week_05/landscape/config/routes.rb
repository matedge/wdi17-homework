Rails.application.routes.draw do
  root :to => 'mountains#index'

  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id/edit' => 'mountains#edit', :as => 'mountain_edit'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  post '/mountains/:id/delete' => 'mountains#destroy', :as => 'mountain_delete'
  post '/mountains/:id' => 'mountains#update'
end
