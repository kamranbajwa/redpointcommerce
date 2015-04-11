class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :spree_organizations do |t|
    	t.string :company_code
    	t.string :company_name
    	t.string :country
    	t.string :company_address
    	t.string :company_code
    	t.string :city
    	t.string :state
    	t.integer :postal_code
    	t.integer :phone_number
    	t.time :central_time
      t.timestamps
    end
  end
end
