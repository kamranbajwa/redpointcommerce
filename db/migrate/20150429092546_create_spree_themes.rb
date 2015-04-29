class CreateSpreeThemes < ActiveRecord::Migration
  def change
  	drop_table :spree_themes
    create_table :spree_themes do |t|
    	t.string :name
    	t.integer :template_id
      t.timestamps
    end
  end
end
