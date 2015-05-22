class AddSubscriptionFields < ActiveRecord::Migration
 def change
  	remove_column :spree_products, :subscription_type, :string
    add_column :spree_products, :subscription_weekly,:decimal, :precision => 8, :scale => 2
    add_column :spree_products, :subscription_daily,:decimal, :precision => 8, :scale => 2
    add_column :spree_products, :subscription_monthly,:decimal, :precision => 8, :scale => 2
    add_column :spree_products, :subscription_yearly,:decimal, :precision => 8, :scale => 2
  end
end
