  desc "Rake Tasks"
  task task_order: :environment do
    
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
   
    daily.each do |f|
      
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
        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        
       if var.to_s.include?("cus")
        stripe_customer = Stripe::Customer.retrieve(var)
        
         
        charge = begin
          Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
          rescue Stripe::CardError => e
        end
        
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
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
        
       if var.to_s.include?("cus")

        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        stripe_customer = Stripe::Customer.retrieve(var)
          charge = begin
          Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
          rescue Stripe::CardError => e
          end
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
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
        
        if var.to_s.include?("cus")
          Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
          stripe_customer = Stripe::Customer.retrieve(var)
        
          charge = begin
          Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
          rescue Stripe::CardError => e
          end
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
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
         else
         end
      end
    end
  end
  
  task task_yearly: :environment do
    yearly = Spree::LineItem.where("subs_type = ?", 'yearly')
   
    yearly.to_s.each do |f|
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
   
        Stripe.api_key = "sk_test_je98XVAYSwxGfKKvXQrIhsas"
        
       if var.include?("cus")
        stripe_customer = Stripe::Customer.retrieve(var)
       
         charge = begin
          Stripe::Charge.create(:amount => amount.to_i , :currency => 'usd', :customer => stripe_customer ) 
          rescue Stripe::CardError => e
        end
        transction = Spree::SubscritionTransctions.new
        transction.order_id = orderid
        transction.price = amount
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
       else
       end
      end
    end
  end
  
  
