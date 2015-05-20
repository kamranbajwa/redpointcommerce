class AddAttachmentAvatarToSpreeBlogs < ActiveRecord::Migration
  def self.up
    change_table :spree_blogs do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :spree_blogs, :avatar
  end
end
