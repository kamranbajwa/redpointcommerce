
  desc "Rake Tasks"
  task task_order: :environment do
    
    daily  = Spree::LineItem.where("subs_type = ?", 'daily')
    weekly = Spree::LineItem.where("subs_type = ?", 'weekly')
    
    monthly= Spree::LineItem.where("subs_type = ?", 'monthly')
    yearly = Spree::LineItem.where("subs_type = ?", 'yearly')
    
    
    daily.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss daily------- #{f.order_id}"
      puts"00000000000000000------------------#{f.price}"
    end
    
    weekly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  weekly-------#{f.order_id}"
    end
    
    monthly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  monthly--------#{f.order_id}"
    end
    
    yearly.each do |f|
      puts"sssssssssssssssssssssssssssssssssssssssssssss  yearly--------#{f.order_id}"
    end
    
  end
