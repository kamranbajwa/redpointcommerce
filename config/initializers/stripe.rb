 if ActiveRecord::Base.connection.table_exists? 'spree_payment_methods'
strip = Spree::Gateway::StripeGateway.where(:active=>true, :environment=>Rails.env).last
Stripe.api_key = strip[:preferences][:secret_key]
#STRIPE_PUBLIC_KEY = strip[:preferences][:publishable_key]
  Rails.configuration.stripe = {
      :publishable_key => strip[:preferences][:publishable_key],
      :secret_key      => strip[:preferences][:secret_key]
    }

    Stripe.api_key = Rails.configuration.stripe[:secret_key]
 #Spree::PaymentMethod.find_by_name "
end