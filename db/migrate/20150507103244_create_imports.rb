class CreateImports < ActiveRecord::Migration
  def change
    create_table :spree_imports do |t|

      t.timestamps
    end
  end
end
