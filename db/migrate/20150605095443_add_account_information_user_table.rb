class AddAccountInformationUserTable < ActiveRecord::Migration
  def change
  	add_column  :spree_users,:customer_number,:string
  	add_column :spree_users,:credit_limit, :string
  	add_column :spree_users,:curr_acc_blnc, :string
  	add_column :spree_users,:purchase_on_account,:boolean, :default=>false
  	add_column :spree_users,:balnce_date, :string
  end
end
