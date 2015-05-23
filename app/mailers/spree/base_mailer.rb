module Spree
  class BaseMailer < ActionMailer::Base

    def from_address
      Spree::Config[:mails_from]
    end

    def money(amount, currency = Spree::Config[:currency])
      Spree::Money.new(amount, currency: currency).to_s
    end
    helper_method :money

    def mail(headers={}, &block)
      super if Spree::Config[:send_core_emails]
    end
    def mailt_to_and_cc_emails(email_template, email)
      to_array=[]
      if email_template.mailto!=nil and email_template.mailto.length!=0 
      to_array=email_template.mailto.split(',')
    end
      to_array<<email
      cc_array=[]
      if email_template.mailcc!=nil and email_template.mailcc!=0
      cc_array=email_template.mailcc.split(',')
    end
      to_and_cc_array=[];
      to_and_cc_array<<to_array
      to_and_cc_array<<cc_array
      return to_and_cc_array
      
    end

  end
end
