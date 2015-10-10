class AddWidthHeightForLogos < ActiveRecord::Migration
  def change
  	add_column :spree_logos, :avatar_width, :integer
  	add_column :spree_logos, :avatar_height, :integer
  end
end
