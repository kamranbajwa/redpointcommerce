class AddColumnTemplateId < ActiveRecord::Migration
  def change
  	add_column :spree_slider_images, :template_id, :integer
  end
end
