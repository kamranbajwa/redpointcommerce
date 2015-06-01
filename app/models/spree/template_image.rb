class Spree::TemplateImage < ActiveRecord::Base
	belongs_to :template
	has_attached_file :avatar, styles: {home_image: "409x222!"}
    validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
