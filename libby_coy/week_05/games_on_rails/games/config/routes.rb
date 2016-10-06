Rails.application.routes.draw do
  root :to => "pages#home"
  get '/pages/eightball' => 'pages#eightball'
  get '/pages/eightanswer' => 'pages#eightanswer'

  get '/pages/secret' => 'pages#secret'
  get '/pages/secretanswer' => 'pages#secretanswer'

  get '/pages/rock' => 'pages#rock'
  get '/pages/rockthrow' => 'pages#rockthrow'

end
