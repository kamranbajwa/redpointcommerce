class AddOverlayTextToSliderImages < ActiveRecord::Migration
  def change
  	add_column :spree_slider_images,:overlay_text,:text
  	add_column :spree_slider_images,:link_to_page,:string
  end
end
