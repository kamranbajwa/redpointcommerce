class CreateSpreeComponents < ActiveRecord::Migration
  def change
    create_table :spree_components do |t|
      t.string :name
      t.integer :template_id
      t.string :color
      t.timestamps
    end
  end
end
