class AddThemeShowTemplate < ActiveRecord::Migration
 	tmp=Spree::Template.find_by_template_no "4"
 	Spree::Theme.create(name: "default", template_id: tmp.try(:id))
end
