Spree::Order.class_eval do
has_paper_trail :ignore => [:created_at, :updated_at],on: [:update]
  #replace :delivery to any other state 
  # remove_checkout_step :delivery  
end 