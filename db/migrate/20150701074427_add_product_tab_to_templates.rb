class AddProductTabToTemplates < ActiveRecord::Migration
  def change
  	add_column :spree_templates, :product_tab, :string
  end
end
