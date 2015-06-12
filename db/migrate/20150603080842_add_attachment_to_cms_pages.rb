class AddAttachmentToCmsPages < ActiveRecord::Migration
  def change
  	add_attachment :spree_cms_pages, :avatar
  	add_column :spree_cms_pages, :page_id, :integer
  	add_column :spree_cms_pages, :default_flag, :boolean
  end
end
