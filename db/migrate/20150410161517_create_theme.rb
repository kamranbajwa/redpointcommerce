class CreateTheme < ActiveRecord::Migration
  def change
    Spree::Template.create(:name=>'Beauty Parlor',:theme_color=>'red',:selected=>true,:template_no=>'1')
    Spree::Template.create(:name=>'Warehouse',:theme_color=>'red',:selected=>false,:template_no=>'2')
  end
end
