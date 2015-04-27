class Spree::Admin::CmsPagesController < Spree::Admin::ResourceController
  before_action :current_template, only: [:index, :new]

  def index
    @pages =  @current_template.first.cms_pages
  end

  def show
    render text: "show"
  end

  def new
    @cms_page = Spree::CmsPage.new
    @templates = Spree::Template.all.map {|a| [a.name, a.id]}
    @selected_template = @current_template.first.id
  end

  def edit
    @cms_page = Spree::CmsPage.find(params[:id])
    @templates = Spree::Template.all.map {|a| [a.name, a.id]}
  end

  def update
    respond_to do |format|
      if @cms_page.update(cms_page_params)
       format.html { redirect_to admin_cms_pages_path, notice: 'Spree::Cms Page was successfully updated.' }
        format.json { render action: 'index', status: :created, location: @cms_page }
      else
        format.html { render action: 'edit' }
        format.json { render json: @cms_page.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @cms_page = Spree::CmsPage.new(cms_page_params)

    respond_to do |format|
      if @cms_page.save
        format.html { redirect_to admin_cms_pages_path, notice: 'Spree::Cms Page was successfully created.' }
        format.json { render action: 'index', status: :created, location: @cms_page }
      else
        format.html { redirect_to new_admin_cms_page_path, notice: "#{@cms_page.errors.full_messages.first}"}
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
      params.require(:cms_page).permit(:title, :description, :template_id, :meta_tags, :meta_description, :tag_list, :sort, :static_flag)
   end

end