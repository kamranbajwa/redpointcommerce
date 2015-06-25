class AddSessionTimeOutHours < ActiveRecord::Migration
  def change
  	add_column :spree_organizations, :session_time_out, :integer
  end
end
