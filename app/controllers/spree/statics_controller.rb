module Spree
  class StaticsController <  Spree::StoreController
   skip_before_action :verify_authenticity_token , :only => [:subcriptions]
    before_action :check_account_balnce, :only => [:account_charge]
    def contactus
    end
  
    def faq
    end
  
    def aboutus
    end
  
    def termsandconditions
    end
  
    def privacypolicy
    end
def check_account_balnce
     @user=spree_current_user
       charge_amount=(params[:t_amount].to_f).round
       total_balce=charge_amount.to_f+@user.curr_acc_blnc.to_f
        order_id=params[:order_id].to_i
      if order_id and order_id!=0
        @order=Spree::Order.find_by_id order_id
          if @order.total.to_f!= params[:t_amount].to_f
          flash[:notice] = "Sorry You cant pay more than the order total"
          redirect_to "/account"
          return
        end
      end
       if total_balce>0
        redirect_to "/account"
         flash[:notice] = "Sorry Account can't be positive"
         redirect_to "/account"
         return 
       end 
  end
    def pages
        @page_data = Spree::CmsPage.find(params[:id]) rescue nil
        if @page_data
            render 'pages'
        else
            redirect_to root_path
        end
    end
    # Get Blog Main Page
    def blog
    end
    def account_charge
      token = params[:stripe_card_token]
      customer = Stripe::Customer.create(
       :source => token,
        :description => "chanrge account",
        )
      charge_amount=(params[:t_amount].to_f).round
      begin
       charge = Stripe::Charge.create(:amount =>charge_amount*100, :currency => "usd",:customer => customer.id)
        rescue
          flash[:notice] = "Sorry account is recharged now please try again!"
           ExceptionNotifier.notify_exception("card error")
          
           end
         if !charge.blank?
          @user.curr_acc_blnc=(@user.curr_acc_blnc.to_f+charge_amount).to_s
          @user.balnce_date=Date.today
          @user.save!
          @user.account_transactions.create(:transaction_type=>"credit",:current_balance=>@user.curr_acc_blnc,:amount=>charge_amount)
          if @order
            @order.update(:payment_state=>"paid")
          end
          if @user.current_balance==0
          @user.orders.where(:payment_state=>"pending").each do |odr|
            if odr.payments.last.try(:payment_method).try(:type)=="Spree::Gateway::Bogus"
              odr.update(:payment_state=>"paid")
            end
          end
        end
          flash[:notice] = "You have recharged you account successfully!"
         end
        redirect_to :back
    
    end
      # def account_user
      # @user=spree_current_user       
      # end
    # Show Every Post
    def show_post
       @blog_post_show = Spree::Blog.find_by_permalink(params[:permalink])
    end
    
    # Start Subcription Email 
    def subcriptions
      @subscibed_email = Spree::Subscribe.new
      if params[:email].blank?
        text = 'blank'
      else
        @already_exist = Spree::Subscribe.find_by_subcription_email(params[:email])
        if @already_exist.blank? 
            @subscibed_email.subcription_email= params[:email]
              if @subscibed_email.save
                  text = 'insert'
              else
                  text = 'notinsert'
              end
        else
          text ="already"
        end
      end
        render :text => text
    end
        # End Subcription Email 

  end
  
end