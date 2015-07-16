Spree::Address.class_eval do
has_paper_trail :ignore => [:created_at, :updated_at,:last_sign_in_ip,:last_sign_in_at,:current_sign_in_at,:sign_in_count],on: [:update]
end 