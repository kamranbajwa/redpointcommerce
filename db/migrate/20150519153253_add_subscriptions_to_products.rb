class AddSubscriptionsToProducts < ActiveRecord::Migration
  def change
  	add_column :spree_products, :subscription, :boolean
  	add_column :spree_products, :subscription_type, :string
  end
end
