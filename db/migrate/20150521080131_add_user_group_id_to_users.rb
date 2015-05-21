class AddUserGroupIdToUsers < ActiveRecord::Migration
  def change
  	add_column :spree_users, :user_group_id, :integer
  end
end
