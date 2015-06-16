class CreateAccountTransactions < ActiveRecord::Migration
  def change
    create_table :spree_account_transactions do |t|
    	t.integer :user_id
    	t.string :refrence_number
    	t.string  :transaction_type
    	t.string  :prevoius_balce
    	t.string  :current_balance
    	t.string  :transaction_date

      t.timestamps
    end
  end
end
