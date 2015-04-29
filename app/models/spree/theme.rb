module Spree
    class Theme < Spree::Base
        belongs_to :template
    end
end
