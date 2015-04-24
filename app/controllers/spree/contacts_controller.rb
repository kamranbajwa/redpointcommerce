module Spree
class ContactsController < Spree::StoreController
 def new
    @message = Spree::Message.new
    @org=Spree::Organization.first
    @complte_address=[@org.company_address, @org.city, @org.state, @org.country,@org.postal_code.to_s
].compact.join(', ')
  end

  def create
    @message = Message.new(params[:message])
    
    if @message.valid?
     NotificationsMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => "<strong>Thank You!</strong> Your message successfully sent!")
    else
      flash.now.alert = "Please fill all fields."
      render :new
    end
  end

end
end