class AddDoctorTemplate < ActiveRecord::Migration
  def change
  	template = Spree::Template.create(:name=>'Dotor',:theme_color=>'default',:selected=>false,:template_no=>'5')
  	Spree::Theme.create(name: "default", template_id: template.try(:id))
  	Spree::CmsPage.create(title: "About Us", template_id: template.try(:id), description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." )
	Spree::Logo.create(:avatar_file_name=>"logo.png",:avatar_content_type=> "image/png", :template_id => template.id)
	Spree::Favicon.create(:favicon_image_file_name=>"logo.png",:favicon_image_content_type=> "image/png", :template_id => template.id)
  end
end
