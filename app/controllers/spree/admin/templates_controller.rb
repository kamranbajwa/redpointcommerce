class Spree::Admin::TemplatesController < Spree::Admin::ResourceController
  before_action :set_template, only: [:show, :edit,  :destroy]
  # GET /templates
  # GET /templates.json
  def index
    @templates = Spree::Template.all
  end

  # GET /templates/1
  # GET /templates/1.json
  def show
    redirect_to :admin_templates,  notice: 'Template was not updated.Please try again'
  end

  # GET /templates/new
  def new
    @template = Spree::Template.new
  end

  # GET /templates/1/edit
  def edit
    @template=Spree::Template.find(params[:id])
  end

  # POST /templates
  # POST /templates.json
  def create
    @template = Spree::Template.new(template_params)

    respond_to do |format|
      if @template.save
        format.html { redirect_to @template, notice: 'Template was successfully created.' }
        format.json { render action: 'show', status: :created, location: @template }
      else
        format.html { render action: 'new' }
        format.json { render json: @template.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /templates/1
  # PATCH/PUT /templates/1.json
  def update
    Spree::Template.update_all(:selected => false)
    @template = Spree::Template.find(params[:id])
    @template.selected = true
    @template.theme_color = params[:template][:theme_color]
    @template.product_tab = params[:template][:product_tab]
    respond_to do |format|
      if @template.save!
        format.html { redirect_to admin_templates_path, notice: 'Template was successfully updated.' }
        format.json { head :no_content }
      else
        flash[:error] = "#{@template.errors.full_messages.first}"
        format.html { redirect_to admin_templates_path }
        format.json { render json: @template.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /templates/1
  # DELETE /templates/1.json
  def destroy
    @template.destroy
    respond_to do |format|
      format.html { redirect_to templates_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_template
      @template = Spree::Template.find(params[:id])
      # puts "ddsfsfsdfsdf",@template.inspect
      # puts "ddsfsfsdfsdf",@template.inspect
      # put
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def template_params
      params.require(:template).permit(:selected,:theme_color,:template_no,:name, :product_tab)
      #params[:template]
    end
end
