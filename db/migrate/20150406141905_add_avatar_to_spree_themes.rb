class AddAvatarToSpreeThemes < ActiveRecord::Migration
   def self.up
    add_attachment :spree_themes, :avatar
  end

  def self.down
    remove_attachment :spree_themes, :avatar
  end
end
