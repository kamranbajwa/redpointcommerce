class CreateSpreeVersions < ActiveRecord::Migration
  def change
    create_table :spree_versions do |t|

      t.timestamps
    end
  end
end
