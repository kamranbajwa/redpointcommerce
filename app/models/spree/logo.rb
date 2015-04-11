module Spree
class Logo < Spree::Base
	belongs_to :template
	has_attached_file :avatar, styles: {
    logo: '240x75>',
    square: '200x200#',
    medium: '300x300>',
    xlarge: '1920x879'
  }

  
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_presence :avatar
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
end