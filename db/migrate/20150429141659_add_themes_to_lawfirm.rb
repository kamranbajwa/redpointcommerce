class AddThemesToLawfirm < ActiveRecord::Migration
  def change
  	template_beauty = Spree::Template.find_by_name("Law")
  	Spree::Theme.create(name: "default", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "green", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "red", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "pink", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "grey", template_id: template_beauty.try(:id))
  	Spree::Theme.create(name: "brown", template_id: template_beauty.try(:id))
  end
end
