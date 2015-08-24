class AddTaxCatIdAndShipCatIdToPrototype < ActiveRecord::Migration
  def up
  	add_column :spree_prototypes, :tax_category_id,:integer
  	add_column :spree_prototypes, :shipping_category_id,:integer
  end
   def down
  	remove_column :spree_prototypes, :tax_category_id,:integer
  	remove_column :spree_prototypes, :shipping_category_id,:integer
  end
end
