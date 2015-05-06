class AddAttachmentToTaxonomies < ActiveRecord::Migration
  def change
  	add_attachment :spree_taxonomies, :cat_image
  end
end
