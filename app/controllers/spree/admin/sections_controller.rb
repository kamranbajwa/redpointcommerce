class Spree::Admin::SectionsController < Spree::Admin::ResourceController
  before_action  :sections

  def index
  end
  def edit
    @section=Spree::Section.find(params[:id])
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
  def update_section_name
    #debugger
    current_section =Spree::Section.find(params[:id])
    if current_section.update_columns(name: params[:section_name])
      text = "updated"
      else
         text = "failed"
       end
       render :text=>text
  end
  def update
 respond_to do |format|
      if @section.update(section_params)
        flash[:success] = "Section was successfully Updated."
        format.html { redirect_to admin_sections_path}
        format.json { render action: 'index', status: :created, location: @widget }
      else
       flash[:error] = "#{@section.errors.full_messages.first}"
        format.html { redirect_to edit_admin_section_path(@section)}
        format.json { render json: @section.errors, status: :unprocessable_entity }
      end
    end
  end

  private
   
   def sections
    @sections = @selected_template.sections.all
   end
   def section_params
    params.require(:section).permit(:name, :visible)
   end

end