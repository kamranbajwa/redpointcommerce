module Spree
class SliderImage < Spree::Base
	has_attached_file :s_image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :s_image, :content_type => ["image/jpg", "image/jpeg", "image/gif", "image/png"]
end
end