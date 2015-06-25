class Spree::Admin::TemplateImagesController < Spree::Admin::ResourceController
	def new
		@template_images = Spree::TemplateImage.new
	end

  def index
  end

	 def create
    if template_image_params[:avatar].length > 3
      redirect_to 'new' , notice: "Sorry more than 3 images can't be uploaded"
    else 
      respond_to do |format|
        @selected_template.template_images.delete_all
        template_image_params[:avatar].each do |image|
          @selected_template.template_images.create(:avatar => image)
        end
        format.html { redirect_to admin_template_images_path, notice: 'Template Images was successfully created.' }
        format.json { head :no_content }
      end
    end
	end

  private

  def template_image_params
      params.require(:template_image).permit(:avatar => [])
    end

end
