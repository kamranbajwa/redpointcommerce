class RemoveAddressesFiledsFromOrganization < ActiveRecord::Migration
  def change
  	remove_column :spree_organizations,:country
  	remove_column :spree_organizations,:city
  	remove_column :spree_organizations,:postal_code
  	remove_column :spree_organizations,:state
  	remove_column :spree_organizations,:company_address
  end
end
