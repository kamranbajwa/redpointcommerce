class AddColumnPermalinkCmsPages < ActiveRecord::Migration
  # for older record to create frienly id
  # Spree::CmsPage.find_each(&:save)
  def change
  	add_column :spree_cms_pages, :slug, :string
  end
end
