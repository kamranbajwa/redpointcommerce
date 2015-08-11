class AddVariantDisplayOptionToTemplate < ActiveRecord::Migration
  def change
  	remove_column :spree_templates, :product_tab
  	add_column :spree_templates, :variant_display_type, :boolean, :default => false
  end
end
