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

attachment_config = {
 
  s3_credentials: {
    access_key_id: 'AKIAJJGUHCUAKNL2LYAQ',
    secret_access_key: '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',
    bucket: 'redpoint-commerce'
  },

  storage:        :s3,
  s3_headers:     { "Cache-Control" => "max-age=31557600" },
  s3_protocol:    "https",
  bucket:         'redpoint-commerce',
  url:            ":s3_domain_url",

  styles: {
      mini:     "48x48>",
      small:    "100x100>",
      product:  "240x240!",
      large:    "600x600>",
       logo: '240x75#',
    square: '200x200#',
    medium: '300x300>',
    xlarge:  '1300x500!',
    xxlarge: '1280x600!',
    thumb: '6x6#'
  },

  path:           "/spree/:class/:id/:style/:basename.:extension",
  default_url:    "/spree/:class/:id/:style/:basename.:extension",
  default_style:  "product"
}
if Rails.env.production?
attachment_config.each do |key, value|
  Spree::Image.attachment_definitions[:attachment][key.to_sym] = value
  Spree::Favicon.attachment_definitions[:favicon_image][key.to_sym] = value
  Spree::SliderImage.attachment_definitions[:slider_image][key.to_sym] = value
  Spree::Logo.attachment_definitions[:avatar][key.to_sym] = value
  Spree::Blog.attachment_definitions[:avatar][key.to_sym] = value
  

end
end

if Rails.env.development?
attachment_config.each do |key, value|
  Spree::Image.attachment_definitions[:attachment][key.to_sym] = value
  Spree::Favicon.attachment_definitions[:favicon_image][key.to_sym] = value
  Spree::SliderImage.attachment_definitions[:slider_image][key.to_sym] = value
  Spree::Logo.attachment_definitions[:avatar][key.to_sym] = value
  Spree::Blog.attachment_definitions[:avatar][key.to_sym] = value
  

end
end



SpreeEditor::Config.tap do |config|
  config.current_editor = 'CKEditor'
  config.ids = 'product_description page_body event_body'
end
Spree::PermittedAttributes.checkout_attributes << [:is_recommended ]
Spree::Api::ApiHelpers.product_attributes.push :retailer_price
Spree::Api::ApiHelpers.variant_attributes.push :retailer_price
Spree::Api::ApiHelpers.product_attributes.push :is_recommended, :subscription, :subscription_type
