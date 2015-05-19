SpreeExample::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  #resources :organizations

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  #match "spree/admin/imports" => "admin/imports#p_import", via: :post
  get '/aboutus', :to => 'spree/statics#aboutus'
  get '/contactus', :to => 'spree/statics#contactus'
  get '/faq', :to => 'spree/statics#faq'
  get '/termsandconditions', :to => 'spree/statics#termsandconditions'
  get '/privacypolicy', :to => 'spree/statics#privacypolicy'
  get '/page/(:id)', :to => 'spree/statics#pages'
  get '/messages'  ,       :to => 'spree/contacts#new'
  post '/messages'  ,       :to => 'spree/contacts#create'
  get 'v1/api/orders',      :to => 'v1/api#orders'
  get 'v1/api/products',      :to => 'v1/api#products'
  get 'v1/api/customers',      :to => 'v1/api#customers'
  
  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  mount Spree::Core::Engine, :at => "/"
  # Spree::Core::Engine.routes.prepend do
  # namespace :admin do
  # resources :themes
  # end
  # end
#  Spree::Core::Engine.routes.prepend do
#    match "/store/user/spree_user/logout", :to => redirect('/store/logout')
#  end
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
  Spree::Core::Engine.add_routes do
    namespace :admin do
      resources :logos
      resources :imports do
        collection { post :p_import }
        collection { post :cat_import }
      end
      resources :favicons 
      resources :slider_images
      resources :organizations
      resources :templates
      resources :cms_pages
      resources :api_users
      resources :email_templates
      end
    end
end



