class RenameColumnSImage < ActiveRecord::Migration
  def change
  	drop_table :spree_slider_images
  	create_table :spree_slider_images do |t|
      t.attachment :slider_image
      t.timestamps
    end
  	puts "removing all templates"
Spree::Template.delete_all
puts "creating default templates"
Spree::Template.create(:name=>'Beauty Parlor',:theme_color=>'red',:selected=>true,:template_no=>'2')
Spree::Template.create(:name=>'Warehouse',:theme_color=>'red',:selected=>false,:template_no=>'1')
Spree::Organization.create(:company_name=>"Red Point Capture")
puts "removing all logo and slider images"
Spree::Logo.delete_all
Spree::Favicon.delete_all
Spree::SliderImage.delete_all
puts "creating logo and slider images"

# Spree::Template.all.each do |temp| 
#   Spree::Logo.create(:avatar_file_name=>"logo.png",:avatar_content_type=> "image/png", :template_id => temp.id)
#   Spree::Favicon.create(:favicon_image_file_name=>"logo.ico",:favicon_image_content_type=> "image/x-icon", :template_id => temp.id)
#   (0..4).each do |a|
#   Spree::SliderImage.create(:slider_image_file_name=>"slider#{a}.png",:slider_image_content_type=> "image/png",:template_id => temp.id)
# end 
# end 
  end
end
