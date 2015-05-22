class CreateSpreeUserGroups < ActiveRecord::Migration
  def change
    create_table :spree_user_groups do |t|
      t.string :name
      t.timestamps
    end
  end
end
