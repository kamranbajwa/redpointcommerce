class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :check_theme
  
  def after_sign_in_path_for(resource)
    if spree_current_user.has_spree_role?("admin")
      admin_path
    else
      root_path
    end
  end
  def check_theme
    @theme =   Spree::Template.find_by_selected true
    @logo_image=Spree::Theme.last.avatar.url
    @slider_image=Spree::SliderImage.last.s_image.url
  end
end
