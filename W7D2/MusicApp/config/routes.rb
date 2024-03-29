Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :new, :show]

  resources :bands do 
    resources :albums, only: [:new]
  end

  resource :session, only: [:new, :create, :destroy]

  resources :albums, except: [:index, :new] 
end
