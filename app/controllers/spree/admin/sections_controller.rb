class Spree::Admin::SectionsController < Spree::Admin::ResourceController
  before_action :current_template, :sections

  def index
  end

  def update_sections
    @sections.update_all(visible: false)
    if params[:sections].present?
      @sections.each do |section|
        section.update_columns(visible: true) if params[:sections].include? section.name
      end
    end
    redirect_to admin_sections_path
  end

  private
   
   def current_template
    @current_template = Spree::Template.selected
   end

   def sections
    @sections = @current_template.first.sections.all
   end

end