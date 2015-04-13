class AddColumnsToTemplates < ActiveRecord::Migration
  def change
  	# add_column :spree_slider_images, :template_id, :integer
  	add_column :spree_logos, :template_id, :integer
  	add_index :spree_favicons, :template_id
  	add_index :spree_slider_images, :template_id
  	add_index :spree_logos, :template_id
  end
end
