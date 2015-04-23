class AddTemplateToAdmin < ActiveRecord::Migration
  def change
  	Spree::Template.create(:name=>'Law',:theme_color=>'red',:selected=>false,:template_no=>'3')
  	Spree::Template.last do |temp| 
  Spree::Logo.create(:avatar_file_name=>"logo.png",:avatar_content_type=> "image/png", :template_id => temp.id)
  Spree::Favicon.create(:favicon_image_file_name=>"logo.ico",:favicon_image_content_type=> "image/x-icon", :template_id => temp.id)
  (0..4).each do |a|
  Spree::SliderImage.create(:slider_image_file_name=>"slider#{a}.png",:slider_image_content_type=> "image/png",:template_id => temp.id)
end 
end 
  end
end
