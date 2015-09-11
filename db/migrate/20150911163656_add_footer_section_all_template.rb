class AddFooterSectionAllTemplate < ActiveRecord::Migration
Spree::Template.all.each do |tmp|
	Spree::Section.create(name: "footer about_us", template_id: tmp.id, visible: true, default_name: "footer_1")
	Spree::Section.create(name: "footer we are open", template_id: tmp.id, visible: true, default_name: "footer_2")
	Spree::Section.create(name: "footer important links", template_id: tmp.id, visible: true, default_name: "footer_3")
	Spree::Section.create(name: "footer Contact", template_id: tmp.id, visible: true, default_name: "footer_4")
  end
end
