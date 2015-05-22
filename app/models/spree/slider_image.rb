module Spree
class SliderImage < Spree::Base
	belongs_to :template
	has_attached_file :slider_image, styles: {
    medium: '300x300!', 
    xlarge:   '1280x879!',
  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :slider_image, :content_type => ["image/jpg", "image/jpeg", "image/gif", "image/png"]
   validates_attachment_size :slider_image, :less_than => 1.megabytes, 
   :unless => Proc.new {|model| model.slider_image}
end
end