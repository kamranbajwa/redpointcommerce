class CreateSpreeThemes < ActiveRecord::Migration
  def change
  	
    create_table :spree_themes do |t|
    	t.string :name
    	t.integer :template_id
      t.timestamps
    end
  end
end
