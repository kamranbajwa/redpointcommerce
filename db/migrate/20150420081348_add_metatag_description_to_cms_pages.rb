class AddMetatagDescriptionToCmsPages < ActiveRecord::Migration
  def change
  	add_column :spree_cms_pages, :meta_description, :string
  end
end
