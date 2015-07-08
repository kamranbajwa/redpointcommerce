class CreateSpreeSections < ActiveRecord::Migration
  def change
    create_table :spree_sections do |t|
      t.string :name
      t.string :default_name
      t.integer :template_id
      t.boolean :visible
      t.timestamps
    end
  end
end
