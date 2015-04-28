module Spree
	class OrgAddress < Spree::Base
		 belongs_to :organization
	end
end