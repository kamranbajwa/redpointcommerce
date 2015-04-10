class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :spree_templates do |t|
    	t.string :theme_color
    	t.boolean :selected
    	t.string :template_no
    	t.string  :name

      t.timestamps
    end
  end
end
