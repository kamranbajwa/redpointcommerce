class CreateElectronicsTemplate < ActiveRecord::Migration
electro=Spree::Template.create(:name=>'Electronics Store',:theme_color=>'default',:selected=>false,:template_no =>  6)
Spree::Section.create(name: "side bar image", template_id: electro.id, visible: true, default_name: "section_1")
Spree::Section.create(name: "static pages", template_id: electro.id, visible: true, default_name: "section_2")
Spree::Section.create(name: "catagories list", template_id: electro.id, visible: true, default_name: "section_3")
Spree::Section.create(name: "products", template_id: electro.id, visible: true, default_name: "section_4")
Spree::Section.create(name: "second template image", template_id: electro.id, visible: true, default_name: "section_5")
end
