class AddColumnPermalinkCmsPages < ActiveRecord::Migration
  def change
  	# for older record
  	Spree::CmsPage.find_each(&:save)
  	add_column :spree_cms_pages, :slug, :string
  end
end
