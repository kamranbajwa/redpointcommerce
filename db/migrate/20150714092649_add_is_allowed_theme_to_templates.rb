class AddIsAllowedThemeToTemplates < ActiveRecord::Migration
  def change
  	add_column :spree_templates, :is_allowed_custom_theme, :boolean, default: false
  end
end
