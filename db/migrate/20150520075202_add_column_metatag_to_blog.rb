class AddColumnMetatagToBlog < ActiveRecord::Migration
  def change
    add_column :spree_blogs, :meta_tag, :string
    add_column :spree_blogs, :meta_description, :string
  end
end
