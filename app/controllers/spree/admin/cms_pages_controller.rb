class Spree::Admin::CmsPagesController < Spree::Admin::ResourceController
  before_action :current_template, only: [:index, :new, :create]
  before_action :get_templates, only: [:new, :edit, :update, :create]

  def index
    @pages =  @current_template.first.cms_pages.order("sort asc")
  end

  def show
    render text: "show"
  end

  def new
    @cms_page = Spree::CmsPage.new
    @select_template = @current_template.first.id
  end

  def edit
    @cms_page = Spree::CmsPage.find(params[:id])
  end

  def update
    respond_to do |format|
      if @cms_page.update(cms_page_params)
       format.html { redirect_to admin_cms_pages_path, notice: 'Cms Page was successfully updated.' }
        format.json { render action: 'index', status: :created, location: @cms_page }
      else
        flash[:error] = "#{@cms_page.errors.full_messages.first}"
        format.html { redirect_to edit_admin_cms_page_path(@cms_page)}
        format.json { render json: @cms_page.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @cms_page = Spree::CmsPage.new(cms_page_params)

    respond_to do |format|
      if @cms_page.save
        format.html { redirect_to admin_cms_pages_path, notice: 'CMS Page was successfully created.' }
        format.json { render action: 'index', status: :created, location: @cms_page }
      else
        flash[:error] = "#{@cms_page.errors.full_messages.first}"
        format.html { render action: 'new'}
        format.json { render json: @cms_page.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @page = Spree::CmsPage.find(params[:id])
    if @page.destroy
      flash[:notice] = "Successfully Deleted"
      redirect_to admin_cms_pages_path
    end
  end

  private
   def current_template
    @current_template = Spree::Template.selected
   end

   def cms_page_params
  
      params.require(:cms_page).permit(:title, :description, :template_id, :meta_tags, :meta_description, :tag_list, :sort, :default_flag, :static_flag, :page_id, :avatar)
   end

   def get_templates
      @templates = Spree::Template.all.map {|a| [a.name, a.id]}
   end

end