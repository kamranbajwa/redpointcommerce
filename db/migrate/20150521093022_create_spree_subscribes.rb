class CreateSpreeSubscribes < ActiveRecord::Migration
  def change
    create_table :spree_subscribes do |t|
      t.string :subcription_email
      t.timestamps
    end
  end
  
end
