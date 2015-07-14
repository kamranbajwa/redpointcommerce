class Spree::Admin::ComponentsController < Spree::Admin::ResourceController
  before_action :current_template

  def index
  end

  def edit 
  end

  def save_colors
    c = @current_template.first.components
    c.where(name: "Footer").first.update_columns(color: params[:footer]) rescue ''
    c.where(name: "Header").first.update_columns(color: params[:header]) rescue ''
    c.where(name: "Footer-Font").first.update_columns(color: params[:footer_font]) rescue ''
    c.where(name: "Header-Font").first.update_columns(color: params[:header_font]) rescue ''
    redirect_to admin_components_path, notice: "Successfully Updated"
  end

  private

  def current_template
    @current_template = Spree::Template.selected
  end
end
