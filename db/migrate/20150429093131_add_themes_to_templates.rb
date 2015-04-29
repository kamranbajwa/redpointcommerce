class AddThemesToTemplates < ActiveRecord::Migration
  def change
  	template = Spree::Template.find_by_name("Beauty Parlor")
  	Spree::Theme.create(name: "lightgrey", template_id: template.try(:id))
  	Spree::Theme.create(name: "yellow", template_id: template.try(:id))
  	Spree::Theme.create(name: "orange", template_id: template.try(:id))
  	Spree::Theme.create(name: "green", template_id: template.try(:id))
  	Spree::Theme.create(name: "red", template_id: template.try(:id))
  	Spree::Theme.create(name: "blue", template_id: template.try(:id))
  	Spree::Theme.create(name: "purple", template_id: template.try(:id))
  	template_beauty = Spree::Template.find_by_name("Warehouse")
  	Spree::Theme.create(name: "black", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "blue", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "brown", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "maroon", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "grey", template_id: template_beauty.try(:id))
  end
end
