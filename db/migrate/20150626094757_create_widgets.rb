class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :spree_widgets do |t|
      t.string :name
      t.text :widget_characteristics
      t.integer :widget_order
      t.timestamps
    end
  end
end
