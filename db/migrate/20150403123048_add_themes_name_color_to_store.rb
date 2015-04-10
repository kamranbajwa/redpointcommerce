class AddThemesNameColorToStore < ActiveRecord::Migration
  def change
  add_column :spree_stores, :theme_name, :string,:default => "default"
  add_column :spree_stores, :theme_color, :string,:default => "default"	
  end
end
