class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :check_template
  before_filter :load_pages
  before_filter :load_cart
  
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
    @selected_template = Spree::Template.find_by_template_no 1 
    end
    @favi_con = @selected_template.spree_favicon
    @logo_image = @selected_template.spree_logo
    @slider_image = @selected_template.spree_slider_images
     @org=Spree::Organization.first
  end
  def load_pages
    @cms_pages = @selected_template.cms_pages.order("sort asc")
    @about_us_page = @selected_template.cms_pages.find_by_title("about us")
  end
  def load_cart
    @order = current_order rescue nil
  end
end
