class AddSocialUrlsToOrginazation < ActiveRecord::Migration
  def change
  add_column :spree_organizations, :facebook_url, :string
  add_column :spree_organizations, :twitter_url, :string
  add_column :spree_organizations, :google_url, :string
end
end