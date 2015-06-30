class AddCheckToWidgets < ActiveRecord::Migration
  def change
  	add_column :spree_widgets, :check, :boolean
  end
end
