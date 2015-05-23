class AddThemeShowTemplate < ActiveRecord::Migration
 	
  tmp = Spree::Template.where("template_no = ? ", "4").first
  
  if !tmp.blank?
  st = Spree::Theme.new
  st.name = "default"
  st.template_id = tmp.id
  st.save
  end

end
