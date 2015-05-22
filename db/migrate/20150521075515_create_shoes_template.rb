class CreateShoesTemplate < ActiveRecord::Migration
  def change
   	tmp=Spree::Template.create(:name=>'Shoe Store',:theme_color=>'blue',:selected=>false,:template_no=>'4')
    Spree::Theme.create(name: "blue", template_id: tmp.try(:id))
    Spree::Theme.create(name: "brown", template_id: tmp.try(:id))
    Spree::Theme.create(name: "green", template_id: tmp.try(:id))
    Spree::Theme.create(name: "red", template_id: tmp.try(:id))
    Spree::CmsPage.create(title: "Home", template_id: tmp.try(:id), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." )
  	Spree::CmsPage.create(title: "About us", template_id: tmp.try(:id), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." )
  end
end
