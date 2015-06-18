every 1.day , at: '7:00 pm'  do
   rake "task_order"
end

every :sunday, at: '5:30 pm' do
  rake "task_weekly"  
end


every 1.month, at: '6:30 pm' do
    rake"task_monthly"  
end

every 1.year, at: "8:30 pm" do
  rake "task_yearly"
end






  