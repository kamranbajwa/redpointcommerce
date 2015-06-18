class CreateSpreeSubscritionTransctions < ActiveRecord::Migration
  def change
    create_table :spree_subscrition_transctions do |t|
      t.integer :order_id
      t.string  :price
      t.string  :currency
      t.string  :subs_type
      t.integer :user_id
      t.string  :ref_number
      t.string  :item_price
      t.string  :bill_address_id
      t.string  :ship_address_id
      t.string  :item_count
      t.string  :store_id
      t.timestamps
    end
  end
end
