module Spree
class ContactsController < Spree::StoreController
 def new
    @message = Message.new
  end

  def create
    debugger
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