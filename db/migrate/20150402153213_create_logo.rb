class CreateLogo < ActiveRecord::Migration
  def change
    create_table :spree_logos do |t|
    	
      t.timestamps
    end
  end
end
