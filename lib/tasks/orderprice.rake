  desc "Rake Tasks"
  task task_order: :environment do
    puts "********************in taske*****************"
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
    daily.each do |f|
      puts "********************fond daily*****************"
      start_date = f.subs_date 
      todate_date = DateTime.now
      puts "********************fond daily*****************"+start_date
      if start_date > todate_date
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
           stripe_customer =   begin 
                                 Stripe::Customer.retrieve(var)
                                 dsfsdfdfd
                                  puts "********************stripe_customer*****************"
                               rescue Stripe::CardError => e
                                 ExceptionNotifier.notify_exception(e)
                                 nil
                                end
          
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
              puts "********************transction done*****************"
            end
            
          end
        else
          
        end
        
        
      end
      
    end
  end
  
  
  
  task task_weekly: :environment do
    weekly = Spree::LineItem.where("subs_type = ?", 'weekly')
    weekly.each do |f|
      start_date = f.subs_date 
      todate_date = DateTime.now
      if start_date > todate_date
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
           stripe_customer =   begin 
                                 Stripe::Customer.retrieve(var)
                               rescue Stripe::CardError => e
                                 ExceptionNotifier.notify_exception(e)
                                 nil
                                end
          
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
              transction.store_id = store
              transction.save
            end
            
          end
        else
          
        end
      end
    end
  end
  
  
  
  task task_monthly: :environment do
    monthly= Spree::LineItem.where("subs_type = ?", 'monthly')
    
    monthly.each do |f|
      start_date = f.subs_date 
      todate_date = DateTime.now
      
      if start_date > todate_date
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
           stripe_customer =   begin 
                                 Stripe::Customer.retrieve(var)
                               rescue Stripe::CardError => e
                                 ExceptionNotifier.notify_exception(e)
                                 nil
                                end
          
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
              transction.store_id = store
              transction.save
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
      start_date = f.subs_date 
      todate_date = DateTime.now
      if start_date > todate_date
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
           stripe_customer =   begin 
                                 Stripe::Customer.retrieve(var)
                               rescue Stripe::CardError => e
                                 ExceptionNotifier.notify_exception(e)
                                 nil
                                end
          
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
              transction.store_id = store
              transction.save
            end
            
          end
        else
          
        end
      end
    end
  end
  
  
  