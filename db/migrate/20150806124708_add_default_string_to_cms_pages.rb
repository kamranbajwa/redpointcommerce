class AddDefaultStringToCmsPages < ActiveRecord::Migration
  def change
    add_column :spree_cms_pages, :default_string, :string
  end
end
