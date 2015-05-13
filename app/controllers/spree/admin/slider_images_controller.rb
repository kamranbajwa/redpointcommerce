class Spree::Admin::SliderImagesController < Spree::Admin::ResourceController
  before_action :set_slider_image, only: [:show, :edit, :update, :destroy]

  # GET /slider_images
  # GET /slider_images.json
  def index
    @slider_images = @selected_template.spree_slider_images
    @slider_image = Spree::SliderImage.first
  end

  # GET /slider_images/1
  # GET /slider_images/1.json
  def show
     redirect_to :admin_slider_images , notice: 'Slider image was not updated. Please try again'
  end

  # GET /slider_images/new
  def new
    @slider_image = Spree::SliderImage.new
  end

  # GET /slider_images/1/edit
  def edit

  end

  # POST /slider_images
  # POST /slider_images.json
  def create
    @slider_image = Spree::SliderImage.new(slider_image_params)

    respond_to do |format|
      if @slider_image.save
        format.html { redirect_to admin_slider_image_path(@slider_image), notice: 'Slider image was successfully created.' }
        format.json { render action: 'show', status: :created, location: @slider_image }
      else
        format.html { render action: 'new' }
        format.json { render json: @slider_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /slider_images/1
  # PATCH/PUT /slider_images/1.json
  def update

    @selected_template.spree_slider_images.delete_all
       # puts "sjkfdsdjkf", image.inspect
          # puts "asdasdsadasdasdasdasdas", slider_image_params.inspect
          # sdlkfj
    respond_to do |format|
      if slider_image_params.size > 0
        slider_image_params[:slider_image].each do |image|
       
        @selected_template.spree_slider_images.create(:slider_image => image)
      end
        format.html { redirect_to admin_slider_images_url , notice: 'Slider image was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @slider_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slider_images/1
  # DELETE /slider_images/1.json
  def destroy
    @slider_image.destroy
    respond_to do |format|
      format.html { redirect_to slider_images_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_slider_image
      @slider_image = Spree::SliderImage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def slider_image_params
      # puts "dsfmnsmfbsdf", params.inspect
      # puts "sdfsdfsdfsdf", params[:slider_image] 
      params.require(:slider_image).permit(:slider_image => [])
    end
end
