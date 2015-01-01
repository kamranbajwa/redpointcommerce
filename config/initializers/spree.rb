# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false
end

Spree.user_class = "Spree::User"

Devise.secret_key = "362b58b50a53bbcc3eae88d5ce2795ccce94c3960cf20f07f0676ab3585beb1b9ac85e8a6b149fb485e2af60f1f1ec47aa72"
