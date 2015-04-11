class AddAttachmentSImageToSliderImages < ActiveRecord::Migration
  def self.up
    change_table :spree_slider_images do |t|
      t.attachment :slider_image
    end
  end

  def self.down
    remove_attachment :spree_slider_images, :slider_image
  end
end
