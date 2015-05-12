class PostalCodeTypeChange < ActiveRecord::Migration
  def change
  	
  	change_column :spree_org_addresses, :postal_code, :string
  end
end
