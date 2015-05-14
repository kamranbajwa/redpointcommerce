class AddRecumendedFieldToSpreeProducts < ActiveRecord::Migration
  def change
  	add_column :spree_products, :is_recommended,:boolean
  end
end
