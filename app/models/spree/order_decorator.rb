Spree::Order.class_eval do
 has_paper_trail
  #replace :delivery to any other state 
  # remove_checkout_step :delivery  
end 