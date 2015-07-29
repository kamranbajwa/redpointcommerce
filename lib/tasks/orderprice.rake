  desc "Rake Tasks"
  task task_order: :environment do
    puts "********************in taske*****************"
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
    daily.each do |f|
      puts "********************fond daily*****************"
      start_date = f.subs_date 
      todate_date = DateTime.now
      puts "********************fond daily*****************"+f.order_id.to_s
      if f.order.completed? and start_date!=nil and start_date > todate_date
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
        puts "********************before var*****************"+var.to_s
        
        if var.to_s.include?("cus")
           puts "********************cus fond*****************"
             # begin 
                               stripe_customer=  Stripe::Customer.retrieve(var) rescue ''
                               #    puts "********************stripe_customer*****************"
                               # rescue Stripe::CardError => e
                               #   ExceptionNotifier.notify_exception(e)
                               #   nil
                               #  end
          if !stripe_customer.blank?
            charge = begin
              puts "********************stripe_customer not blanck*****************"
                      Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
                     rescue Stripe::CardError => exception
                        ExceptionNotifier.notify_exception(e)
                        nil
                      end
            
            
            if  !charge.blank?
              puts "********************in transction*****************"
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
              transction.store_id = store
              transction.save
              o.deliver_order_confirmation_email

              puts "********************transction done*****************"
            end
            
          end
        else
          
        end
        
        
       end
      
    end
  end
  
  
  
  task task_weekly: :environment do
    f = Spree::LineItem.where("subs_type = ?", 'weekly')
    weekly.each do |f|    
      start_date = f.subs_date 
      todate_date = DateTime.now
      check = check_valid_date(f, 1.week.ago.to_date)
      if check
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
              o.deliver_order_confirmation_email

            end
            
          end
        else
           puts "******************** false"
        end
      end
    end
  end

  
  
  task task_monthly: :environment do
    monthly= Spree::LineItem.where("subs_type = ?", 'monthly')
    monthly.each do |f|
      start_date = f.subs_date 
      todate_date = DateTime.now
      check = check_valid_date(f, 1.month.ago.to_date)
      if check
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
       # Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        
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
              o.deliver_order_confirmation_email 
            end
            
          end
        else
          
        end
      end
    end
  end
  
  task task_yearly: :environment do
    yearly = Spree::LineItem.where("subs_type = ?", 'yearly')
    yearly.each do |f|
      check = check_valid_date(f, 1.year.ago.to_date)
      start_date = f.subs_date 
      todate_date = DateTime.now
      if check
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
              o.deliver_order_confirmation_email
            end
            
          end
        else
          
        end
      end
    end
end
def check_valid_date(lineitem,ago_date)
  if lineitem.order.completed?
    s_date = lineitem.subs_date
    today_date = Date.today
    last_trans_date= Spree::SubscritionTransctions.where(:line_item_id=>lineitem.id).last.created_at.to_date rescue nil
    if last_trans_date ==  nil and  s_date >= today_date
      return true
    elsif (last_trans_date and (last_trans_date == ago_date )_and  s_date >= today_date)
      return true
    else
      return false          
    end
  else
    return false
  end
end
  
  
  