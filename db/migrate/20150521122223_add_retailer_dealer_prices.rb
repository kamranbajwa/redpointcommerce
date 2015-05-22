class AddRetailerDealerPrices < ActiveRecord::Migration
  def change
    add_column :spree_variants, :retailer_price, :decimal, :precision => 8, :scale => 2, :null => true
    add_column :spree_variants, :dealer_price, :decimal, :precision => 8, :scale => 2, :null => true
  end
end
