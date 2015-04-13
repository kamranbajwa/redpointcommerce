class AddAvatarToSpreeThemes < ActiveRecord::Migration
   def self.up
    add_attachment :spree_logos, :avatar
  end

  def self.down
    remove_attachment :spree_logos, :avatar
  end
end
