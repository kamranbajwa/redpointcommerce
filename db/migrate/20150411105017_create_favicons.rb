class CreateFavicons < ActiveRecord::Migration
  def change
    create_table :spree_favicons do |t|
    	t.attachment :favicon_image
    	t.integer :template_id
        t.timestamps
    end
  end
end
