module Spree
class ContactsController < Spree::StoreController
 def new
@title= (Spree::CmsPage.find_by_default_string "contact").title rescue "contact us"
  @title="contact us"
    @message = Spree::Message.new
    @org=Spree::Organization.first
    add=@org.org_addresses
    array_address = add.pluck(:company_address, :city, :state, :country)
    @complte_address=[];

    array_address.each do |ad|
    @complte_address << ad.join(" ")
end
  end

  def create
    @message = Message.new(params[:message])
    
    if @message.valid?
     org = Spree::Organization.first
     pre = org.feedback
     org.update_columns(feedback: pre + 1)
     NotificationsMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => "Thank You! Your message successfully sent!")
    else
      flash.now.alert = "Please fill all fields."
      render :new
    end
  end

end
end