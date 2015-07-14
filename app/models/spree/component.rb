class Spree::Component < Spree::Base
	belongs_to :templates

	scope :footer, -> { where(name: "Footer").first }
	scope :header, -> { where(name: "Header").first }
	scope :footer_font, -> { where(name: "Footer-Font").first }
	scope :header_font, -> { where(name: "Header-Font").first }
end
