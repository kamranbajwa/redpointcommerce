module Spree
class ContactsController < Spree::StoreController
 def new
    @message = Message.new
    @org=Spree::Organization.first
    add=@org.org_addresses
    array_address = add.pluck(:company_address, :city, :state, :country, :postal_code)
    @complte_address=[];

    array_address.each do |ad|
    @complte_address << ad.join(" ")
end
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