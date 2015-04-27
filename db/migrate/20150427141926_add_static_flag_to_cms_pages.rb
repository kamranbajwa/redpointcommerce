class AddStaticFlagToCmsPages < ActiveRecord::Migration
  def change
  	add_column :spree_cms_pages, :static_flag, :boolean, default: false
  end
end
