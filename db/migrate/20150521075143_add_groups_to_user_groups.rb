class AddGroupsToUserGroups < ActiveRecord::Migration
  def change
  	Spree::UserGroup.create(name: "Normal")
  	Spree::UserGroup.create(name: "Retailer")
  	Spree::UserGroup.create(name: "WholeSaler")
  end
end
