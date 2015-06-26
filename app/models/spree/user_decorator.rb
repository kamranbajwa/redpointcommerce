Spree::User.class_eval do
  belongs_to :user_group
  has_many :account_transactions
  devise :timeoutable

   def timeout_in
    return Spree::Organization.first.try(:session_time_out).try(:hours) || 24.hours
  end


end 