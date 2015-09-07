class AddCopyRightToOrganizatios < ActiveRecord::Migration
  def change
  	add_column :spree_organizations, :copy_right, :string
  end
end
