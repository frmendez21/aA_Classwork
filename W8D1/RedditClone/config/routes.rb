Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show] do 
    resources :subs, only: [:create]
  end 
  resource :session, only: [:new, :create, :destroy]
  resources :subs, except: [:create] do 
    resources :posts, only: [:new, :create]
  end
  resources :posts, except: [:new, :create] do 
    resources :comments, only:[:new, :index]
  end
  resources :comments, only:[:create]
end
