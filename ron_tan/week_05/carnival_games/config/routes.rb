Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/lucky' => 'lucky#show'
  get '/lucky/results' => 'lucky#results'

  get '/magic' => 'magic#show'
  get '/magic/results' => 'magic#results'

  get '/spr' => 'spr#show'
  get '/spr/results' => 'spr#results'
end
