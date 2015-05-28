module Spree
class Template < Spree::Base
	has_many :spree_slider_images, :class_name => 'Spree::SliderImage'
	has_one :spree_logo, :class_name => 'Spree::Logo'
	has_one :spree_favicon, :class_name => 'Spree::Favicon'
	has_many :cms_pages, :class_name => 'Spree::CmsPage'
	has_many :themes
	has_many :template_images

	scope :selected, -> { where(selected: true) }
end
end
