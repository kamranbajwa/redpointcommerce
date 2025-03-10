SpreeExample::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false
  config.serve_static_assets = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.perform_deliveries = true

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations
  config.active_record.migration_error = :page_load
  config.action_mailer.perform_deliveries = true
  config.action_mailer.delivery_method = :smtp

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true
  config.action_mailer.default_url_options = { :host => 'redpoint-commerce.herokuapp.com' }
  # config.action_mailer.smtp_settings = {
  #   address: "smtp.gmail.com",
  #   port: 587,
  #   domain: 'gmail.com',
  #   authentication: "plain",
  #   enable_starttls_auto: true,
  #   user_name: "shoaib@gems.techverx.com",
  #   password: "techverx123"
  # }
  ActionMailer::Base.smtp_settings = {
  :user_name => 'redpointrack',
  :password => 'p00pybutt',
  :domain => 'redpoint-commerce.herokuapp.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}


  config.paperclip_defaults = {
  :storage => :s3,
   s3_credentials: {
    access_key_id: 'AKIAIN5V5SNBRX5H7GQA',
    secret_access_key: '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',
    bucket: 'redpoint-commerce'
  },
   path:           "/spree/:class/:id/:style/:basename.:extension",
  default_url:    "/spree/:class/:id/:style/:basename.:extension",
  default_style:  "product"
}
# Rails.application.config.middleware.use ExceptionNotification::Rack,
#   :email => {
#     :email_prefix => "[notifier] ",
#     :sender_address => %{"notifier" <shoaib@gems.techverx.com>},
#     :exception_recipients => %w{shoaib@gems.techverx.com}
#   }

end
