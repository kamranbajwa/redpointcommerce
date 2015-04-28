class CreateOrgAddresses < ActiveRecord::Migration
  def change
  	drop_table :spree_org_addresses
    create_table :spree_org_addresses do |t|
    	t.string :country
    	t.string :company_address
    	t.string :city
    	t.string :state
    	t.integer :postal_code
    	t.integer :organization_id
    	t.integer :phone_no, :limit => 8

      t.timestamps
    end
  end
end
