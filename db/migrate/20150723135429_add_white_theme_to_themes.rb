class AddWhiteThemeToThemes < ActiveRecord::Migration
  def change
    # Law Template
    law =  Spree::Template.find_by_name("Law").try(:id) rescue nil
   Spree::Theme.create(name: "white", template_id: law)
    # Beauty Template
    beauty =  Spree::Template.find_by_name("Beauty Parlor").try(:id) rescue nil
   Spree::Theme.create(name: "white", template_id: beauty)
    # WareHouse Template
    ware =  Spree::Template.find_by_name("Warehouse").try(:id) rescue nil
   Spree::Theme.create(name: "white", template_id: ware)
  end
end
