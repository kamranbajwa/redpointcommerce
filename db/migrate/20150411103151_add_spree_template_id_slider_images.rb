class AddSpreeTemplateIdSliderImages < ActiveRecord::Migration
  def change
  	add_column :spree_slider_images, :template_id, :integre
  	add_column :spree_logos, :template_id, :integre
  end
end

