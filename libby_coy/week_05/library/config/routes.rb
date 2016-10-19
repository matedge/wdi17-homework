Rails.application.routes.draw do
  resources :authors
  resources :authors, :books
end
