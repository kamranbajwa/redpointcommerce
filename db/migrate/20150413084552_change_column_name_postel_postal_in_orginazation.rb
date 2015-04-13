class ChangeColumnNamePostelPostalInOrginazation < ActiveRecord::Migration
  def change
  	def change
    rename_column :spree_organizations, :postel_code, :postal_code
  end
  end
end
