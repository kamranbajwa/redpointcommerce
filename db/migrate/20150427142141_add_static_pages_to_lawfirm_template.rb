class AddStaticPagesToLawfirmTemplate < ActiveRecord::Migration
  def change
    Spree::Template.create(:name=>'Law',:theme_color=>'red',:selected=>false,:template_no=>'3')
  end
end
