class CreateThemes < ActiveRecord::Migration
  def change
    create_table :spree_themes do |t|
    	t.string :selected_theme,:default => "default"
      t.timestamps
    end
  end
end
