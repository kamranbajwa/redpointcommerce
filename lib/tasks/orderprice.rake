require_relative 'subscription_product'
include SubscriptionProduct
  desc "Rake Tasks"
  task task_order: :environment do
    puts "********************in taske*****************"
    daily  = all_valid_subscription.where("subs_type = ?", 'daily')
    daily.each do |f|
      check = check_valid_date(f, 1.day.ago.to_date)
      if check
        subscribe_each_line_itme(f)
      end
    end
  end
  
  
  
  task task_weekly: :environment do
    weekly = all_valid_subscription.where("subs_type = ? ", 'weekly')
    weekly.each do |f|
    is_valid_date = check_valid_date(f, 1.week.ago.to_date)
      if is_valid_date
        subscribe_each_line_itme(f)
    end
  end
  end

  
  
  task task_monthly: :environment do
    monthly= all_valid_subscription.where("subs_type = ?", 'monthly')
    monthly.each do |f|
      check = check_valid_date(f, 1.month.ago.to_date)
      if check
        subscribe_each_line_itme(f)
    end
    end
  end
  
  task task_yearly: :environment do
    yearly = all_valid_subscription.where("subs_type = ?", 'yearly')
    yearly.each do |f|
      check = check_valid_date(f, 1.year.ago.to_date)
      if check
        subscribe_each_line_itme(f)
      end
    end
  end