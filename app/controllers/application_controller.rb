class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :check_template
  before_filter :load_pages, :check_group
  before_filter :load_cart, :home_content, :customize_pages, :static_pages
  
  def after_sign_in_path_for(resource)
    if spree_current_user.has_spree_role?("admin")
      admin_path
    else
      root_path
    end
  end
  def check_template
    @selected_template = Spree::Template.find_by_selected true
    unless @selected_template
    @selected_template = Spree::Template.find_by_template_no(1) 
    end
    @favi_con = @selected_template.spree_favicon
    @logo_image = @selected_template.spree_logo
    @slider_image = @selected_template.spree_slider_images
     @org=Spree::Organization.first
  end
  def load_pages
    @cms_pages = @selected_template.cms_pages.dynamic.order("sort asc")
    @about_us_page = @selected_template.cms_pages.find_by_title("about us")
  end
  def load_cart
    @order = current_order rescue nil
  end
  def home_content
    @home_content = @selected_template.cms_pages.find_by_title("Home") rescue nil
  end
  def customize_pages
    @customize_pages = @cms_pages.reject { |h| h['title'] == "Home" || h['title'] == "About us" || h['title'] == "about us" }
    @about_page = @cms_pages.select { |h| h['title'] == "About us" || h['title'] == "About Us"  }
  end
  def static_pages
    @static_pages = @selected_template.cms_pages.static.order("sort asc").limit(4)
  end
  def check_group
    if spree_current_user
      @user_group =  spree_current_user.user_group.try(:name)
      Spree::LineItem.user_role = @user_group
    end
  end
end
