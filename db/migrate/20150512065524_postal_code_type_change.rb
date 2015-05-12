class PostalCodeTypeChange < ActiveRecord::Migration
  def change
  	
  	change_column :spree_organizations, :postal_code, :string
  end
end
