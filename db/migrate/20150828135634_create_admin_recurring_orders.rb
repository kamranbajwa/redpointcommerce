class CreateAdminRecurringOrders < ActiveRecord::Migration
  def change
    create_table :spree_recurring_orders do |t|
      t.integer  "bill_address_id"
      t.integer  "ship_address_id"
      t.string   "shipment_state"
      t.integer  "user_id"
      t.string   "recurring_type"
      t.string   "number",    limit: 32
      t.integer  "variant_id"
      t.timestamps
    end
  end
end
