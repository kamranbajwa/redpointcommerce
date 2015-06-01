class CreateSpreeTemplateImages < ActiveRecord::Migration
  def change
    create_table :spree_template_images do |t|
      t.attachment :avatar
      t.integer :template_id
      t.timestamps
    end
  end
end
