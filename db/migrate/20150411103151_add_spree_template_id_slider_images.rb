class AddSpreeTemplateIdSliderImages < ActiveRecord::Migration
  def change
  	add_column :spree_slider_images, :template_id, :integer
  	add_column :spree_logos, :template_id, :integer
  	
  end
end

