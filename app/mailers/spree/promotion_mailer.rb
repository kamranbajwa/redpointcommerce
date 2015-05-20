module Spree
  class PromotionMailer < BaseMailer
  	def send_promotion_mail(template, subscriber_list)
  		@tmplate=template
  		subject = "#{@tmplate.title}"
  		mail(to: subscriber_list, from: from_address, subject: subject)
  	end
  end
end