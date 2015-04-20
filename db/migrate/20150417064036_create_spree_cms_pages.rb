class CreateSpreeCmsPages < ActiveRecord::Migration
  def change
    create_table :spree_cms_pages do |t|
    	t.string :title
    	t.string :meta_tags
    	t.integer :template_id
    	t.text :description
      t.timestamps
    end
  end
end
