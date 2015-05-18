class CreateSpreeApiUsers < ActiveRecord::Migration
  def change
    create_table :spree_api_users do |t|
      t.string :name
      t.string :email
      t.string :secret_key
      t.string :token
      t.integer :status
      t.timestamps
    end
  end
end
