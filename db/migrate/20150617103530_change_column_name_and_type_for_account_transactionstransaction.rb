class ChangeColumnNameAndTypeForAccountTransactionstransaction < ActiveRecord::Migration
  def change
  	rename_column :spree_account_transactions, :transaction_date, :amount
  end
end
