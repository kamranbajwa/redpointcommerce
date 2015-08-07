class AddVendorSkuToSpreeProducts < ActiveRecord::Migration
  def change
  	add_column :spree_variants ,:vendor_sku,:string
  end
end
