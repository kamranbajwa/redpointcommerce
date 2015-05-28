
  desc "Rake Tasks"
  task task_order: :environment do
    
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
    weekly = Spree::LineItem.where("subs_type = ?", 'weekly')
    
    monthly= Spree::LineItem.where("subs_type = ?", 'monthly')
    yearly = Spree::LineItem.where("subs_type = ?", 'yearly')
    
    
    daily.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss daily------- #{f.order_id}"
      puts"00000000000000000------------------#{f.price}"
      puts"price #{f.price}"
      puts"current#{f.currency}"
      puts"cost-price #{f.cost_price}"
      puts"opoopoooppopoop-- Tax include total#{f.included_tax_total}"
      puts"pre tax amount ---------#{f.pre_tax_amount}"
      puts"subcription type ---------#{f.subs_type}"
      
     o = Spree::Order.find_by_id(f.order_id)
     
    card =  o.credit_cards
    if card.blank?
         puts"---------------------------------------------"
    else
#         stripe_customer_id = card.first.gateway_customer_profile_id
#         stripe_customer = Stripe::Customer.retrieve(stripe_customer_id)
#         charge_user = Stripe::Charge.create(:amount => (200*100), :currency => 'usd', :customer => 'cus_6HZCcTakrybDhv')
#      
    end


   
      
    end
    
    weekly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  weekly-------#{f.order_id}"
      puts"00000000000000000------------------#{f.price}"
      puts"price #{f.price}"
      puts"current#{f.currency}"
      puts"cost-price #{f.cost_price}"
      puts"opoopoooppopoop-- Tax include total#{f.included_tax_total}"
      puts"pre tax amount ---------#{f.pre_tax_amount}"
      puts"subcription type ---------#{f.subs_type}"
    end
    
    monthly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  monthly--------#{f.order_id}"
      puts"00000000000000000------------------#{f.price}"
      puts"price #{f.price}"
      puts"current#{f.currency}"
      puts"cost-price #{f.cost_price}"
      puts"opoopoooppopoop-- Tax include total#{f.included_tax_total}"
      puts"pre tax amount ---------#{f.pre_tax_amount}"
      puts"subcription type ---------#{f.subs_type}"
      
       
    end
    
    yearly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  yearly--------#{f.order_id}"
      puts"00000000000000000------------------#{f.price}"
      puts"price #{f.price}"
      puts"current#{f.currency}"
      puts"cost-price #{f.cost_price}"
      puts"opoopoooppopoop-- Tax include total#{f.included_tax_total}"
      puts"pre tax amount ---------#{f.pre_tax_amount}"
      puts"subcription type ---------#{f.subs_type}"
    end
    
  end
