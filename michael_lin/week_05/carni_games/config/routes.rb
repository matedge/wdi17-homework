Rails.application.routes.draw do
    root :to => 'pages#home'

    get '/spr' => 'spr#move'
    get '/spr/play' => 'spr#play'

    get '/eightball' => 'eightball#move'
    get '/eightball/answer'=> 'eightball#answer'

    get '/guessten' => 'guessten#guess'
    get '/guessten/result' => 'guessten#result'

end
