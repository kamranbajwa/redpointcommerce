module Spree
  class ShipmentMailer < BaseMailer
    def shipped_email(shipment, resend = false)
      @shipment = shipment.respond_to?(:id) ? shipment : Spree::Shipment.find(shipment)
      subject = (resend ? "[#{Spree.t(:resend).upcase}] " : '')
      subject += "#{Spree::Store.current.name} #{Spree.t('shipment_mailer.shipped_email.subject')} ##{@shipment.order.number}"
      email_template=Spree::EmailTemplate.find_by_title("Shipment Email")
      cc_and_tos=mailt_to_and_cc_emails(email_template, @shipment.order.email)
      mail(to: cc_and_tos[0], from: from_address,cc: cc_and_tos[1] rescue '', subject: subject)
    end
  end
end
