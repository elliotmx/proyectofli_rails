Fli::Application.routes.draw do

  resources :invited_users

  resources :file_uploaders

  resources :pdf_previews

  resources :service_types

  resources :markets

  resources :questions

  resources :sections

  devise_for :users ,:path_prefix => 'auth', :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }#, :skip =>[:sessions]

  resources :users

  resources :comments

  resources :user_profiles

resources :applications do
  collection do
    get :list
  end
end

  resources :faculties

  resources :colleges

  resources :answers

  resources :dashboard do
    collection do
      get 'show_uaq_projects'
      get 'show_cecyteq_projects'
      get 'show_cetis_projects'
      get 'show_cobaq_projects'
      get 'show_conalep_projects'
    end
  end


  root :to => "home#index"

#Add a route method for close session
#devise_for :users,
as :user do
    get 'sign_out' => 'devise/sessions#destroy', :as => :destroy_user_session
end

  get 'qsomos', to: 'home#qsomos'

  get 'upload', to:  'file_uploader#index'

  match 'contact' => 'contact#new', :as => 'contact', :via => :get
  match 'contact' => 'contact#create', :as => 'contact', :via => :post

  get 'admin', to: 'dashboard#index'  


  get 'charts', to:'home#charts'
  get 'alumnosr', to:'home#alumnos'
  

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products


  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  namespace :admin do
       match '/' => 'users#index'
      resources :users
  end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
