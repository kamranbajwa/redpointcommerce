class AddThemeShowTemplate < ActiveRecord::Migration
 	
  tmp = Spree::Template.where("template_no = ? ", "4").first
  
  st = Spree::Theme.new
  st.name = "default"
  st.template_id = tmp.id
  st.save
  
#  tmp=Spree::Template.find_by_template_no 4
# 	Spree::Theme.create(name: "default", template_id: tmp.try(:id))
end
