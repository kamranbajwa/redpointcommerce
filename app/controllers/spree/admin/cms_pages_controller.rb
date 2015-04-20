class Spree::Admin::CmsPagesController < Spree::Admin::ResourceController

  def index
  	current_template
  end

  def new
    @cms_page = Spree::CmsPage.new
  end

  def show
  end

  def edit
  end

  def create
    current_template
    params[:cms_page][:template_id] = @current_template.first.id
    @cms_page = Spree::CmsPage.new(cms_page_params)

    respond_to do |format|
      if @cms_page.save
        format.html { redirect_to admin_cms_pages_path, notice: 'Spree::Cms Page was successfully created.' }
        format.json { render action: 'index', status: :created, location: @cms_page }
      else
        format.html { render action: 'new' }
        format.json { render json: @cms_page.errors, status: :unprocessable_entity }
      end
    end

    puts params.inspect
  end

  def destroy
  end

  private
   def current_template
    @current_template = Spree::Template.selected
   end

   def cms_page_params
      params.require(:cms_page).permit(:title, :description, :template_id)
   end

end