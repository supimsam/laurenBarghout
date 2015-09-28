Rails.application.routes.draw do
 get '/' => "home#index"

 get '/blank' => "home#other"
 get '/publications' => "home#publications"
 get '/contact' => "home#contact"

 root 'home#index'
end
