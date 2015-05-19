class CreateEmailTemplate < ActiveRecord::Migration
  def change
  	Spree::EmailTemplate.delete_all
  	Spree::EmailTemplate.create(:title=> "Order Confirmation Email")
  	Spree::EmailTemplate.create(:title=> "Order Cancellation Email")
  	Spree::EmailTemplate.create(:title => "Shipment Email")
  end
end
