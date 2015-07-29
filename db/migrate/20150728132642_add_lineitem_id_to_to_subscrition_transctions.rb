class AddLineitemIdToToSubscritionTransctions < ActiveRecord::Migration
  def change
  	add_column :spree_subscrition_transctions,:line_item_id,:integer
  end
end
