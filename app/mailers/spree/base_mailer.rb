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
      to_array=email_template.mailto.split(',')
      to_array<<email
      cc_array=email_template.mailcc.split(',')
      to_and_cc_array=[];
      to_and_cc_array<<to_array
      to_and_cc_array<<cc_array
      return to_and_cc_array
      
    end

  end
end
