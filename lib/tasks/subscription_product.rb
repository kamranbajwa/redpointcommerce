module SubscriptionProduct
	 def all_valid_subscription
     Spree::LineItem.where("subs_date >= ?",Date.yesterday)
   end
	 def subscribe_each_line_itme(f)
        puts "******************** true"
        o  = Spree::Order.find(f.order_id)
        orderid = o.id
        amount = (o.total)*100
        order_number = o.number
        curnc = o.currency
        bill_address = o.bill_address_id
        subsc_type = f.subs_type
        user = o.user_id
        item_price = o.item_total
        ship_address = o.ship_address_id
        items = o.item_count
        store = o.store_id
        var  =  o.credit_cards.last.gateway_customer_profile_id
        #Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
          if var.to_s.include?("cus")
           stripe_customer =   
           # begin 
              Stripe::Customer.retrieve(var)
               # rescue Stripe::CardError => e
               #   ExceptionNotifier.notify_exception(e)
               #   nil
               #  end
          
          if !stripe_customer.blank?
            charge = begin
                      Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
                     rescue Stripe::CardError => exception
                        ExceptionNotifier.notify_exception(e)
                        nil
                      end
            
            
            if  !charge.blank?
              transction = Spree::SubscritionTransctions.new
              transction.order_id = orderid
              transction.price = (amount/100).to_i
              transction.currency = curnc
              transction.subs_type =  subsc_type
              transction.user_id =  user
              transction.ref_number =  order_number
              transction.item_price = item_price
              transction.bill_address_id =  bill_address
              transction.ship_address_id = ship_address
              transction.item_count = items
              transction.line_item_id = f.id
              transction.store_id = store
              transction.save
              Spree::OrderMailer.subscription_email(f).deliver

            end
            
          end
      end
  end
  
end
def check_valid_date(lineitem,ago_date)
  if lineitem.order.completed?
    sub_end_date = lineitem.subs_date
    yesterday_date = Date.yesterday
    last_trans_date= Spree::SubscritionTransctions.where(:line_item_id=>lineitem.id).last.created_at.to_date rescue nil
    if last_trans_date ==  nil and  sub_end_date >= yesterday_date
      return true
    elsif (last_trans_date and (last_trans_date == ago_date ) and  sub_end_date >= yesterday_date)
      return true
    else
      return false          
    end
  else
    return false
  end
end