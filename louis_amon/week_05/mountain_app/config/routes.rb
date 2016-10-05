Rails.application.routes.draw do
  root :to => 'mountains#index'

  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  post '/mountains' => 'mountains#create'
  post '/mountains/:id/delete' => 'mountains#delete', :as => 'mountain_delete'

  post '/mountains/delete' => 'mountains#delete_all'

  get '/mountains/:id/edit' => 'mountains#edit', :as => 'mountain_edit'
  post '/mountains/:id' => 'mountains#update'
end
