class CreateEmailtemplates < ActiveRecord::Migration
  def change
    create_table :spree_email_templates do |t|
    	t.string :title
    	t.text :mailto
    	t.text :mailcc    	
    	t.text :mailtext
      t.timestamps
    end
  end
end
