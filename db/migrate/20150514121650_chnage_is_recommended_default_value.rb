class ChnageIsRecommendedDefaultValue < ActiveRecord::Migration
  def change
  	 change_column :spree_products, :is_recommended, :boolean, :default => false
  end
end
