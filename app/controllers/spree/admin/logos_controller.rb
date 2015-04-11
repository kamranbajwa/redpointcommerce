class Spree::Admin::LogosController < Spree::Admin::ResourceController
  #before_action :set_theme, only: [:show, :edit, :update, :destroy]

  # GET /themes
  # GET /themes.json
  def index
    @logo = @selected_template.spree_logo
    @logo = Spree::Logo.first unless @logo 
    
    @favicon = @selected_template.spree_favicon
    @favicon = Spree::Favicon.first unless @favicon
    # @logos = Spree::Logo.all
  end

  # GET /themes/1
  # GET /themes/1.json
  def show
  end

  # GET /themes/new
  def new
    @logo = Spree::Logo.new
  end

  # GET /themes/1/edit
  def edit
  end

  # POST /themes
  # POST /themes.json
  def create
    @logo = Spree::Logo.new(theme_params)

    respond_to do |format|
      if @logo.save
        format.html { redirect_to admin_theme_path, notice: 'Theme was successfully created.' }
        format.json { render action: 'show', status: :created, location: @logo }
      else
        format.html { render action: 'new' }
        format.json { render json: @logo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /themes/1
  # PATCH/PUT /themes/1.json
  def update
   
    @selected_template.spree_logo.delete if @selected_template.spree_logo
    respond_to do |format|
      @logo = Spree::Logo.new(logo_params)
      @logo.template_id = @selected_template.id
      success = @logo.save 
      if success
        format.html { redirect_to  admin_logos_url, notice: 'Theme was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @logo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /themes/1
  # DELETE /themes/1.json
  def destroy
    @logo.destroy
    respond_to do |format|
      format.html { redirect_to themes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_theme
      @logo = Spree::Logo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def logo_params
       params.require(:logo).permit(:avatar)
    end
end
