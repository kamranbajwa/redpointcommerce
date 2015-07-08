class AddSectionsToSection < ActiveRecord::Migration
	def change
  	# Doctor Template
  	doctor =  Spree::Template.find_by_name("Doctor").try(:id) rescue nil
  	Spree::Section.create(name: "Medical & Healthy", template_id: doctor, visible: true, default_name: "section_1")
  	Spree::Section.create(name: "Departments", template_id: doctor, visible: true, default_name: "section_2")
  	Spree::Section.create(name: "Meet the Doctor", template_id: doctor, visible: true, default_name: "section_3")
  	Spree::Section.create(name: "From the Blog", template_id: doctor, visible: true, default_name: "section_4")
  	Spree::Section.create(name: "Latest News from Health and Medical", template_id: doctor, visible: true, default_name: "section_5")
  	# Shoe Template
  	shoe =  Spree::Template.find_by_name("Shoe Store").try(:id) rescue nil
  	Spree::Section.create(name: "Home Images", template_id: shoe, visible: true, default_name: "section_1")
  	Spree::Section.create(name: "New Trend", template_id: shoe, visible: true, default_name: "section_2")
  	Spree::Section.create(name: "Products", template_id: shoe, visible: true, default_name: "section_3")
  	Spree::Section.create(name: "Page Section 1", template_id: shoe, visible: true, default_name: "section_4")
  	Spree::Section.create(name: "Page Section 2", template_id: shoe, visible: true, default_name: "section_5")
  	Spree::Section.create(name: "Widgets", template_id: shoe, visible: true, default_name: "section_6")
  	# Law Template
  	law =  Spree::Template.find_by_name("Law").try(:id) rescue nil
  	Spree::Section.create(name: "Home Content", template_id: law, visible: true, default_name: "section_1")
  	Spree::Section.create(name: "Static Pages", template_id: law, visible: true, default_name: "section_2")
  	Spree::Section.create(name: "Widgets", template_id: law, visible: true, default_name: "section_3")
  	Spree::Section.create(name: "Practise Areas", template_id: law, visible: true, default_name: "section_4")
  	# Beauty Template
  	beauty =  Spree::Template.find_by_name("Beauty Parlor").try(:id) rescue nil
  	Spree::Section.create(name: "Static Pages", template_id: beauty, visible: true, default_name: "section_1")
  	Spree::Section.create(name: "Products", template_id: beauty, visible: true, default_name: "section_2")
  	Spree::Section.create(name: "Widgets", template_id: beauty, visible: true, default_name: "section_3")
  	Spree::Section.create(name: "Appointment", template_id: beauty, visible: true, default_name: "section_4")
  	# WareHouse Template
  	ware =  Spree::Template.find_by_name("Warehouse").try(:id) rescue nil
  	Spree::Section.create(name: "Home Images", template_id: ware, visible: true, default_name: "section_1")
  	Spree::Section.create(name: "Products", template_id: ware, visible: true, default_name: "section_2")
  	Spree::Section.create(name: "Widgets", template_id: ware, visible: true, default_name: "section_3")
  end
end
