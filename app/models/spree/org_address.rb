module Spree
	class OrgAddress < Spree::Base
		 belongs_to :organization
		  validates_presence_of :company_address,:city,:state,:country
	end
end