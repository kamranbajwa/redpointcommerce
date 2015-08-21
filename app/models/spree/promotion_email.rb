module Spree
class PromotionEmail < Spree::Base
validates :title, :body, :presence => true
	def self.send_mail(template, subscriber_list)
  		Spree::PromotionMailer.send_promotion_mail(template, subscriber_list).deliver
  	end
  	end
end