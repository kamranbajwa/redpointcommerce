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
  get '/contact-us'  ,       :to => 'spree/contacts#new'
  post '/contact-us'  ,       :to => 'spree/contacts#create'
  get 'v1/api/orders',      :to => 'v1/api#orders'
  get 'v1/api/products',      :to => 'v1/api#products'
  get 'v1/api/customers',      :to => 'v1/api#customers'
  post 'v1/api/add_product',      :to => 'v1/api#add_product'
  # subscription email
  post '/subcription' , :to =>'spree/statics#subcriptions'
  post '/account_charge', :to => 'spree/statics#account_charge'
  post '/compare_results', :to => 'spree/products#products_compare'
  get '/account_user', :to => 'spree/statics#account_user'
  # end of sub email
  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  mount Spree::Core::Engine, :at => "/"
  # Spree::Core::Engine.routes.prepend do
  # namespace :admin do
  # resources :themes
  # end
  Spree::Core::Engine.add_routes do
    namespace :api, defaults: { format: 'json' } do
      resources :line_items
    end
    namespace :admin do
      resources :dashboard
      resources :logos
      resources :imports do
        collection { post :p_import }
        collection { post :cat_import }
        collection {post :variants_import }
      end
      resources :favicons 
      resources :widgets
      resources :return_authorization_reasons
      resources :sections do
        collection { post :update_sections }
        collection {patch :update_section_name}
      end
      resources :components do
        collection { post :save_colors }
      end
      resources :slider_images
      resources :organizations
      resources :templates
      resources :template_images
      resources :cms_pages do
      collection { patch :update_page_order }
      collection { get :static}
    end
    resources :versions do
        collection { get :products_versions }
        collection { get :users_versions }
        collection { get :show_product_version }
        collection { get :orders_versions }
        collection { get :all_user }
        collection { get :address_versions }
      end
      resources :api_users
      resources :promotion_emails do 
        member { get :select_user }
        member { get :send_emails }
      end
      resources :email_templates
      resources :blogs
      resources :users do
        member { get :select_group }
        member { get :assign_group }
      end
      end
    end
end
