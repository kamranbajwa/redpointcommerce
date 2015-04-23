class AddSortToCmsPages < ActiveRecord::Migration
  def change
  	add_column :spree_cms_pages, :sort, :integer
  end
end
