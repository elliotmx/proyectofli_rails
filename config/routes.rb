Rails.application.routes.draw do

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

  get 'index2', to: 'home#index2'

  get 'qsomos', to: 'home#qsomos'

  get 'upload', to:  'file_uploader#index'

  resources :contact

  get 'adminjueces', to: 'dashboard#index'


  get 'charts', to:'home#charts'
  get 'alumnosr', to:'home#alumnos'
  get 'pterminados', to:'home#terminados'


  namespace :admin do
       get '/' => 'users#index'
      resources :users
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
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

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
