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
  # blog page  
  get '/blog', :to => 'spree/statics#blog'
  get '/blog/(:permalink)', :to => 'spree/statics#show_post'
  # End
  get '/messages'  ,       :to => 'spree/contacts#new'
  post '/messages'  ,       :to => 'spree/contacts#create'
  get 'v1/api/orders',      :to => 'v1/api#orders'
  get 'v1/api/products',      :to => 'v1/api#products'
  get 'v1/api/customers',      :to => 'v1/api#customers'
  # subscription email
  post '/subcription' , :to =>'spree/statics#subcriptions'
  # end of sub email
  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  mount Spree::Core::Engine, :at => "/"
  # Spree::Core::Engine.routes.prepend do
  # namespace :admin do
  # resources :themes
  # end
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
      resources :promotion_emails do 
        member { get :select_user }
        member { get :send_emails }
      end
      resources :email_templates
      resources :blogs
      end
    end
end
