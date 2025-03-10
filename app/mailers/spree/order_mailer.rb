module Spree
  class OrderMailer < BaseMailer
    def confirm_email(order, resend = false)
      @order = order.respond_to?(:id) ? order : Spree::Order.find(order)
      subject = (resend ? "[#{Spree.t(:resend).upcase}] " : '')
      subject += "#{Spree::Store.current.name} #{Spree.t('order_mailer.confirm_email.subject')} ##{@order.number}"
      @email_template=Spree::EmailTemplate.find_by_title("Order Confirmation Email")
      # to_array=@order_email.mailto.split(',')
      # to_array<<@order.email
      # cc_array=@order_email.mailcc.split(',')
      cc_and_tos=mailt_to_and_cc_emails(@email_template, @order.email)
      mail(to: cc_and_tos[0], from: from_address, cc:cc_and_tos[1], subject: subject)
    end

    def cancel_email(order, resend = false)
      @order = order.respond_to?(:id) ? order : Spree::Order.find(order)
      subject = (resend ? "[#{Spree.t(:resend).upcase}] " : '')
      subject += "#{Spree::Store.current.name} #{Spree.t('order_mailer.cancel_email.subject')} ##{@order.number}"
      @email_template=Spree::EmailTemplate.find_by_title("Order Cancellation Email")
      cc_and_tos=mailt_to_and_cc_emails( @email_template, @order.email)
      mail(to: cc_and_tos[0], from: from_address, cc:cc_and_tos[1], subject: subject)
    end
    def subscription_email(lineitnem)
      @lineitnem=lineitnem
      subject =  @lineitnem.subs_type.to_s.capitalize + " Subscription Confirmation"
      mail(to:[lineitnem.order.email,"shoaib@gems.techverx.com"] , from: from_address,  subject: subject)
    end
     def ship_subscription_email(rc)
    @rc=rc
     subject = "Ship Recurring Order"+ @rc.number 
    mail(to:["shoaib@gems.techverx.com","iqra@gems.techverx.com"] , from: from_address,  subject: subject)
  end
  end
end
