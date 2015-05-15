class AddOpeningHoursToOrganization < ActiveRecord::Migration
  def change
  	add_column :spree_organizations, :opening_hour, :string
  	add_column :spree_organizations, :closing_hour, :string
  	add_column :spree_organizations, :opening_day, :string
  	add_column :spree_organizations, :closing_day, :string
  	add_column :spree_organizations, :youtube, :string
  	add_column :spree_organizations, :linked_in, :string
  	add_column :spree_organizations, :pinterest, :string
  end
end
