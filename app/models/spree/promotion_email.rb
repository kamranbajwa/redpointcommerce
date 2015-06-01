module Spree
class PromotionEmail < Spree::Base
validates :title, :body, :presence => true
end
end