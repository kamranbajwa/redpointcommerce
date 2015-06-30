module Spree
    class Widget < Spree::Base
    	WIDGETS = [ ["About Us", "About Us"], ["Links", "Links"], ["Logo Footer", "Logo Footer"]]
   		validates :name, :uniqueness => {:case_sensitive => false}
    end
end
