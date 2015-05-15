class ChangeCentralTimeFormate < ActiveRecord::Migration
  def change
  	change_column :spree_organizations, :central_time, :string
  end
end
