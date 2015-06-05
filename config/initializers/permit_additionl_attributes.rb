Spree::PermittedAttributes.checkout_attributes << [:is_recommended ]
Spree::Api::ApiHelpers.product_attributes.push :retailer_price
Spree::Api::ApiHelpers.variant_attributes.push :retailer_price
Spree::PermittedAttributes.user_attributes << :first_name
Spree::PermittedAttributes.user_attributes << :last_name
Spree::PermittedAttributes.user_attributes << :customer_number
Spree::PermittedAttributes.user_attributes << :credit_limit
Spree::PermittedAttributes.user_attributes << :curr_acc_blnc
Spree::PermittedAttributes.user_attributes << :purchase_on_account
Spree::PermittedAttributes.user_attributes << :balnce_date