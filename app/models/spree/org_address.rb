module Spree
	class OrgAddress < ActiveRecord::Base
		 belongs_to :organization
	end
end