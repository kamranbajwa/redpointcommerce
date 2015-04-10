class CreateThemeAndSliderImageObject < ActiveRecord::Migration
  def change
   Spree::Theme.create(:avatar_file_name=>"logo.png",:avatar_content_type=> "image/png",)
   Spree::SliderImage.create(:s_image_file_name=>"logo.png",:s_image_content_type=> "image/png",)

  end
end
