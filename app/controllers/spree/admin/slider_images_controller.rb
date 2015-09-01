class Spree::Admin::SliderImagesController < Spree::Admin::ResourceController
  before_action :set_slider_image, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # GET /slider_images
  # GET /slider_images.json
  def index
    @slider_images = @selected_template.spree_slider_images
    @slider = Spree::SliderImage.new
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
    @image = open(@slider_image.slider_image.url)
  end

  # POST /slider_images
  # POST /slider_images.json
  def create
    if   (@selected_template.spree_slider_images.length+slider_image_params[:slider_image].length) > 5
    redirect_to :admin_slider_images , notice: "Sorry more than 5 images can't be uploaded, Please Delete some old"
    else
   #Spree::SliderImage.delay.put_slider_images(@selected_template,slider_image_params[:slider_image])
    respond_to do |format|
      if slider_image_params.size > 0
        slider_image_params[:slider_image].each do |img|
          @selected_template.spree_slider_images.create(:slider_image => img)        #Spree::SliderImage.put_slider_images(@selected_template,img)
        end
        format.html { redirect_to admin_slider_images_url , notice: 'Slider image was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @slider_image.errors, status: :unprocessable_entity }
      end
    end
    end
  end


  # PATCH/PUT /slider_images/1
  # PATCH/PUT /slider_images/1.json
  def update
    respond_to do |format|
      if @slider_image.update(edit_slider_params)
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
      format.html { redirect_to admin_slider_images_url,  success: 'Slider image successfully deleted'  }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_slider_image
      @slider_image = Spree::SliderImage.find(params[:id])
    end
    def edit_slider_params
      params.require(:slider_image).permit(:slider_image,:overlay_text,:link_to_page)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def slider_image_params
      params.require(:slider_image).permit({:slider_image=>[]})
    end
end
