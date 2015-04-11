module Spree
class Favicon < Spree::Base
belongs_to  :template
has_attached_file :favicon_image, styles: {
    thumb: '6x6',
    square: '200x200#',
    medium: '300x300>', 
    xlarge: '1920x879'
  }
  
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :favicon_image, :content_type => ["image/jpg", "image/jpeg", "image/gif", "image/png",'image/*','image/x-icon', 'image/vnd.microsoft.icon', 'application/octet-stream']
# do_not_validate_attachment_content_type :favicon_image
# do_not_validate_attachment_file_type :image
end
end
