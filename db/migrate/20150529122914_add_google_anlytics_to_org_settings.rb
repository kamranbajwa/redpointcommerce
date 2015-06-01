class AddGoogleAnlyticsToOrgSettings < ActiveRecord::Migration
  def change
	add_column :spree_organizations, :google_analyitcs, :string
  end
end
