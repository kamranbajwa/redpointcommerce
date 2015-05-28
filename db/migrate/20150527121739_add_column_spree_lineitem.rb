class AddColumnSpreeLineitem < ActiveRecord::Migration
 
  def change
    add_column :spree_line_items, :subs_type, :string
    add_column :spree_line_items, :date , :datetime
  end

 
end
