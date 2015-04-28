module Spree
	class Organization < Spree::Base
		has_many :org_addresses,  :dependent => :destroy
		 accepts_nested_attributes_for :org_addresses, allow_destroy: true
	end
end
