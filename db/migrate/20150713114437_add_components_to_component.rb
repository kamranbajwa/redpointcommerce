class AddComponentsToComponent < ActiveRecord::Migration
  def change
  	doctor =  Spree::Template.find_by_name("Doctor").try(:id) rescue nil
  	Spree::Component.create(name: "Header", template_id: doctor)
  	Spree::Component.create(name: "Footer", template_id: doctor)
  	Spree::Component.create(name: "Header-Font", template_id: doctor)
  	Spree::Component.create(name: "Footer-Font", template_id: doctor)
  	shoe =  Spree::Template.find_by_name("Shoe Store").try(:id) rescue nil
   	Spree::Component.create(name: "Header", template_id: shoe)
  	Spree::Component.create(name: "Footer", template_id: shoe)
  	Spree::Component.create(name: "Header-Font", template_id: shoe)
  	Spree::Component.create(name: "Footer-Font", template_id: shoe)
  	# Law Template
  	law =  Spree::Template.find_by_name("Law").try(:id) rescue nil
   	Spree::Component.create(name: "Header", template_id: law)
  	Spree::Component.create(name: "Footer", template_id: law)
  	Spree::Component.create(name: "Header-Font", template_id: law)
  	Spree::Component.create(name: "Footer-Font", template_id: law)
  	# Beauty Template
  	beauty =  Spree::Template.find_by_name("Beauty Parlor").try(:id) rescue nil
    Spree::Component.create(name: "Header", template_id: beauty)
  	Spree::Component.create(name: "Footer", template_id: beauty)
  	Spree::Component.create(name: "Header-Font", template_id: beauty)
  	Spree::Component.create(name: "Footer-Font", template_id: beauty)
  	# WareHouse Template
  	ware =  Spree::Template.find_by_name("Warehouse").try(:id) rescue nil
  	Spree::Component.create(name: "Header", template_id: ware)
  	Spree::Component.create(name: "Footer", template_id: ware)
  	Spree::Component.create(name: "Header-Font", template_id: ware)
  	Spree::Component.create(name: "Footer-Font", template_id: ware)
  end
end
