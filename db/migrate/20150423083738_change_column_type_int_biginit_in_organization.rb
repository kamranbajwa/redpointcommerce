class ChangeColumnTypeIntBiginitInOrganization < ActiveRecord::Migration
  def change
  	change_column :spree_organizations, :phone_number, :bigint
  end
end
