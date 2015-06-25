class AddFeedbackToOrganizaton < ActiveRecord::Migration
  def change
  	add_column :spree_organizations, :feedback, :integer, default: 0
  end
end
