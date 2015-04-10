class CreateSliderImages < ActiveRecord::Migration
  def change
    create_table :spree_slider_images do |t|
      t.attachment :image

      t.timestamps
    end
  end
end
