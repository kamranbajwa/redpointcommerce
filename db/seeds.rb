# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

 Spree::Core::Engine.load_seed if defined?(Spree::Core)
 Spree::Auth::Engine.load_seed if defined?(Spree::Auth)
#puts "removing all templates"
#Spree::Template.delete_all
#puts "creating default templates"
#Spree::Template.create(:name=>'Beauty Parlor',:theme_color=>'red',:selected=>true,:template_no=>'2')
#Spree::Template.create(:name=>'Warehouse',:theme_color=>'red',:selected=>false,:template_no=>'1')
#Spree::Organization.create(:company_name=>"Red Point Capture")
#puts "removing all logo and slider images"
#Spree::Logo.delete_all
#Spree::Favicon.delete_all
#Spree::SliderImage.delete_all
#puts "creating logo and slider images"
#
#Spree::Template.all.each do |temp| 
#  Spree::Logo.create(:avatar_file_name=>"logo.png",:avatar_content_type=> "image/png", :template_id => temp.id)
#  Spree::Favicon.create(:favicon_image_file_name=>"logo.ico",:favicon_image_content_type=> "image/x-icon", :template_id => temp.id)
#  (0..4).each do |a|
#  Spree::SliderImage.create(:slider_image_file_name=>"slider#{a}.png",:slider_image_content_type=> "image/png",:template_id => temp.id)
#end 
#end 
  